from django.urls import path, include, re_path
from rest_framework import routers

from .views import *

worker_router = routers.SimpleRouter()
worker_router.register(r'worker', GetCompanyWorkers, basename='worker')

box_router = routers.SimpleRouter()
box_router.register(r'box', GetCompanyBoxes, basename='box')

addworker_router = routers.SimpleRouter()
addworker_router.register('box/addworker', BoxAddWorkerView, basename='addworker')

contracts_router = routers.SimpleRouter()
contracts_router.register('contracts', GetCompanyContractsView, basename='contracts')

suppliers_router = routers.SimpleRouter()
suppliers_router.register('suppliers', GetSuppliersView, basename='suppliers')


urlpatterns = [
    path('company/createbox/', BoxCreateView.as_view()),  # post
    #path('company/box/addworker/<int:box_id>/', BoxAddWorkerView.as_view({'get': 'list'})),  # get
    path('company/makecontract/supplier/<int:supplier_id>/', MakeContractView.as_view()),  # post
    path('company/', include(worker_router.urls)),  # get, put, delete
    path('company/', include(box_router.urls)),  # get, put, delete
    path('company/<int:box_id>/', include(addworker_router.urls)),  # post, get, delete
    path('company/', include(contracts_router.urls)),  # get, delete
    path('company/', include(suppliers_router.urls)),  # get
]
