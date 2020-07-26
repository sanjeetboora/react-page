import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Courses from '../Components/Courses';
import PageNotFound from '../Components/PageNotFound';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Courses} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default Routes;
