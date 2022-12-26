from django.shortcuts import render
from rest_framework import generics, status, viewsets
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet

from companies.models import *
from companies.serializers import *
from permission.permission import *
from .serializers import *


class MenuCreateView(generics.CreateAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
    permission_classes = [IsAuthenticated, IsSupplier]

    def perform_create(self, serializer):
        serializer.save(supplier=self.request.user.supplier)

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(supplier=self.request.user.supplier, pk=self.kwargs['pk'])

    def get_object(self):
        try:
            return Menu.objects.get(supplier=self.request.user.supplier, pk=self.kwargs['pk'])
        except Menu.DoesNotExist:
            raise Menu()


# class MenuOptionsView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Menu.objects.all()
#     serializer_class = MenuSerializer
#     permission_classes = [IsAuthenticated, IsSupplier]
#
#     def get_queryset(self):
#         qs = super().get_queryset()
#         return qs.filter(supplier=self.request.user.supplier, pk=self.kwargs['pk'])
#
#
# class MenuGetAllView(generics.ListAPIView):
#     queryset = Menu.objects.all()
#     serializer_class = MenuSerializer
#     permission_classes = [IsAuthenticated, IsSupplier]
#
#     def get_queryset(self):
#         qs = super().get_queryset()
#         return qs.filter(supplier=self.request.user.supplier)


class MenuOptionsViewset(viewsets.ModelViewSet):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
    permission_classes = [IsAuthenticated, IsSupplier]

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(supplier=self.request.user.supplier)

    def perform_create(self, serializer):
        serializer.save(supplier=self.request.user.supplier)


class ProductCreateView(generics.CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated, IsSupplier]

    def perform_create(self, serializer):
        serializer.save(supplier=self.request.user.supplier, menu=Menu.objects.get(id=self.kwargs['menu_id']))

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(supplier=self.request.user.supplier, menu=self.kwargs['menu_id'])

    def get_object(self):
        try:
            return Product.objects.get(supplier=self.request.user.supplier, pk=self.kwargs['pk'])
        except Product.DoesNotExist:
            raise Product()


class ProductOptionsView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated, IsSupplier]

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(supplier=self.request.user.supplier, pk=self.kwargs['pk'], menu=self.kwargs['menu_id'])


class ProductViewset(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated, IsSupplier]

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(supplier=self.request.user.supplier)


class ProductGetAllView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated, IsSupplier]

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(supplier=self.request.user.supplier, menu=self.kwargs['menu_id'])


class ResponseContractView(generics.RetrieveUpdateDestroyAPIView):
    queryset = VirtualContract.objects.all()
    serializer_class = VirtualContractSerializer
    permission_classes = [IsAuthenticated, IsSupplier]

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(supplier=self.request.user.supplier, pk=self.kwargs['pk'],)

    def perform_update(self, serializer):
        serializer.save(is_approved=True)


class GetAllOffersView(generics.ListAPIView):
    queryset = Offer.objects.all()
    serializer_class = AcceptOfferSerializer
    permission_classes = [IsAuthenticated, IsSupplier]

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(supplier=self.request.user.supplier)


class ResponseOfferView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Offer.objects.all()
    serializer_class = AcceptOfferSerializer
    permission_classes = [IsAuthenticated, IsSupplier]

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(supplier=self.request.user.supplier, pk=self.kwargs['pk'],)

    def perform_update(self, serializer):
        serializer.save(status='A')


class GetSupplierCouriers (ModelViewSet):
    queryset = SupplierCourier.objects.all()
    serializer_class = GetSupplierCourierSerializer
    permission_classes = [IsAuthenticated, IsSupplier]

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(supplier=self.request.user.supplier)

    def perform_destroy(self, instance):
        courierAccount = UserAccount.objects.get(id=instance.courier_id)
        instance.delete()
        courierAccount.delete()


class GetSupplierContractsView(viewsets.ModelViewSet):
    queryset = VirtualContract.objects.all()
    serializer_class = GetSupplierContractsSerializer
    permission_classes = [IsAuthenticated, IsSupplier]

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(supplier=self.request.user.supplier)
