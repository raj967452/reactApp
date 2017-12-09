'use strict';

import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';
import autobind from 'react-autobind';

class AppRoutes extends React.Component{
  constructor(props){
    super(props);
    autobind(this);
  }
    render() {
      return (
        <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
      );
    }
};

export default AppRoutes;