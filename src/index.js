import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import './styles/vars.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
