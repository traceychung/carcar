import React, {useState, useEffect} from 'react'

function ServiceHistory() {
    const [appointments, setAppointments] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);

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

    const searchAppointments = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = appointments.filter((appointment) => {
                return Object.values(appointment).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(appointments)
        }
    }

    return (
        <div className="container mt-4">
        <div className="input-group">
            <input
            type="search"
            className="form-control rounded"
            aria-describedby="search-addon"
            placeholder="Search by VIN here"
            aria-label="Search"
            onChange={(e) => searchAppointments(e.target.value)}
            value={searchInput} />
            <button type="button"
            className="btn btn-outline-primary"
            onClick={(e) => searchAppointments(e.target.value)}
            value={searchInput}>Search</button>
        </div>

        <div className='mt-3'>
        <h1>Service History</h1>
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
                    </tr>
                </thead>
                <tbody>
                    {searchInput.length > 0 ? (
                        filteredResults.map((appointment) => {
                            return (
                                <tr key={appointment.id}>
                                    <td><img width="25" height="25" alt="" src={appointment.vip ? 'https://cdn-icons-png.flaticon.com/512/2377/2377810.png' : 'https://cdn-icons-png.flaticon.com/512/2377/2377878.png'} /></td>
                                    <td>{appointment.customer_name}</td>
                                    <td>{appointment.vin}</td>
                                    <td>{new Date(appointment.appointment_time).toLocaleDateString()}</td>
                                    <td>{new Date(appointment.appointment_time).toLocaleTimeString([],{hour:"2-digit", minute:"2-digit"})}</td>
                                    <td>{appointment.technician.name}</td>
                                    <td>{appointment.reason}</td>
                                </tr>
                            );
                        })
                    ) : (
                        appointments.map((appointment) => {
                            return (
                                <tr key={appointment.id}>
                                    <td><img width="25" height="25" alt="" src={appointment.vip ? 'https://cdn-icons-png.flaticon.com/512/2377/2377810.png' : 'https://cdn-icons-png.flaticon.com/512/2377/2377878.png'} /></td>
                                    <td>{appointment.customer_name}</td>
                                    <td>{appointment.vin}</td>
                                    <td>{new Date(appointment.appointment_time).toLocaleDateString()}</td>
                                    <td>{new Date(appointment.appointment_time).toLocaleTimeString([],{hour:"2-digit", minute:"2-digit"})}</td>
                                    <td>{appointment.technician.name}</td>
                                    <td>{appointment.reason}</td>
                                </tr>
                            );
                        })
                    )}
                </tbody>
                </table>
        </div>
        </div>
    )
};

export default ServiceHistory;
