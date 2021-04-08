import React from 'react';
import { Route, Switch } from 'react-router-dom'
import AddTeam from '../pages/AddTeam';
import EditTeam from '../pages/EditTeam';
import Main from '../pages/Main';
import TEST from '../pages/TEST';

const index = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/create" exact component={AddTeam} />
      <Route path="/edit" exact component={EditTeam} />
      <Route path="/test" exact component={TEST} />
    </Switch>
  )
}

export default index;