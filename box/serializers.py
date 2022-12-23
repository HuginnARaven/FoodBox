import datetime

import pytz
from rest_framework import serializers


from box.models import BoxRFIDLog
from companies.models import Box
from workers.models import Offer


class DeliverOfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = []


class SendActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Box
        fields = []

    def update(self, instance, validated_data):
        instance.is_active = True
        instance.last_activity = datetime.datetime.now(pytz.timezone('UTC'))
        instance.save()
        return instance


class GetCurrenRfidSerializer(serializers.ModelSerializer):
    rfid = serializers.SerializerMethodField()

    class Meta:
        model = Offer
        fields = ["rfid"]

    def get_rfid(self, obj):
        if obj.status == "A":
            return obj.courier.rfid
        elif obj.status == "D":
            return obj.worker.rfid
        else:
            return "0000000"

    # def to_representation(self, instance):
    #     response = super().to_representation(instance)
    #     if response.get("rfid"):
    #         response["rfid"] = [int(i) for i in response["rfid"].split(" ")]
    #     return response


class OfferStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = ["status"]


class BoxRFIDLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = BoxRFIDLog
        fields = []