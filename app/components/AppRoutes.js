'use strict';

import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';

const createReactClass = require('create-react-class');

const  AppRoutes = createReactClass({
    render() {
      return (
        <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
      );
    }
});

export default AppRoutes;