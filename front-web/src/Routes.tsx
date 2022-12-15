import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Charts from './pages/Charts';
import Home from './pages/Home';
import Records from './pages/Records';


function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/records" component={Records} />
                <Route path="/charts" component={Charts} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;