from rest_framework import serializers
from rest_framework.authtoken.models import Token

from companies.models import *
from suppliers.serializers import MenuSerializer


class BoxWorkersSerializer(serializers.ModelSerializer):
    worker_username = serializers.CharField(read_only=True, source='worker.worker.username')
    box_id = serializers.IntegerField(read_only=True)
    class Meta:
        model = AllowedWorkers
        fields = [
            'id',
            'box_id',
            'worker',
            'worker_username'
        ]

    def create(self, validated_data):
        worker = validated_data['worker']
        box = Box.objects.get(id=self.context.get('view').kwargs.get('box_id'))
        # box = self.validated_data['box']
        company = self.context['request'].user.company

        allowed_workers_id = CompanyWorker.objects.values_list('id', flat=True).filter(
            company=company)
        allowed_boxes_id = Box.objects.values_list('id', flat=True).filter(
            company=company)

        if worker.id not in list(allowed_workers_id):
            raise serializers.ValidationError({'ValidationError': 'Worker don`t belong to your company  or exist'})
        if box.id not in list(allowed_boxes_id):
            raise serializers.ValidationError({'ValidationError': 'Your company has not this box'})
        if AllowedWorkers.objects.all().filter(worker=worker, box=box, company=company):
            raise serializers.ValidationError({'ValidationError': 'Worker already added to the box'})

        return AllowedWorkers.objects.create(worker=worker, box=box, company=company)

    # def save(self, **kwargs):
    #     worker = self.validated_data['worker']
    #     box = Box.objects.get(id=self.context.get('view').kwargs.get('box_id'))
    #     #box = self.validated_data['box']
    #     company = self.context['request'].user.company
    #
    #     allowed_workers_id = CompanyWorker.objects.values_list('id', flat=True).filter(
    #         company=company)
    #     allowed_boxes_id = Box.objects.values_list('id', flat=True).filter(
    #         company=company)
    #
    #     if worker.id not in list(allowed_workers_id):
    #         raise serializers.ValidationError({'ValidationError': 'Worker don`t belong to your company  or exist'})
    #     if box.id not in list(allowed_boxes_id):
    #         raise serializers.ValidationError({'ValidationError': 'Your company has not this box'})
    #     if AllowedWorkers.objects.all().filter(worker=worker, box=box, company=company):
    #         raise serializers.ValidationError({'ValidationError': 'Worker already added to the box'})
    #
    #     return AllowedWorkers.objects.create(worker=worker,
    #                                          box=box,
    #                                          company=company)


class BoxSerializer(serializers.ModelSerializer):
    class Meta:
        model = Box
        fields = [
            'address'
        ]


class VirtualContractSerializer(serializers.ModelSerializer):
    supplier_id = serializers.IntegerField(read_only=True, source="supplier.id")
    class Meta:
        model = VirtualContract
        fields = ["supplier_id",]

    def create(self, validated_data):
        supplier_id = self.context.get('view').kwargs.get('supplier_id')
        company = self.context['request'].user.company
        if Supplier.objects.all().filter(id=supplier_id):
            if VirtualContract.objects.all().filter(supplier=Supplier.objects.get(id=supplier_id), company=company):
                raise serializers.ValidationError({'ValidationError': 'You have already sent request to this supplier'})
            contract = VirtualContract(supplier=Supplier.objects.get(id=supplier_id), company=company)
            contract.save()
            return contract
        else:
            raise serializers.ValidationError({'ValidationError': 'Supplier do not exist'})


class GetCompanyWorkersSerializer(serializers.ModelSerializer):
    username = serializers.CharField(read_only=True, source='worker.username')
    class Meta:
        model = CompanyWorker
        fields = ["id", 'username', "first_name", 'last_name', "rfid"]


class GetCompanyBoxesSerializer(serializers.ModelSerializer):
    workers = BoxWorkersSerializer(many=True, read_only=True, source="allowedworkers_set")
    address = serializers.CharField(read_only=True)
    last_activity = serializers.DateTimeField(read_only=True)
    class Meta:
        model = Box
        fields = ["id", 'address', "is_active", 'last_activity', 'workers']


class GetCompanyContractsSerializer(serializers.ModelSerializer):
    is_approved = serializers.BooleanField(read_only=True)
    supplier_id = serializers.IntegerField(read_only=True, source="supplier.id")
    supplier_name = serializers.CharField(read_only=True, source='supplier.name')

    class Meta:
        model = VirtualContract
        fields = ["id", 'supplier_id', 'supplier_name', 'is_approved']


class GetSuppliersInfoSerializer(serializers.ModelSerializer):
    name = serializers.CharField(read_only=True)
    address = serializers.CharField(read_only=True)
    description = serializers.CharField(read_only=True)
    menus = MenuSerializer(many=True, read_only=True, source='menu_set')
    have_contact = serializers.SerializerMethodField()

    class Meta:
        model = Supplier
        fields = ["id", 'name', 'address', 'description', 'have_contact', 'menus']

    def get_have_contact(self, obj):
        contracts = VirtualContract.objects.filter(company=self.context['request'].user.company, supplier=obj).count()
        return bool(contracts)
