import React from 'react';

class AutoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: '',
      color: '',
      year: '',
      vin: '',
      models: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleVINChange = this.handleVINChange.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
  }
  async componentDidMount() {
    const url = 'http://localhost:8100/api/models/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      this.setState({ models: data.models });
    }
  }
  async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};
    delete data.models;
    data["model_id"] = data["model"]
    delete data.model;
    const url = 'http://localhost:8100/api/automobiles/';
    const fetchOptions = {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    };
    const automobileResponse = await fetch(url, fetchOptions);
    if (automobileResponse.ok) {
      this.setState({
        color: '',
        year: '',
        vin: '',
        model: '',
      });
    }
  }
  handleColorChange(event) {
    const value = event.target.value;
    this.setState({ color: value });
  }
  handleYearChange(event) {
    const value = event.target.value;
    this.setState({ year: value });
  }
  handleVINChange(event) {
    const value = event.target.value;
    this.setState({ vin: value });
  }
  handleModelChange(event) {
    const value = event.target.value;
    this.setState({ model: value });
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add an automobile to inventory</h1>
            <form onSubmit={this.handleSubmit} id="create-automobile-form">
              <div className="form-floating mb-3">
                <input value={this.state.color} onChange={this.handleColorChange} placeholder="color" type="text" name="color" id="color" className="form-control" />
                <label htmlFor="color">Color</label>
              </div>
              <div className="form-floating mb-3">
                <input value={this.state.year} onChange={this.handleYearChange} placeholder="year" type="text" name="year" id="year" className="form-control" />
                <label htmlFor="year">Year</label>
              </div>
              <div className="form-floating mb-3">
                <input value={this.state.vin} onChange={this.handleVINChange} placeholder="vin" required type="text" name="vin" id="vin" className="form-control" />
                <label htmlFor="vin">VIN</label>
              </div>
              <div className="mb-3">
                <select value={this.state.model} onChange={this.handleModelChange} required name="model" id="model" className="form-select">
                  <option value="">Choose a model</option>
                  {this.state.models.map(model => {
                    return (
                      <option key={model.id} value={model.id}>
                        {model.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div> 
    );
  }
}
export default AutoForm;
