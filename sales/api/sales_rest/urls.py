from django.urls import path
from .views import *


urlpatterns = [
    path("automobiles/", list_automobiles, name="automobiles"),
    path("salespeople/", list_sales_people, name="sales_people"),
    path("salespeople/<int:pk>/", show_sales_person, name="show_sales_person"),
    path("salespeople/<int:employee_id>/salesrecords/", list_sales_records, name="sales_person_sales_records"),
    path("customers/", list_customers, name="customers"),
    path("customers/<int:pk>/", show_customer, name="show_customer"),
    path("salesrecords/", list_sales_records, name="sales_records"),
    path("salesrecords/<int:pk>/", show_sales_record, name="show_sales_record"),
]