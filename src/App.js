import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tryout from './components/pages/Tryout';
import Login from './components/tryout/Login';
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">         
          <div className="text-center">
              <Login/>
          </div>
        </Route>
        <Route path="/tryout"> 
          <Tryout/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
