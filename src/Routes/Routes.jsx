import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Courses from '../Components/Courses';
import PageNotFound from '../Components/PageNotFound';

class Routes extends Component {
  state = {};
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Courses} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
