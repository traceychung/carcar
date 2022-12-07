import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerForm from './ManufacturerForm';
import VehicleModelForm from './VehicleModelForm';
import ManufacturerList from './ManufacturerList';
import VehicleModelList from './VehicleModelsList';
import AutoForm from './AutoForm';
import AutoList from './AutoList';

function App(props) {

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturer" element={<ManufacturerList manufacturers={props.manufacturers}/>} />
          <Route path="manufacturer/new" element={<ManufacturerForm />} />
          <Route path="vehicle/new" element={<VehicleModelForm />} />
          <Route path="vehicle/" element={<VehicleModelList />} />
          <Route path="automobiles/new" element={<AutoForm />} />
          <Route path="automobiles" element={<AutoList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
