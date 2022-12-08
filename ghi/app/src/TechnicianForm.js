import { useState } from "react";

function TechnicianForm() {
    const [name, setName] = useState("");
    const [employee_id, setEmployeeId] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = { name, employee_id };

        const technicianUrl = "http://localhost:8080/api/technicians/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(technicianUrl, fetchConfig);
        if (response.ok) {
            event.target.reset();
            setName("");
            setEmployeeId("");
            setSubmitted(true);
        }
    };

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1 className="text-center">Create a Technician</h1>
                    <form id="create-tech-form" onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Technician Name"
                                required
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                            />
                            <label htmlFor="name">Technician Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                onChange={(e) => setEmployeeId(e.target.value)}
                                placeholder="Employee ID"
                                required
                                type="number"
                                name="employee_id"
                                id="employee_id"
                                className="form-control"
                            />
                            <label htmlFor="employee_id">Employee ID</label>
                        </div>
                        <div className="col text-center">
                            <button className="btn btn-primary">Create</button>
                        </div>
                    </form>
                    {submitted && (
                        <div
                            className="alert alert-success mb-0 p-4 mt-4"
                            id="success-message">
                            Your technician has been created
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TechnicianForm;
