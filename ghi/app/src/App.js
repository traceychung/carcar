import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerForm from './ManufacturerForm';
import VehicleModelForm from './VehicleModelForm';
import ManufacturerList from './ManufacturerList';
import VehicleModelList from './VehicleModelsList';
import AutoForm from './AutoForm';
import AutoList from './AutoList';
import SalesList from './SalesList';
import SalesHistory from './SalesHistory';
import SalesEmployeeForm from './SalesEmployeeForm';

function App() {
  
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
          <Route path="sales/list" element={<SalesList />} />
          <Route path="sales/history" element={<SalesHistory />} />
          <Route path="/salesemployee/new" element={<SalesEmployeeForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;