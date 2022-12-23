import pytz
from apscheduler.schedulers.background import BackgroundScheduler
import datetime

from companies.models import Box


def update_inactive_boxes():
    curr_time_tw_ago = datetime.datetime.now(pytz.timezone('UTC')) - datetime.timedelta(minutes=20)
    boxes = Box.objects.filter(is_active=True, last_activity__lt=curr_time_tw_ago)
    if boxes:
        boxes.update(is_active=False)
        print("Inactive boxes detected and updated!")


def start():
    scheduler = BackgroundScheduler()
    scheduler.add_job(update_inactive_boxes, "interval", minutes=2, id="boxes_updater_1", replace_existing=True)
    scheduler.start()
