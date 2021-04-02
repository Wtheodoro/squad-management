import React from 'react';
import { Route, Switch } from 'react-router-dom'
import AddTeam from '../pages/AddTeam';
import Main from '../pages/Main';

const index = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/create" exact component={AddTeam} />
    </Switch>
  )
}

export default index;