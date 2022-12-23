from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings
from rest_framework.authtoken.models import Token
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.dispatch import receiver
from django.urls import reverse
from django_rest_passwordreset.signals import reset_password_token_created
from django.core.mail import send_mail


class UserAccount(AbstractUser):
    USER_ROLES = [
        ('C', 'Company'),
        ('S', 'Supplier'),
        ('CW', 'Company worker'),
        ('SC', 'Supplier courier'),
        ('A', 'Admin'),
    ]
    last_login = None
    first_name = None
    last_name = None
    role = models.CharField(
        max_length=2,
        choices=USER_ROLES,
    )

    def __str__(self):
        return self.username


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):

    email_plaintext_message = "{}?token={}".format(reverse('password_reset:reset-password-request'), reset_password_token.key)

    send_mail(
        # title:
        "Password Reset for {title}".format(title="FoodBox"),
        # message:
        email_plaintext_message,
        # from:
        "noreply@foodbox.local",
        # to:
        [reset_password_token.user.email]
    )


class Supplier(models.Model):
    supplier = models.OneToOneField(UserAccount, on_delete=models.CASCADE, blank=True, null=True)
    name = models.CharField(max_length=100, null=True, blank=True)
    address = models.CharField(max_length=100, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    is_verified = models.BooleanField(default=False, null=True, blank=True)

    def __str__(self):
        return f"{self.name}({self.supplier.username})"


class Company(models.Model):
    company = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True, null=True)
    name = models.CharField(max_length=100, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    is_verified = models.BooleanField(default=False, null=True, blank=True)

    def __str__(self):
        return f"{self.name}({self.company.username})"


class SupplierCourier(models.Model):
    courier = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    rfid = models.CharField(max_length=100, null=True, unique=True)

    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE, null=False)

    def __str__(self):
        return self.courier.username


class CompanyWorker(models.Model):
    worker = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True, null=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    rfid = models.CharField(max_length=100, null=True, unique=True)

    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=False)

    def __str__(self):
        return self.worker.username
