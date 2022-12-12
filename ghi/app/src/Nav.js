import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Inventory
              </a>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="manufacturer/new">Add a manufacturer</NavLink>
                <NavLink className="dropdown-item" to="model/new">Add a model</NavLink>
                <NavLink className="dropdown-item" to="automobile/new">Add an automobile</NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item" to="manufacturers">List of manufacturers</NavLink>
                <NavLink className="dropdown-item" to="models">List of models</NavLink>
                <NavLink className="dropdown-item" to="automobiles">List of automobiles</NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="technician/new">Add a technician</NavLink>
                <NavLink className="dropdown-item" to="appointment/new">Add an appointment</NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item" to="/appointments">List of appointments</NavLink>
                <NavLink className="dropdown-item" to="/appointment/history">Service History by VIN</NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sales
              </a>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="salesemployee/new">Add a salesperson</NavLink>
                <NavLink className="dropdown-item" to="customer/new">Add an customer</NavLink>
                <NavLink className="dropdown-item" to="sales/new">Create a sale</NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item" to="sales/list">List of sales</NavLink>
                <NavLink className="dropdown-item" to="sales/history">Sales History</NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
