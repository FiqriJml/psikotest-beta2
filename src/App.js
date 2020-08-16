import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tryout from './components/pages/Tryout';
function App() {
  return (
    <div>
      <Switch>
        <Route path="/"> 
          <Tryout/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
