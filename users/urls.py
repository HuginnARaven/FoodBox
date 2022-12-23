from django.urls import path, include, re_path
from rest_framework import routers

from .views import *

urlpatterns = [
    path('singup/supplier/', SupplierSinUpView.as_view()),  # post
    path('singup/company/', CompanySinUpView.as_view()),  # post
    path('singup/worker/', WorkerSinUpView.as_view()),  # post
    path('singup/currier/', CurrierSinUpView.as_view()),  # post
    path('login/', CustomAuthToken.as_view(), name='auth-token'),  # post
    path('logout/', LogoutView.as_view()),  # post
    path('change_password/', ChangePasswordView.as_view(), name='auth_change_password'),
    path('password_reset/', include('django_rest_passwordreset.urls', namespace='password_reset')),
    path('profile/', ProfileView.as_view()),  # get, put
]
