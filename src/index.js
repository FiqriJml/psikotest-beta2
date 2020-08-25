import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import storeAdmin, { rrfProps } from './app/storeAdmin';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import Admin from '../src/Admin'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/administrator">      
          <Provider store={storeAdmin}>
            <ReactReduxFirebaseProvider  {...rrfProps}>
              <Admin/>
            </ReactReduxFirebaseProvider>
          </Provider>  
        </Route>


        <Route path="/">      
          <Provider store={store}>
            <App/>
          </Provider>  
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
