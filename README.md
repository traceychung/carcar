# CarCar

Team:

* Jordan Tran - Sales
* Tracey Chung - Services

## Starting the Application
Install Docker

For MacOS:
```
brew install --cask docker
```

For Windows:
```
winget install Docker.DockerDesktop
```

To start the application, run the following commands:
```
docker volume create pgdata
docker-compose build
docker-compose up
```

## Design
![design](./img/proj_diagram.png)


## Service microservice

The `Service` microservice uses port 8080 and has three models: the `ServiceAppointment` model, the `AutomobileVO` model, and the `Technician` model. The `Service` model has a “technician” property which uses the `Technician` model as a foreign key.

- The `ServiceAppointment` model has the following properties. If an appointment has a VIN that is found in the inventory, the “vip” property will be marked as true.

    ```python
    class ServiceAppointment(models.Model):
        vin = models.CharField(max_length=17)
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
    ```

- The `AutomobileVO` model has the following properties. The `AutomobileVO` model uses a `get_automobiles()` function to poll VIN data from the Inventory monolith, which uses the port 8100.

    ```python
    class AutomobileVO(models.Model):
        vin = models.CharField(max_length=17, unique=True)
    ```

- The `Technician` model has the following properties:

    ```python
    class Technician(models.Model):
        name = models.CharField(max_length=100)
        employee_id = models.PositiveSmallIntegerField(unique=True)
    ```


The `Service` microservices uses RESTFUL APIs to get a list of appointments, create a new appointment, as well as delete, update and show details for a specific appointment. The URLs for the `Service` microservice are shown below. A technician must exist before creating an appointment.

- **Technician**

    ![tech_rest](./img/technician_rest.png)

- **ServiceAppointment**

    ![service_rest](./img/service_rest.png)


For each route, sample response data can be found below:

- `GET` [http://localhost:8080/api/appointments/](http://localhost:8080/api/appointments/)

    ![get appt.png](./img/get_appt.png)

- `POST`  [http://localhost:8080/api/appointments/](http://localhost:8080/api/appointments/)

    ![create_appt.png](./img/create_appt.png)

- `GET` [http://localhost:8080/api/appointments/<int:pk>/](http://localhost:8080/api/appointments/1/)

    ![show_appt_details.png](./img/show_appt_details.png)

- `PUT` [http://localhost:8080/api/appointments/<int:pk>/](http://localhost:8080/api/appointments/1/)

    ![update appt](./img/update_appt.png)

- `DELETE` [http://localhost:8080/api/appointments/<int:pk>/](http://localhost:8080/api/appointments/1/)

    ![delete_appt.png](./img/delete_appt.png)

- `GET` [http://localhost:8080/api/technicians/](http://localhost:8080/api/technicians/)

    ![list tech](./img/get_tech.png)

- POST [http://localhost:8080/api/technicians/](http://localhost:8080/api/technicians/)

    ![create_tech.png](./img/create_tech.png)


The `Service` front end has four components - `TechnicianForm`, `AppointmentForm`, `AppointmentList`, and `ServiceHistory`. The React frontend can be reached at "localhost:3000".

- `TechnicianForm` creates a form that takes in the Technician’s Name and their Employee ID. It will then take the users input and POST the data to [http://localhost:8080/api/technicians/](http://localhost:8080/api/technicians/).
- `AppointmentForm` creates a form that takes in the customer’s name, appointment time, reason, VIN, and technician. It fetches data from the `Technician` model in order to get a list of technicians to display in the “Technician” dropdown. Once the form is filled, and successfully posted, the new appointment will automatically be displayed in the appointment list.
- `AppointmentList` shows a list of appointments that have yet to be completed. Appointments will each have a VIN, customer name, appointment date and time, technician, reason, VIP status, and a cancel/complete button. If the “Cancel” button is clicked, the appointment will be deleted and removed from the list. If the “Completed” button is clicked, the appointment will update to Complete and will be removed from the list.
- `ServiceHistory` shows a list of all appointments whether they have been completed or not. Each appointment will have a VIN, customer name, appointment date and time, technician, reason and VIP status. There is also a search bar where users can look up specific appointments by VIN or customer name.

## Sales microservice

The `Sales` microservice uses port 8090 and has four models: the`SalesPerson` model, the `AutomobileVO` model, `SalesRecord` and the `Customer` model. The `SalesRecord`model has a “sales_person”, and “customer”,  property which uses the `SalesPerson` and `Customer` model as a foreign key.

The `Sales` microservices uses RESTFUL APIs to get a list of appointments, create a new appointment, as well as delete, update and show details for a specific appointment. The URLs for the `Sales` microservice are shown below.

**Sales Record**

![sales rest](./img/sales_rest.png)

**Customers**

![cust_rest](./img/cust_rest.png)

**Employees**

![employee_rest](./img/employees_rest.png)

For each route, sample response data can be found below (Employees):

- `GET http://localhost:8090/api/salespeople/`

    ![list_salespeople](./img/list_salesperson.png)

- `POST` [http://localhost:8090/api/salespeople/](http://localhost:8090/api/salespeople/)

    ![create salesperson](./img/create_salesperson.png)

- `GET` [http://localhost:8090/api/salespeople/<int:id>/](http://localhost:8090/api/salespeople/12/)

    ![show_salesperson](./img/show_salesperson.png)

- `GET` [http://localhost:8090/api/salespeople/<int:id>/salesrecords/](http://localhost:8090/api/salespeople/5/salesrecords/)

    ![show_salespersonrecords](./img/list_employee_salesrecord.png)


For each route, sample response data can be found below (Customers):

- `GET`[http://localhost:8090/api/customers/](http://localhost:8090/api/customers/)

    ![list_cust](./img/list_customers.png)

- `POST` [http://localhost:8090/api/customers/](http://localhost:8090/api/customers/)

    ![create_cust](./img/create_cust.png)

- `GET` [http://localhost:8090/api/customers/<int:id>/](http://localhost:8090/api/customers/8/)

    ![show_cust](./img/cust_details.png)


For each route, sample response data can be found below (Sales Records):

- `GET` [http://localhost:8090/api/salesrecords/](http://localhost:8090/api/salesrecords/)

    ![list_records](./img/list_salesrecord.png)

- `POST` [http://localhost:8090/api/salesrecords/](http://localhost:8090/api/salesrecords/)

    ![create_records](./img/create_salesrecord.png)

The `Sales` microservice front end side manages customers, employees, sales records, and sales history of an employee. The sales microservice only allows sales of vehicles that are in the inventory that have not been sold off yet.
