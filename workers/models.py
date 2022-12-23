from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

from companies.models import Box
from suppliers.models import Product
from users.models import CompanyWorker, Supplier, SupplierCourier


class Offer(models.Model):
    STATUS = [
        ('S', 'StartPoint'),
        ('A', 'Accepted'),
        ('D', 'Delivered'),
        ('G', 'Got'),
    ]

    worker = models.ForeignKey(CompanyWorker, on_delete=models.CASCADE, null=False)
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE, null=False)
    courier = models.ForeignKey(SupplierCourier, on_delete=models.CASCADE, null=True)
    box = models.ForeignKey(Box, on_delete=models.CASCADE, null=False)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=False)
    status = models.CharField(
        max_length=1,
        choices=STATUS,
        default='S',
    )
    rating = models.IntegerField(validators=[
            MaxValueValidator(10),
            MinValueValidator(1)
        ], null=True)
