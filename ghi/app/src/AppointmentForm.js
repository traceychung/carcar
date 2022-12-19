import { useEffect, useState } from "react";

function AppointmentForm() {
    const [customer_name, setCustomerName] = useState("");
    const [appointment_time, setAppointmentTime] = useState("");
    const [reason, setReason] = useState("");
    const [vin, setVin] = useState("");
    const [technicians, setTechnicians] = useState([]);
    const [selectedTechnician, setSelectedTechnician] = useState("");
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const fetchTechnicians = async () => {
            const url = "http://localhost:8080/api/technicians/";
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                setTechnicians(data.technicians);
            }
        };
        fetchTechnicians();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const technician = selectedTechnician;
        const data = {
            customer_name,
            appointment_time,
            reason,
            vin,
            technician
         };

        const appointmetUrl = "http://localhost:8080/api/appointments/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(appointmetUrl, fetchConfig);
        if (response.ok) {
            event.target.reset();
            setCustomerName("");
            setAppointmentTime("");
            setReason("");
            setVin("");
            setSelectedTechnician("");
            setSubmitted(true);
        }
    };

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1 className="text-center">Create a New Appointment</h1>
                    <form id="create-appointment-form" onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input
                                onChange={(e) => setCustomerName(e.target.value)}
                                placeholder="Customer Name"
                                required
                                type="text"
                                name="customer_name"
                                id="customer_name"
                                className="form-control"
                            />
                            <label htmlFor="customer_name">Customer Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                onChange={(e) => setAppointmentTime(e.target.value)}
                                placeholder="Appointment Time"
                                required
                                type="datetime-local"
                                name="appointment_time"
                                id="appointment_time"
                                className="form-control"
                            />
                            <label htmlFor="appointment_time">Appointment Time</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                onChange={(e) => setReason(e.target.value)}
                                placeholder="Reason"
                                required
                                type="text"
                                name="reason"
                                id="reason"
                                className="form-control"
                            />
                            <label htmlFor="reason">Reason</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                onChange={(e) => setVin(e.target.value)}
                                placeholder="VIN"
                                required
                                type="text"
                                name="vin"
                                id="vin"
                                className="form-control"
                            />
                            <label htmlFor="vin">VIN</label>
                        </div>
                        <div className="mb-3">
                            <select
                                onChange={(e) => setSelectedTechnician(e.target.value)}
                                required
                                name="technician"
                                id="technician"
                                className="form-select">
                                <option value="">Select a technician</option>
                                {technicians.map((technician) => {
                                    return (
                                        <option key={technician.id} value={technician.id}>
                                            {technician.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="col text-center">
                            <button className="btn btn-primary">Create</button>
                        </div>
                    </form>
                    {submitted && (
                        <div
                            className="alert alert-success mb-0 p-4 mt-4"
                            id="success-message">
                            Your appointment has been created
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};




export default AppointmentForm;
