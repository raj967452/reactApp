'use strict';

import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Layout from './components/Layout';
import App from './components/App';
import ConversationsPane from './components/ConversationsPane';
import NotFoundPage from './components/NotFoundPage';

const routes = (

    <Route path="/" exact component={App}>
        <Route exact path="/conversation/:human" component={ConversationsPane}></Route>        
        <Route exact path="*" component={NotFoundPage}></Route> 
    </Route>
);


export default routes;
