import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import CustomerInsertFormView from './customer/view/CustomerInsertFormView';
import CustomerListView from './customer/view/CustomerListView';
import CustomerEditFormView from "./customer/view/CustomerEditFormView";

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
