import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin.css';
import { Switch, Route } from 'react-router-dom';
import AdminTestList from './components/admin/AdminTestList';
import AdminBabSoalList from './components/admin/AdminBabSoalList';
import AdminBabSoalDitail from './components/admin/AdminBabSoalDitail';
function Admin() {
  return (
    <Switch>
      <Route exact path="/administrator/tests">  
        <AdminTestList/>    
      </Route>
      <Route exact path="/administrator">  
        <AdminTestList/>    
      </Route>
      <Route exact path="/administrator/tests/:testId" component={AdminBabSoalList}></Route>
      <Route path="/administrator/tests/:testId/bab/:babId" component={AdminBabSoalDitail}></Route>
    </Switch>
  );
}

export default Admin;
