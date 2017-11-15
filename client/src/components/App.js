import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';

import AddItemForm from './AddItemForm';
import ItemList from './ItemList'



class App extends Component {
  render() {
    return (
      <div className="App">
      
      	<ItemList />
        <AddItemForm onSubmit={this.props.addItem}/>

      </div>
    );
  }
}

const mapActionsToProps = {
    addItem
}

export default connect(null, mapActionsToProps)(App);
