from django.contrib import admin

from users.models import UserAccount, Supplier, Company, SupplierCourier, CompanyWorker


class SupplierInline(admin.StackedInline):
    model = Supplier


class CompanyInline(admin.StackedInline):
    model = Company


class SupplierCourierInline(admin.StackedInline):
    model = SupplierCourier


class CompanyWorkerInline(admin.StackedInline):
    model = CompanyWorker


class UserAccountAdmin(admin.ModelAdmin):
    search_fields = ["username"]
    inlines = [
        SupplierInline, CompanyInline, SupplierCourierInline, CompanyWorkerInline
    ]


admin.site.register(UserAccount, UserAccountAdmin)
admin.site.register(Supplier)
admin.site.register(Company)
admin.site.register(SupplierCourier)
admin.site.register(CompanyWorker)
