from django.db import models

from users.models import Company, CompanyWorker, Supplier


class Box(models.Model):
    address = models.CharField(max_length=255)

    is_active = models.BooleanField(default=False)
    last_activity = models.DateTimeField(null=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=False)

    def __str__(self):
        return f'Box № {self.id} owned by {self.company.name}'


class AllowedWorkers(models.Model):
    worker = models.ForeignKey(CompanyWorker, on_delete=models.CASCADE, null=False)
    box = models.ForeignKey(Box, on_delete=models.CASCADE, null=False)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=False)
    dateAdded = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'AllowedWorker Id: {self.id} for box {self.box}'


class VirtualContract(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=False)
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE, null=False)
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return f'VirtualContract for supplier: {self.supplier} from company {self.company}'
