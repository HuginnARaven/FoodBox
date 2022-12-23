from django.contrib import admin

from box.models import BoxLog, BoxRFIDLog
from companies.models import Box, AllowedWorkers, VirtualContract


class AllowedWorkersInline(admin.StackedInline):
    model = AllowedWorkers


class BoxLogInline(admin.StackedInline):
    model = BoxLog


class BoxRFIDLogInline(admin.StackedInline):
    model = BoxRFIDLog


class BoxAdmin(admin.ModelAdmin):
    search_fields = ["name", "company__name"]

    inlines = [
        AllowedWorkersInline,
        BoxLogInline,
        BoxRFIDLogInline,
    ]


admin.site.register(Box, BoxAdmin)
admin.site.register(VirtualContract)