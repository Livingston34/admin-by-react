'use strict';

import React from 'react';
import { Router, Route, Switch } from 'react-router';

import Test from '../components/test/Test';
import Test1 from '../components/test/Test1';

const getRouter = () => {
    <Router>
        <Route exact path="/" component={Test}/>
        <Route path="/page1" component={Test1}/>
    </Router>
};

export default getRouter;