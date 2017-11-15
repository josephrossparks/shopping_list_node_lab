import React, { Component } from 'react';

class Item extends Component {

  render() {
    return (
      <div className="ShoppingCartItem">
        <span className="RemoveItem" onClick={this.props.onDelete}>X</span>
        <span className="ItemName"> {this.props.item.name}</span>
        <span className ="ItemPrice">${this.props.item.price}</span>
      </div>
    );
  }
}

export default Item;
