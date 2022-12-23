from django.db import models

from users.models import Supplier


class Menu(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE, null=False)

    def __str__(self):
        return f"{self.name} from {self.supplier.name}({self.supplier.supplier.username})"


class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    picture = models.CharField(max_length=100, default='')

    menu = models.ForeignKey(Menu, on_delete=models.CASCADE, null=False)
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE, null=False)

    def __str__(self):
        return self.name
