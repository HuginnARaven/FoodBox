from django.urls import path, include, re_path
from rest_framework import routers

from .views import *

courier_router = routers.SimpleRouter()
courier_router.register(r'courier', GetSupplierCouriers, basename='courier')

contract_router = routers.SimpleRouter()
contract_router.register(r'contract', GetSupplierContractsView, basename='contract')

menu_router = routers.SimpleRouter()
menu_router.register(r'menu', MenuOptionsViewset, basename='menu')

product_router = routers.SimpleRouter()
product_router.register(r'product', ProductViewset, basename='product')

urlpatterns = [
    path('supplier/createmenu/', MenuCreateView.as_view()),  # post
    # path('supplier/getmenu/', MenuGetAllView.as_view()),  # get
    # path('supplier/menu/<int:pk>/', MenuOptionsView.as_view()),  # get, put, delete
    path('supplier/menu/<int:menu_id>/createproduct/', ProductCreateView.as_view()),  # post
    path('supplier/menu/<int:menu_id>/product/<int:pk>/', ProductOptionsView.as_view()),  # get, put, delete
    path('supplier/menu/<int:menu_id>/getproducts/', ProductGetAllView.as_view()),  # get
    path('supplier/responsecontract/<int:pk>/', ResponseContractView.as_view()),  # get, put, delete
    path('supplier/responseoffer/<int:pk>/', ResponseOfferView.as_view()),  # get, put, delete
    path('supplier/offers/', GetAllOffersView.as_view()),  # get
    path('supplier/', include(courier_router.urls)),  # get, put, delete
    path('supplier/', include(contract_router.urls)),  # get, put, delete
    path('supplier/', include(menu_router.urls)),  # get, put, delete
    path('supplier/', include(product_router.urls)),  # get, put, delete
]
