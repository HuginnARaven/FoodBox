import datetime

import pytz
from django.db.models.signals import post_save, m2m_changed
from django.dispatch import receiver

from workers.models import Offer


@receiver(post_save, sender=Offer)
def create_ticket_signal(sender, instance=None, created=False, **kwargs):
    box = instance.box
    print(instance)
    box.is_active = True
    box.last_activity = datetime.datetime.now(pytz.timezone('UTC'))
    box.save()
