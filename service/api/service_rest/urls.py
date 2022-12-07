from django.urls import path
from .views import list_appointments, list_technicians, list_automobiles

urlpatterns = [
    path("appointments/", list_appointments, name="list_appointments"),
    path("automobiles/", list_automobiles, name="list_automobiles"),
    path("technicians/", list_technicians, name="list_technicians"),
]
