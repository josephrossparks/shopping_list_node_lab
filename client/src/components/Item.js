import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItem } from "../actions";

class Item extends Component {

  render() {
    return (
      <div className="ShoppingCartItem">
        <span className="RemoveItem" onClick={this.handleDelete.bind(this)}>X</span>
        <span className="ItemName"> {this.props.item.name}</span>
        <span className ="ItemPrice">${this.props.item.price}</span>
      </div>
    );
  }

  handleDelete() {
        this.props.removeItem(this.props.item.id);
    }
}

const mapActionsToProps = {
	removeItem
}

export default connect(null, mapActionsToProps)(Item);
