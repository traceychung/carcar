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
              <th>VIP</th>
              <th>Customer Name</th>
              <th>VIN</th>
              <th>Date</th>
              <th>Time</th>
              <th>Technician</th>
              <th>Reason</th>
              <th>Cancel</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => {
              if (!appointment.completed)
                return (
                  <tr key={appointment.id}>
                    <td><img className="align-middle" width="25" height="25" src={appointment.vip ? 'https://cdn-icons-png.flaticon.com/512/2377/2377810.png' : 'https://cdn-icons-png.flaticon.com/512/2377/2377878.png'} /></td>
                    <td>{appointment.customer_name}</td>
                    <td>{appointment.vin}</td>
                    <td>{new Date(appointment.appointment_time).toLocaleDateString()}</td>
                    <td>{new Date(appointment.appointment_time).toLocaleTimeString([],{hour:"2-digit", minute:"2-digit"})}</td>
                    <td>{appointment.technician.name}</td>
                    <td>{appointment.reason}</td>
                    <td className="align-middle"><button onClick={deleteAppointment(appointment.id)} className="btn btn-danger"><img width="25" height="25" src='https://cdn-icons-png.flaticon.com/128/399/399274.png'/></button></td>
                    <td><button className="btn btn-success" onClick={completeAppointment(appointment.id)}><img width="25" height="25" src='https://cdn-icons-png.flaticon.com/512/25/25643.png'/></button></td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link
            to="/technician/new/"
            className="btn btn-primary btn-lg px-4 gap-3">
            Add a technician
          </Link>
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
