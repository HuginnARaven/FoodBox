from django.urls import path, include, re_path
from rest_framework import routers

from .views import *

urlpatterns = [
    path('box/<int:pk>/deliveroffer/', DeliverOfferView.as_view()),  # put
    path('box/<int:pk>/gotoffer/', GotOfferView.as_view()),  # put
    path('box/<int:pk>/getcurrentrfid/', GetCurrenRfid.as_view()),  # get
    path('box/<int:pk>/getcurrentstatus/', GetCurrenStatus.as_view()),  # get
    path('box/<int:pk>/sendactivity/', SendActivityView.as_view()),  # put
    path('box/<int:pk>/sendrfid/<int:rfid>/', SendRFIDActivityView.as_view()),  # post
]
