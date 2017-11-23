'use strict';

import React from 'react';
import {Route} from 'react-router';

import App from './App';
import NotFoundPage from './components/NotFoundPage';

console.log(App);

const routes = (
    <Route path="/" component={App}></Route>
);


export default routes;
