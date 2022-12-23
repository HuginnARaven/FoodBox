from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework.authtoken.models import Token

from .models import *


class UserAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = [
            'username',
            'email',
            'role',
        ]


class SupplierSinUpSerializer(serializers.ModelSerializer):
    password = serializers.CharField(style={'input_type': 'password'}, write_only=True, validators=[validate_password])
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    address = serializers.CharField()
    description = serializers.CharField()
    name = serializers.CharField()

    class Meta:
        model = UserAccount
        fields = [
            'username',
            'email',
            'password',
            'password2',
            'name',
            'address',
            'description',
        ]
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def save(self, **kwargs):
        user = UserAccount(
            username=self.validated_data['username'],
            email=self.validated_data['email'],
        )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        if password != password2:
            raise serializers.ValidationError({'error': 'password do not match'})
        user.set_password(password)
        user.role = 'S'
        user.save()
        name = self.validated_data['name']
        address = self.validated_data['address']
        description = self.validated_data['description']
        Supplier.objects.create(supplier=user, address=address, description=description, name=name)
        return user


class CompanySinUpSerializer(serializers.ModelSerializer):
    password = serializers.CharField(style={'input_type': 'password'}, write_only=True, validators=[validate_password])
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    description = serializers.CharField()
    name = serializers.CharField()

    class Meta:
        model = UserAccount
        fields = [
            'username',
            'email',
            'password',
            'password2',
            'name',
            'description',
        ]
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def save(self, **kwargs):
        user = UserAccount(
            username=self.validated_data['username'],
            email=self.validated_data['email'],
        )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        if password != password2:
            raise serializers.ValidationError({'error': 'password do not match'})
        user.set_password(password)
        user.role = 'C'
        user.save()
        name = self.validated_data['name']
        description = self.validated_data['description']
        Company.objects.create(company=user, description=description, name=name)
        return user


class WorkerSinUpSerializer(serializers.ModelSerializer):
    password = serializers.CharField(style={'input_type': 'password'}, write_only=True, validators=[validate_password])
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    first_name = serializers.CharField()
    last_name = serializers.CharField()

    def validate_user(self):
        return self.context['request'].user

    class Meta:
        model = UserAccount
        fields = [
            'username',
            'email',
            'password',
            'password2',
            'first_name',
            'last_name',
        ]
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def save(self, **kwargs):
        user = UserAccount(
            username=self.validated_data['username'],
            email=self.validated_data['email'],
        )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        if password != password2:
            raise serializers.ValidationError({'error': 'password do not match'})
        user.set_password(password)
        user.role = 'CW'
        user.save()
        first_name = self.validated_data['first_name']
        last_name = self.validated_data['last_name']
        company = self.context['request'].user.company
        CompanyWorker.objects.create(worker=user, first_name=first_name, last_name=last_name, company=company)

        return user


class CurrierSinUpSerializer(serializers.ModelSerializer):
    password = serializers.CharField(style={'input_type': 'password'}, write_only=True, validators=[validate_password])
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    first_name = serializers.CharField()
    last_name = serializers.CharField()

    def validate_user(self):
        return self.context['request'].user

    class Meta:
        model = UserAccount
        fields = [
            'username',
            'email',
            'password',
            'password2',
            'first_name',
            'last_name',
        ]
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def save(self, **kwargs):
        user = UserAccount(
            username=self.validated_data['username'],
            email=self.validated_data['email'],
        )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        if password != password2:
            raise serializers.ValidationError({'error': 'password do not match'})
        user.set_password(password)
        user.role = 'SC'
        user.save()
        first_name = self.validated_data['first_name']
        last_name = self.validated_data['last_name']
        supplier = self.context['request'].user.supplier
        SupplierCourier.objects.create(courier=user, first_name=first_name, last_name=last_name, supplier=supplier)

        return user


class ChangePasswordSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    old_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = UserAccount
        fields = ('old_password', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(["Password fields didn't match."])

        return attrs

    def validate_old_password(self, value):
        user = self.context['request'].user
        if not user.check_password(value):
            raise serializers.ValidationError(["Old password is not correct"])
        return value

    def update(self, instance, validated_data):

        instance.set_password(validated_data['password'])
        instance.save()

        return instance


class SupplierProfileSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='supplier.name')
    description = serializers.CharField(source='supplier.description')
    address = serializers.CharField(source='supplier.address')
    username = serializers.CharField(read_only=True)
    email = serializers.CharField(read_only=True)
    role = serializers.CharField(read_only=True)

    class Meta:
        model = UserAccount
        fields = ["username", "email", "role", "name", "description", "address"]

    def update(self, instance, validated_data):
        supplier_data = validated_data.pop('supplier')
        supplier = instance.supplier
        for k, v in supplier_data.items():
            setattr(supplier, k, v)
        supplier.save()
        return instance


class CompanyProfileSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='company.name')
    description = serializers.CharField(source='company.description')
    username = serializers.CharField(read_only=True)
    email = serializers.CharField(read_only=True)
    role = serializers.CharField(read_only=True)

    class Meta:
        model = UserAccount
        fields = ["username", "email", "role", "name", "description"]

    def update(self, instance, validated_data):
        company_data = validated_data.pop('company')
        company = instance.company
        for k, v in company_data.items():
            setattr(company, k, v)
        company.save()
        return instance


class WorkerProfileSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(source='companyworker.first_name')
    last_name = serializers.CharField(source='companyworker.last_name')
    username = serializers.CharField(read_only=True)
    email = serializers.CharField(read_only=True)
    role = serializers.CharField(read_only=True)
    company = serializers.CharField(read_only=True, source="companyworker.company.name")

    class Meta:
        model = UserAccount
        fields = ["username", "email", "role", "first_name", "last_name", "company"]

    def update(self, instance, validated_data):
        supplier_data = validated_data.pop('companyworker')
        supplier = instance.supplier
        for k, v in supplier_data.items():
            setattr(supplier, k, v)
        supplier.save()
        return instance


class CourierProfileSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(source='suppliercourier.first_name')
    last_name = serializers.CharField(source='suppliercourier.last_name')
    username = serializers.CharField(read_only=True)
    email = serializers.CharField(read_only=True)
    role = serializers.CharField(read_only=True)
    Supplier = serializers.CharField(read_only=True, source="suppliercourier.supplier.name")

    class Meta:
        model = UserAccount
        fields = ["username", "email", "role", "first_name", "last_name", "Supplier"]

    def update(self, instance, validated_data):
        supplier_data = validated_data.pop('suppliercourier')
        supplier = instance.supplier
        for k, v in supplier_data.items():
            setattr(supplier, k, v)
        supplier.save()
        return instance

