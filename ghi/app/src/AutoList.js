import React from "react";
import { Link } from "react-router-dom";

class AutoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vin: "",
      color: "",
      year: "",
      model: "",
      manufacturer: "",
      automobiles: [],
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8100/api/automobiles/");
    if (response.ok) {
      const data = await response.json();
      this.setState({ automobiles: data.autos });
    }
  }

  render() {
    return (
      <>
        <h1>Available automobile inventory</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>VIN</th>
              <th>Color</th>
              <th>Year</th>
              <th>Model</th>
              <th>Manufacturer</th>
            </tr>
          </thead>
          <tbody>
            {this.state.automobiles
              .map((auto) => {
                return (
                  <tr key={auto.id}>
                    <td>{auto.vin}</td>
                    <td>{auto.color}</td>
                    <td>{auto.year}</td>
                    <td>{auto.model.name}</td>
                    <td>{auto.model.manufacturer.name}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-left">
          <Link
            to="/automobiles/new/"
            className="btn btn-primary btn-lg px-4 gap-3"
          >
            Add a automobile to inventory
          </Link>
        </div>
      </>
    );
  }
}

export default AutoList;
