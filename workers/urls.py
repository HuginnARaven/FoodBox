from django.urls import path, include, re_path
from rest_framework import routers

from .views import *

urlpatterns = [
    path('worker/makeoffer/', MakeOfferView.as_view()),  # post
    path('worker/raitoffer/<int:pk>/', RateOfferView.as_view()),  # put
    path('worker/getsuppliers/', GetAllowedSuppliers.as_view()),  # get
]
