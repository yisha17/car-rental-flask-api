import React from 'react';

import './index.css';
import App from './App';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import injectContext from './context'
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
import App6 from './App6';
import App7 from './App7';
import App8 from './App8';
import App9 from './App9';
import App10 from './App10';
export const Layout = () => {
    return(
        <>
        <Router>
        <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path='/login'>
          <App2/>
        </Route>
        <Route path='/register'>
          <App3/>
        </Route>
        <Route path='/cars'>
          <App4/>
        </Route>
        <Route path='/reservation'>
          <App5/>
        </Route>
        <Route path='/about'>
          <App6/>
        </Route>
        <Route path='/error'>
          <App7/>
        </Route>

        <Route path='/success_reserve'>
          <App8/>
        </Route>
         <Route exact path='/profile'>
          <App9/>
        </Route>
        <Route path='/update'>
          <App10/>
        </Route>
        
        </Switch>
        </Router>
        </>
    )
};

