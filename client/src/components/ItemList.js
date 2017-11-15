import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItem } from "../actions";

import Item from "./Item";

class ItemList extends Component {
  
  render() {

    let shoppingCartTotal = 0

    const ItemsInCart = this.props.items.map((item, index) => {
      shoppingCartTotal += Number(item.price);
      return <Item item={item} key={'itemNo'+index} onDelete={this.props.removeItem} />
    });

    return (
      <div className="ShoppingCart">
        <div className="CartItemNames">
          {ItemsInCart}
        </div>
        <div className="HorizontalLine"></div>
        <div className="DisplayTotal">
          Total: ${shoppingCartTotal}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        items: state.items
    }
}

const mapActionToProps = {
  removeItem
}

export default connect(mapStateToProps, mapActionToProps)(ItemList);
