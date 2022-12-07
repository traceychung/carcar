from django.db import models
from django.urls import reverse

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)

    def get_api_url(self):
        return reverse("api_vin", kwargs={"pk": self.id})

    def __str__(self):
        return self.vin

class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_id = models.PositiveSmallIntegerField(unique=True)

    def get_api_url(self):
        return reverse("api_technician", kwargs={"pk": self.id})

    class Meta:
        ordering = ["name"]

class ServiceAppointment(models.Model):
    vin = models.CharField(max_length=17,unique=True)
    customer_name = models.CharField(max_length=100)
    appointment_time = models.DateTimeField()
    reason = models.CharField(max_length=250)
    completed = models.BooleanField(default=False)
    vip = models.BooleanField(default=False)
    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE,
    )

    def get_api_url(self):
        return reverse("api_appointment", kwargs={"pk": self.id})

    class Meta:
        ordering = ["appointment_time"]
