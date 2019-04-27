import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import CustomerInsertFormView from './view/CustomerInsertFormView';
import CustomerListView from './view/CustomerListView';
import CustomerEditFormView from "./view/CustomerEditFormView";

function App() {
    let style = {
        margin: '20px'
    }

  return (

      <div>
        <CustomerInsertFormView/>
        <CustomerEditFormView/>
        <CustomerListView/>
      </div>
  );
}

export default App;
