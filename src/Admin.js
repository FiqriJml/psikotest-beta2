import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin.css';
import AdminTemplate from './components/pages/AdminTemplate'
import { Switch, Route } from 'react-router-dom';
import BabSoalList from './components/database/test/BabSoalList';
import { TestsList } from './components/database/test/TestList';
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
    <Route path="/administrator/tests/:testId" component={Admin_BabSoalList}></Route>
  </Switch>
  );
}

export default Admin;
