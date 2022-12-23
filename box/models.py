from django.db import models

from companies.models import Box
from users.models import CompanyWorker, Company
from workers.models import Offer


class BoxRFIDLog(models.Model):
    box = models.ForeignKey(Box, on_delete=models.CASCADE, null=False)
    rfid = models.CharField(max_length=255, null=False)
    last_register = models.DateTimeField(null=False)

    def __str__(self):
        return f"RFID: {self.rfid} registered on {self.last_register} for {self.box}"


class BoxLog(models.Model):
    box = models.ForeignKey(Box, on_delete=models.CASCADE, null=False)
    worker = models.ForeignKey(CompanyWorker, on_delete=models.CASCADE, null=False)
    offer = models.ForeignKey(Offer, on_delete=models.CASCADE, null=False)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=False)
    message = models.TextField(null=True)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.date
