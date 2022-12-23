from django.apps import AppConfig


class BoxConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'box'

    def ready(self):
        from . import signals
        from .box_scheduler import upadate_box_tatus
        upadate_box_tatus.start()
        print("Scheduler started")
