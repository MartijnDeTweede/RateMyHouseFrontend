import React from 'react'
import HomeContainer from '../containers/HomeContainer'; 
import LoginContainer from '../containers/LoginContainer';
import SignUpContainer from '../containers/SignupContainer';

import UserPage from '../pages/UserPage';

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
            <UserPage />
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