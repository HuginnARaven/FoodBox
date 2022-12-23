import datetime
import pytz
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError

from box.models import BoxRFIDLog
from box.serializers import DeliverOfferSerializer, GetCurrenRfidSerializer, OfferStatusSerializer, \
    SendActivitySerializer, BoxRFIDLogSerializer
from companies.models import Box
from workers.models import Offer


# sends from iot
class DeliverOfferView(generics.UpdateAPIView):
    queryset = Offer.objects.all()
    serializer_class = DeliverOfferSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(box=self.kwargs['pk'], status='A')

    def perform_update(self, serializer):
        serializer.save(status='D')


# sends from iot
class GotOfferView(generics.UpdateAPIView):
    queryset = Offer.objects.all()
    serializer_class = DeliverOfferSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(box=self.kwargs['pk'], status='D')

    def perform_update(self, serializer):
        serializer.save(status='G')


# sends from iot
class GetCurrenRfid(generics.RetrieveAPIView):
    queryset = Offer.objects.only()
    serializer_class = GetCurrenRfidSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(box=Box.objects.get(id=self.kwargs['pk']))


class GetCurrenStatus(generics.RetrieveAPIView):
    queryset = Offer.objects.only()
    serializer_class = OfferStatusSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        if qs.filter(status="A"):
            return qs.filter(box=Box.objects.get(id=self.kwargs['pk']), status="A")
        if qs.filter(status="D"):
            return qs.filter(box=Box.objects.get(id=self.kwargs['pk']), status="D")


class SendActivityView(generics.UpdateAPIView):
    queryset = Box.objects.all()
    serializer_class = SendActivitySerializer

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(pk=self.kwargs['pk'])


class SendRFIDActivityView(generics.CreateAPIView):
    queryset = BoxRFIDLog.objects.all()
    serializer_class = BoxRFIDLogSerializer

    def perform_create(self, serializer):
        try:
            box = Box.objects.get(id=self.kwargs['pk'])
            curr_rfid_log_value = BoxRFIDLog.objects.filter(box=box, rfid=self.kwargs['rfid'])
            if curr_rfid_log_value:
                curr_rfid_log_value.update(last_register=datetime.datetime.now(pytz.timezone('UTC')))
            else:
                serializer.save(box=box,
                                rfid=self.kwargs['rfid'],
                                last_register=datetime.datetime.now(pytz.timezone('UTC')))
        except Box.DoesNotExist:
            ValidationError({"ValidationError": "Box DoesNotExist"})
