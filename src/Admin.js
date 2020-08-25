import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin.css';
import { Switch, Route } from 'react-router-dom';
import AdminTestList from './components/admin/AdminTestList';
import Admin_BabSoalList from './components/admin/Admin_BabSoalList';
function Admin() {
  return (
    <Switch>
      <Route exact path="/administrator/tests">  
        <AdminTestList/>    
      </Route>
      <Route exact path="/administrator">  
        <AdminTestList/>    
      </Route>
      <Route exact path="/administrator/tests/:testId" component={Admin_BabSoalList}></Route>
      <Route path="/administrator/tests/:testId/bab/:babId">  
        <p>something</p>
      </Route>
    </Switch>
  );
}

export default Admin;
