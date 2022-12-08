from django.urls import path
from .views import list_appointments, list_technicians, list_automobiles, show_appointments

urlpatterns = [
    path("appointments/", list_appointments, name="list_appointments"),
    path("automobiles/", list_automobiles, name="list_automobiles"),
    path("appointments/<int:pk>/", show_appointments, name="show_appointments"),
    path("technicians/", list_technicians, name="list_technicians"),
]
