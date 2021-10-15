import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/css/login.css';
import './Components/css/register.css';
import Login from './Components/Login';
import Register from './Components/Register';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
