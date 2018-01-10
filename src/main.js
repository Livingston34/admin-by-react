'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import 'semantic-ui/semantic.css!';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Test from './components/test/Test';
import Test1 from './components/test/Test1';

ReactDom.render(
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/counter">counter</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Test}/>
                <Route path="/page1" component={Test1}/>
                <Route path="/counter" component={Test1}/>
            </Switch>
        </div>
    </Router>,
    document.getElementById('app')
);




