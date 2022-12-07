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

	return (
        <>
        <></>
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
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => {
                return (
                  <tr key={appointment.id}>
                    <td>{appointment.vin}</td>
                    <td>{appointment.customer_name}</td>
                    <td>{appointment.appointment_time}</td>
                    <td>{appointment.technician.name}</td>
                    <td>{appointment.reason}</td>
                    <td>{appointment.vip}</td>
                    <td></td>
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
      </>
		// <div className="container mt-3">
		// 	<div className="row row-cols-1 row-cols-md-2 g-4 t-5 m-2">
		// 		{appointments.map((appointment) => {
		// 			return (
		// 				<div key={appointment.id} className="col-lg-4 d-flex align-items-stretch">
		// 					<div className="model-list card-body mb-3 shadow">
		// 						<h5 className="card-header">{appointment.manufacturer.name}</h5>
		// 						<div className="card-body">
		// 							<h5 className="card-title">{model.name}</h5>
		// 							<img
		// 								src={model.picture_url}
		// 								className="card-img-top"
		// 								alt={model.name}
		// 							/>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			);
		// 		})}
		// 	</div>
		// </div>
	);
};

export default AppointmentList;
