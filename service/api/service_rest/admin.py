from django.contrib import admin
from .models import ServiceAppointment,AutomobileVO,Technician

# Register your models here.
admin.site.register(ServiceAppointment)
admin.site.register(AutomobileVO)
admin.site.register(Technician)
