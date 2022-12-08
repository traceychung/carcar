import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AppointmentList() {
	const [appointments, setAppointments] = useState([]);

	useEffect(() => {
		const fetchAppointments = async () => {
			const url = "http://localhost:8080/api/appointments/";
			const response = await fetch(url);

			if (response.ok) {
				const data = await response.json();

				setAppointments(data.appointments);
			}
		};
		fetchAppointments();
	}, []);

  const deleteAppointment = (id) => async () => {
    try {
      const url = `http://localhost:8080/api/appointments/${id}/`;
      const deleteResponse = await fetch(url,
          {
              method: "delete"
          }
      );

      if (deleteResponse.ok) {
        const reloadUrl = "http://localhost:8080/api/appointments/";
        const reloadResponse = await fetch(reloadUrl);
        const newAppointment = await reloadResponse.json();
        setAppointments(newAppointment.appointments);
      }

    }
    catch (err) {

    }
  };

  const completeAppointment = (id) => async () => {
    try {
      const url = `http://localhost:8080/api/appointments/${id}/`;
      const completeResponse = await fetch(url,
          {
              method: "put",
              body: JSON.stringify({completed: true}),
              headers: {
                "Content-Type": "application/json",
              }
          }
      );

      if (completeResponse.ok) {
        const reloadUrl = "http://localhost:8080/api/appointments/";
        const reloadResponse = await fetch(reloadUrl);
        const newAppointment = await reloadResponse.json();
        setAppointments(newAppointment.appointments);
      }

    }
    catch (err) {

    }
  };

	return (
        <div className="container mt-3">
        <h1>Service Appointments</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>VIN</th>
              <th>Customer Name</th>
              <th>Date</th>
              <th>Technician</th>
              <th>Reason</th>
              <th>VIP</th>
              <th>Cancel</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => {
              if (!appointment.completed)
                return (
                  <tr key={appointment.id}>
                    <td>{appointment.vin}</td>
                    <td>{appointment.customer_name}</td>
                    <td>{appointment.appointment_time}</td>
                    <td>{appointment.technician.name}</td>
                    <td>{appointment.reason}</td>
                    <td>{appointment.vip.toString()}</td>
                    <td className="align-middle"><button onClick={deleteAppointment(appointment.id)} className="btn btn-danger">Cancel</button></td>
                    <td><button className="btn btn-success" onClick={completeAppointment(appointment.id)}>Completed</button></td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-left">
          <Link
            to="/appointment/new/"
            className="btn btn-primary btn-lg px-4 gap-3">
            Add a new appointment
          </Link>
        </div>
      </div>
	);
};

export default AppointmentList;
