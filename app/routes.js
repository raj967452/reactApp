'use strict';

import React from 'react';
import {Route} from 'react-router-dom';

import App from './components/App';
import NotFoundPage from './components/NotFoundPage';

const routes = (
    <Route path="/" component={App}>
        <Route path="/conversation:id" component={App.ConversationsPane}></Route>
    </Route>
);


export default routes;
