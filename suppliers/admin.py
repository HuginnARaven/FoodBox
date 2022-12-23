from django.contrib import admin

from suppliers.models import Menu, Product


class ProductInline(admin.StackedInline):
    model = Product


class MenuAdmin(admin.ModelAdmin):
    search_fields = ["name", "supplier__name"]

    inlines = [
        ProductInline,
    ]


class ProductAdmin(admin.ModelAdmin):
    search_fields = ["name", "supplier__name"]


admin.site.register(Menu, MenuAdmin)
admin.site.register(Product, ProductAdmin)
