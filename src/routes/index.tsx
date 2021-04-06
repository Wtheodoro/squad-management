import React from 'react';
import { Route, Switch } from 'react-router-dom'
import AddTeam from '../pages/AddTeam';
import EditTeam from '../pages/EditTeam';
import Main from '../pages/Main';

const index = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/create" exact component={AddTeam} />
      <Route path="/edit" exact component={EditTeam} />
    </Switch>
  )
}

export default index;