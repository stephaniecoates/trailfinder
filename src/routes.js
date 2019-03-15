import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Trail from './Trail';
import Home from './Home';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/hikes/:trail" component={Trail}/>
    </Switch>
)