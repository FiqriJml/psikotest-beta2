import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tryout from './components/pages/Tryout';
import Login from './components/tryout/Login';
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">        
          <span className="float-right">
            <Link to="/administrator" className="btn btn-warning">Login Admin</Link>
          </span>
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
