import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerForm from './ManufacturerForm';
import VehicleModelForm from './VehicleModelForm';
import ManufacturerList from './ManufacturerList';
import VehicleModelList from './VehicleModelsList';
import AutoForm from './AutomobileForm';
import AutoList from './AutomobileList';
import SalesList from './SalesList';
import SalesHistory from './SalesHistory';
import SalesEmployeeForm from './SalesEmployeeForm';
import SalesRecordForm from './SalesForm';
import CustomerForm from './CustomerForm';
import TechnicianForm from './TechnicianForm';
import AppointmentForm from './AppointmentForm';
import ServiceHistory from './ServiceHistory';
import AppointmentList from './AppointmentList';

function App(props) {

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturer" element={<ManufacturerList />} />
          <Route path="manufacturer/new" element={<ManufacturerForm />} />
          <Route path="vehicle/new" element={<VehicleModelForm />} />
          <Route path="vehicle/" element={<VehicleModelList />} />
          <Route path="automobiles/new" element={<AutoForm />} />
          <Route path="automobiles" element={<AutoList />} />
          <Route path="technician/new" element={<TechnicianForm />} />
          <Route path="appointment/new" element={<AppointmentForm />} />
          <Route path="appointment" element={<AppointmentList />} />
          <Route path="appointment/history" element={<ServiceHistory />} />
          <Route path="sales/list" element={<SalesList />} />
          <Route path="sales/history" element={<SalesHistory />} />
          <Route path="/salesemployee/new" element={<SalesEmployeeForm />} />
          <Route path="/sales/new" element={<SalesRecordForm />} />
          <Route path="/customer/new" element={<CustomerForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
