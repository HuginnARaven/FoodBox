from rest_framework import serializers
from rest_framework.authtoken.models import Token

from companies.models import VirtualContract
from users.models import *
from workers.models import *
from .models import *


class ProductSerializer(serializers.ModelSerializer):
    menu_id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "description",
            "picture",
            "menu_id",
        ]


class MenuSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True, source="product_set")

    class Meta:
        model = Menu
        fields = [
            'id',
            "name",
            "description",
            "products"
        ]


class AcceptOfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = [
            'courier',
        ]

    def update(self, instance, validated_data):
        courier = validated_data['courier']
        if instance.status == 'S':
            allowed_couriers_id = SupplierCourier.objects.values_list('id', flat=True).filter(
                supplier=self.context['request'].user.supplier)

            if courier.id not in list(allowed_couriers_id):
                raise serializers.ValidationError({'ValidationError': 'This is not your courier'})
            instance.courier = courier
            instance.status = 'A'
            instance.save()
            return instance
        else:
            raise serializers.ValidationError({'ValidationError': 'Status incorrect'})


class GetSupplierCourierSerializer(serializers.ModelSerializer):
    username = serializers.CharField(read_only=True, source='courier.username')

    class Meta:
        model = SupplierCourier
        fields = ["id", "username", "first_name", 'last_name', "rfid"]


class GetSupplierContractsSerializer(serializers.ModelSerializer):
    company_id = serializers.IntegerField(read_only=True, source="company.id")
    company_name = serializers.CharField(read_only=True, source='company.name')
    company_description = serializers.CharField(read_only=True, source='company.description')

    class Meta:
        model = VirtualContract
        fields = ["id", 'is_approved', 'company_id', 'company_name', 'company_description']
