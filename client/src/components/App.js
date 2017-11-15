import React, { Component } from 'react';


import AddItemForm from './AddItemForm';
import ItemList from './ItemList'


class App extends Component {
  render() {
    return (
      <div className="App">
      
      	<ItemList />
        <AddItemForm />

      </div>
    );
  }
}

export default App;
