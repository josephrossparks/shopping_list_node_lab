import React, { Component } from 'react';

import AddItemForm from './AddItemForm';
import ItemList from './ItemList'

class App extends Component {

  render() {

    return (

      <div className="App">
        <h2> Shopping List </h2>
      	<ItemList />
        <AddItemForm />
      </div>
    );
  }
}


export default App;
