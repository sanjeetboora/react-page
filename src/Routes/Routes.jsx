import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Courses from '../Components/Courses';
import Pagenotfound from '../Components/Pagenotfound';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Courses} />
        <Route component={Pagenotfound} />
      </Switch>
    </div>
  );
}

export default Routes;
