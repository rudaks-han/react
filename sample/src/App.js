import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import UserInsertFormView from './user/view/UserInsertFormView';
import UserListView from './user/view/UserListView';
import UserEditFormView from "./user/view/UserEditFormView";

function App() {
    let style = {
        margin: '20px'
    }

  return (

      <div>
        <UserInsertFormView/>
        <UserEditFormView/>
        <UserListView/>
      </div>
  );
}

export default App;
