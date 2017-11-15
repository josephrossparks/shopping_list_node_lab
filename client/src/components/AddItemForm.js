import React, { Component } from 'react';

class AddItemForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: ""
    };
  }

  render() {
    return (
      <div className="AddNewItem">

        <form className="NewItemForm" onSubmit={this.handleSubmit}>

            <input required placeholder="Enter Item Name..." type="text" className="ItemName" value = {this.state.name} onChange={this.handleNameEvent} />

            <input required placeholder="Enter Item Price..." type="number" className="ItemPrice" value = {this.state.price} onChange={this.handlePriceEvent} />

            <button type="submit" className="AddNewItemButton">
            Add to List
            </button>

        </form>


      </div>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);

    this.setState({
      name:"",
      price:""
    })
  };

  handleNameEvent = (event) => {
    this.setState({
      name: event.target.value
    })
  };

  handlePriceEvent = (event) => {
    this.setState ({
      price: event.target.value
    })
  };
}

export default AddItemForm;



