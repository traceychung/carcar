from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import AutomobileVO, Technician, ServiceAppointment

# Create your views here.

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin"]

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = ["name", "employee_id", "id"]


class ServiceAppointmentEncoder(ModelEncoder):
    model = ServiceAppointment
    properties = [
        "id",
        "vin",
        "customer_name",
        "vip",
        "appointment_time",
        "reason",
        "completed",
        "technician"
        ]
    encoders = {"technician": TechnicianEncoder()}


@require_http_methods(["GET"])
def list_automobiles(request):
    automobiles = AutomobileVO.objects.all()
    return JsonResponse(
        {"automobiles": automobiles},
        encoder=AutomobileVOEncoder,
        safe=False,
    )


@require_http_methods(["GET", "POST"])
def list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder = TechnicianEncoder,
            safe=False
        )
    elif request.method == "POST":
        data = json.loads(request.body)
        technician = Technician.objects.create(**data)
        return JsonResponse(
            {"technicians": technician},
            encoder=TechnicianEncoder,
            safe=False
        )


@require_http_methods(["GET", "POST"])
def list_appointments(request):
    if request.method == "GET":
        appointments = ServiceAppointment.objects.all()
        for appointment in appointments:
            if appointment.vin in AutomobileVO.objects.values_list("vin", flat=True):
                appointment.vip = True
            else:
                appointment.vip = False
        return JsonResponse(
            {"appointments": appointments},
            encoder=ServiceAppointmentEncoder,
            safe=False
        )
    elif request.method == "POST":
        data = json.loads(request.body)
        try:
            technician = Technician.objects.get(employee_id=data["technician"])
            data["technician"] = technician
            appointment = ServiceAppointment.objects.create(**data)
            return JsonResponse(
                {"appointments": appointment},
                encoder=ServiceAppointmentEncoder,
                safe=False
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {
                    "Error": "Technician does not exist"
                    },
                    status=400)

@require_http_methods(["GET", "PUT", "DELETE"])
def show_appointments(request, pk):
    if request.method == "GET":
        try:
            appointment = ServiceAppointment.objects.get(id=pk)
            return JsonResponse(
                appointment,
                encoder=ServiceAppointmentEncoder,
                safe=False,
            )
        except ServiceAppointment.DoesNotExist:
            return JsonResponse(
                {"message": "Appointment does not exist"},
                status=400,
            )
    elif request.method == "DELETE":
        try:
            count, _ = ServiceAppointment.objects.filter(id=pk).delete()
            return JsonResponse(
                {"deleted": count > 0}
            )
        except ServiceAppointment.DoesNotExist:
            return JsonResponse(
                {"message": "Appointment does not exist"},
                status=400,
            )
    else:
        try:
            content = json.loads(request.body)
            ServiceAppointment.objects.filter(id=pk).update(**content)
            appointment = ServiceAppointment.objects.get(id=pk)
            return JsonResponse(
                appointment,
                encoder=ServiceAppointmentEncoder,
                safe=False
            )
        except ServiceAppointment.DoesNotExist:
            return JsonResponse(
                {"message": "Appointment does not exist"},
                status=400,
            )

