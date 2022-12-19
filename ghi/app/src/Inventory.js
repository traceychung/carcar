import ManufacturerList from "./ManufacturerList"
import VehicleModelList from "./VehicleModelsList"
import AutoList from "./AutomobileList"
import { Link } from "react-router-dom"

function Inventory() {
    return (
        <div>
            <div className='mt-3 text-center'>
            <h1>Inventory</h1>
            </div>
        <div className="m-5 mt-4 text-center">
            <div className="row">
                <div className="col shadow p-3 me-4 mb-5 bg-body rounded">
                    <Link to="/manufacturers"><h3>Manufacturers</h3></Link>
                    <ManufacturerList />
                </div>
                <div className="col-5 shadow p-3 mb-5 bg-body rounded">
                    <Link to="/models"><h3>Models</h3></Link>
                    <VehicleModelList />
                </div>
                <div className="col shadow p-3 mb-5 ms-4 bg-body rounded">
                    <Link to="/automobiles"><h3>Automobiles</h3></Link>
                    <AutoList />
                </div>
            </div>
        </div>
        </div>
        // <div className="m-5">
        // <div className="accordion" id="accordionPanelsStayOpenExample">
        //     <div className="accordion-item">
        //         <h2 className="accordion-header" id="panelsStayOpen-headingOne">
        //         <button className="accordian-text accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        //             Manufacturers
        //         </button>
        //         </h2>
        //         <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
        //         <div className="accordion-body">
        //             <ManufacturerList />
        //         </div>
        //         </div>
        //     </div>
        //     <div className="accordion-item">
        //         <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
        //         <button className="accordian-text accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        //             Models
        //         </button>
        //         </h2>
        //         <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
        //         <div className="accordion-body">
        //             <VehicleModelList />
        //         </div>
        //         </div>
        //     </div>
        //     <div className="accordion-item">
        //         <h2 className="accordion-header" id="panelsStayOpen-headingThree">
        //         <button className="accordian-text accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        //             Automobiles
        //         </button>
        //         </h2>
        //         <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
        //         <div className="accordion-body">
        //             <AutoList />
        //         </div>
        //         </div>
        //     </div>
        // </div>
        // </div>
    )
}

export default Inventory;
