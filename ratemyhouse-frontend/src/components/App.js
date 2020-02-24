import React from 'react'
import UserContainer from '../containers/UserContainer';
import HomeContainer from '../containers/HomeContainer'; 
import LoginContainer from '../containers/LoginContainer';
import SignUpContainer from '../containers/SignupContainer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => (
  <div>
    <Router>
        <Switch>
          <Route path="/user">
            <UserContainer />
          </Route>
          <Route path="/login">
            <LoginContainer />
          </Route>
          <Route path="/signup">
            <SignUpContainer />
          </Route>
          <Route path="/">
            <HomeContainer />
          </Route>
        </Switch>
    </Router>
  </div>
)
export default App