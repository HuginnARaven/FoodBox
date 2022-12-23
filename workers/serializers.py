from rest_framework import serializers
from rest_framework.authtoken.models import Token

from companies.models import VirtualContract, Box
from suppliers.serializers import MenuSerializer
from workers.models import Offer


class CreateOfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = [
            'product',
            'box',
        ]

    def save(self, **kwargs):
        product = self.validated_data['product']
        supplier = self.validated_data['product'].supplier
        box = self.validated_data['box']

        allowed_suppliers_id = VirtualContract.objects.values_list('supplier_id', flat=True).filter(
            company=self.context['request'].user.companyworker.company,
            is_approved=True)
        allowed_boxes_id = Box.objects.values_list('id', flat=True).filter(
            company=self.context['request'].user.companyworker.company)
        if supplier.id not in list(allowed_suppliers_id):
            raise serializers.ValidationError({'ValidationError': 'Supplier has not VirtualContract with your company'})
        if self.validated_data['box'].id not in list(allowed_boxes_id):
            raise serializers.ValidationError({'ValidationError': 'Your company has not this box'})
        if Offer.objects.all().filter(box=box, status='D') or \
                Offer.objects.all().filter(box=box, status='S') or \
                Offer.objects.all().filter(box=box, status='A'):
            raise serializers.ValidationError({'ValidationError': 'Box has another offer'})

        return Offer.objects.create(supplier=supplier,
                                    box=box,
                                    worker=self.context['request'].user.companyworker,
                                    product=product)


class RateOfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = [
            'rating',
        ]


class GetAllowedMenuSerializer(serializers.ModelSerializer):
    supplier_id = serializers.IntegerField(source='supplier.id')
    supplier_name = serializers.CharField(source='supplier.name')
    supplier_description = serializers.CharField(source='supplier.description')
    menus = MenuSerializer(many=True, read_only=True, source='supplier.menu_set')

    class Meta:
        model = VirtualContract
        fields = ["supplier_id", "supplier_name", 'supplier_description', "menus"]
