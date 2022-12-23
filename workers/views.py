from django.shortcuts import render
from rest_framework import generics, status, viewsets
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated

from permission.permission import *
from .serializers import *


class MakeOfferView(generics.CreateAPIView):
    queryset = Offer.objects.all()
    serializer_class = CreateOfferSerializer
    permission_classes = [IsAuthenticated, IsWorker]


class RateOfferView(generics.UpdateAPIView):
    queryset = Offer.objects.all()
    serializer_class = RateOfferSerializer
    permission_classes = [IsAuthenticated, IsWorker]

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(worker=self.request.user.companyworker, pk=self.kwargs['pk'])


class GetAllowedSuppliers(generics.ListAPIView):
    queryset = VirtualContract.objects.all()
    permission_classes = [IsAuthenticated, IsWorker]
    serializer_class = GetAllowedMenuSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(company=self.request.user.companyworker.company, is_approved=True)