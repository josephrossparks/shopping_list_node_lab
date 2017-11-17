import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addItem } from "../actions";

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

        <form className="NewItemForm" onSubmit={ this.handleSubmit.bind(this) }>

            <input required placeholder="Enter Item Name..." type="text" className="ItemName" value = {this.state.name} onChange={this.handleNameEvent} />

            <input required placeholder="Enter Item Price..." type="number" className="ItemPrice" step=".01" value = {this.state.price} onChange={this.handlePriceEvent} />

            <button type="submit" className="AddNewItemButton">
            Add to List
            </button>

        </form>


      </div>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addItem(this.state);

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

const mapActionsToProps = {
    addItem
}

export default connect(null, mapActionsToProps)(AddItemForm);



