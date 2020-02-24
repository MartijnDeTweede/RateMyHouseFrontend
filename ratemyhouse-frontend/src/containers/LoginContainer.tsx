import React, { useState } from 'react'
import { loginRequestActionCreator, logoutRequestActionCreator } from '../actions/AuthActionCreator';
import { connect } from 'react-redux';
import { LoginCredentials } from '../types/auth.types';
import { Auth } from '../types/auth.types';

interface LoginState {
  auth: Auth,
  isFetching: boolean,
}

const LoginForm: React.FC<{login: Function}> = ({login}) => {
  const [email, setEmail] = useState<string|undefined>(undefined);
  const [password, setPassWord] = useState<string|undefined>(undefined);

  return(
    <div>
      <div>
        <label htmlFor="email">email</label>
        <input name="email" id="email" onBlur={(event) => setEmail(event.target.value)}></input>
      </div>
      <div>
      <label htmlFor="password">password</label>
      <input name="password" id="password"onBlur={(event) => setPassWord(event.target.value)}></input>
      </div>
      <input type="submit" value="Submit" onClick={() => { 
        login({email, password})}} />
  </div>
  )
}

const LoginContainer: React.FC<{
  auth: Auth,
  isFetching: boolean;
  login: Function;
  logout: Function;
  message?: string,
}> =({
  auth,
  isFetching,
  login,
  logout,
  message
}) => {
  return(
    <div>
      {isFetching && <div> We zijn je gegevens aan het ophalen</div>}
      {!isFetching && !auth.isLoggedIn &&  <LoginForm login={login} />}
      { message && <div>{message}</div>}
      {!isFetching && !message &&  auth.isLoggedIn && <div>Welkom {auth.userName}</div>}
      {auth.isLoggedIn && <button onClick={() => logout()}>Log out</button>}
    </div>
  )
}

const mapStateToProps = (state: LoginState) => {
  console.log('state: ', state);
  return {...state.auth}
}

const mapDispatchToProps = (dispatch: any) => ({
  login: (loginCredentials: LoginCredentials) => {dispatch(loginRequestActionCreator(loginCredentials))},
  logout: () => dispatch(logoutRequestActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);