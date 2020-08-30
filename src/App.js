import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/tryout/Login';
import Tryout from './components/tryout/Tryout';
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
        <Route path="/tryout/:page" component={Tryout} />
      </Switch>
    </div>
  );
}

export default App;
