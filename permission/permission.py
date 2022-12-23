from rest_framework import permissions


class IsSupplier(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.role == 'S':
            return True
        return False

    def has_object_permission(self, request, view, obj):
        if obj.supplier.id == request.user.supplier.id:  # @!#$
            return True
        return False


class IsCompany(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.role == 'C':
            return True
        return False

    def has_object_permission(self, request, view, obj):
        if obj.company.id == request.user.company.id:
            return True
        return False


class IsCompanyOrSafe(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.role == 'C':
            return True


class IsCourier(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.role == 'SC':
            return True
        return False

    def has_object_permission(self, request, view, obj):
        if obj.currier.id == request.user.suppliercourier.id:
            return True
        return False


class IsWorker(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.role == 'CW':
            return True
        return False

    def has_object_permission(self, request, view, obj):
        if obj.worker.id == request.user.companyworker.id:
            return True
        return False
