import { useEffect, useState } from "react";

function SalesRecordForm() {
    const [salesPerson, setSalesPerson] = useState("");
    const [salesPeople, setSalesPeople] = useState([]);
    const [customer, setCustomer] = useState("");
    const [customers, setCustomers] = useState([]);
    const [automobile, setAutomobile] = useState("");
    const [automobiles, setAutomobiles] = useState([]);
    const [price, setPrice] = useState("");
    async function getAutomobiles() {
        const url = "http://localhost:8090/api/automobiles/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setAutomobiles(data.automobiles);
        }
    }
    useEffect(() => {
        getAutomobiles();
    }, []);
    useEffect(() => {
        async function getSalesPeople() {
            const url = "http://localhost:8090/api/salespeople/";
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setSalesPeople(data.sales_people);
            }
        }
        getSalesPeople();
    }, []);
    useEffect(() => {
        async function fetchCustomers() {
            const url = "http://localhost:8090/api/customers/";
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                setCustomers(data.customers);
            }
        }
        fetchCustomers();
    }, []);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { automobile, salesPerson, customer, price };
        data.sales_person = data.salesPerson;
        delete data.salesPerson;
        const salesRecordUrl = "http://localhost:8090/api/salesrecords/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(salesRecordUrl, fetchConfig);
        if (response.ok) {
            setAutomobile("");
            setSalesPerson("");
            setCustomer("");
            setPrice("");
            getAutomobiles();
        }
    };

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a New Sales Record</h1>
                    <form id="create-new-sales-record-form" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <select onChange={(e) => setAutomobile(e.target.value)} required name="Automobile" id="automobile" className="form-select" value={automobile}>
                                <option value="">Select an Automobile</option>
                                {automobiles.map((automobile) => {
                                    return (
                                        <option key={automobile.vin} value={automobile.vin}>
                                            {automobile.vin}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={(e) => setSalesPerson(e.target.value)} required name="Sales Person" id="sales_people" className="form-select" value={salesPerson}>
                                <option value="">Select a Sales Employee</option>
                                {salesPeople.map((salesPerson) => {
                                    return (
                                        <option key={salesPerson.id} value={salesPerson.id}>
                                            {salesPerson.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={(e) => setCustomer(e.target.value)} required name="Customer" id="customer" className="form-select" value={customer}>
                                <option value="">Select a Customer</option>
                                {customers.map((customer) => {
                                    return (
                                        <option key={customer.id} value={customer.id}>
                                            {customer.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={(e) => setPrice(e.target.value)} placeholder="Price" required type="text" name="price" id="price" className="form-control" value={price}
                            />
                            <label htmlFor="price">Price</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default SalesRecordForm;
