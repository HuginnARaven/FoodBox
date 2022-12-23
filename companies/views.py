from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets

from permission.permission import *
from users.models import UserAccount
from .serializers import *


class BoxCreateView(generics.CreateAPIView):
    queryset = AllowedWorkers.objects.all()
    serializer_class = BoxSerializer
    permission_classes = [IsAuthenticated, IsCompany]

    def perform_create(self, serializer):
        serializer.save(company=self.request.user.company)


class BoxAddWorkerView(viewsets.ModelViewSet):
    queryset = AllowedWorkers.objects.all()
    serializer_class = BoxWorkersSerializer
    permission_classes = [IsAuthenticated, IsCompany]

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(company=self.request.user.company, box=Box.objects.get(id=self.kwargs['box_id']))


class MakeContractView(generics.CreateAPIView):
    queryset = VirtualContract.objects.all()
    serializer_class = VirtualContractSerializer
    permission_classes = [IsAuthenticated, IsCompany]


class GetCompanyWorkers(viewsets.ModelViewSet):
    queryset = CompanyWorker.objects.all()
    serializer_class = GetCompanyWorkersSerializer
    permission_classes = [IsAuthenticated, IsCompany]

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(company=self.request.user.company)

    def perform_destroy(self, instance):
        worker_account = UserAccount.objects.get(id=instance.worker_id)
        instance.delete()
        worker_account.delete()


class GetCompanyBoxes(viewsets.ModelViewSet):
    queryset = Box.objects.all()
    serializer_class = GetCompanyBoxesSerializer
    permission_classes = [IsAuthenticated, IsCompany]

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(company=self.request.user.company)


class GetCompanyContractsView(viewsets.ModelViewSet):
    queryset = VirtualContract.objects.all()
    serializer_class = GetCompanyContractsSerializer
    permission_classes = [IsAuthenticated, IsCompany]

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(company=self.request.user.company)


class GetSuppliersView(viewsets.ModelViewSet):
    queryset = Supplier.objects.all()
    serializer_class = GetSuppliersInfoSerializer
    permission_classes = [IsAuthenticated, IsCompanyOrSafe]
