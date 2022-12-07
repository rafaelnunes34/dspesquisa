import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Records from './pages/Records';


function Routes() {
    return (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/records" component={Records} />
            <Route exact path="/" component={Home}  />  
        </Switch>
    </BrowserRouter>
)
}

export default Routes;