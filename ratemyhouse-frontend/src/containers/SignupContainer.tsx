import React, { useState } from 'react'
import { Auth, SignupCredentials } from '../types/auth.types'
import { signupRequestActionCreator } from '../actions/AuthActionCreator';
import { connect } from 'react-redux';

interface signupContainerState {
  auth: Auth,
  isFetching: boolean,
}

const SignupForm: React.FC<{signup: Function}> = ({signup}) => {
  const [email, setEmail] = useState<string|undefined>(undefined);
  const [userName, setUserName] = useState<string|undefined>(undefined);
  const [password, setPassWord] = useState<string|undefined>(undefined);
  return (
    <div>
    <div>
      <label htmlFor="email">email</label>
      <input name="email" id="email" onBlur={(event) => setEmail(event.target.value)}></input>
    </div>
    <div>
      <label htmlFor="email">username</label>
      <input name="email" id="email" onBlur={(event) => setUserName(event.target.value)}></input>
    </div>
    <div>
      <label htmlFor="password">password</label>
      <input name="password" id="password"onBlur={(event) => setPassWord(event.target.value)}></input>
    </div>
    <input type="submit" value="Submit" onClick={() => { 
      signup({email, userName, password})}} />
  </div>
  )
}

const SignupContainer: React.FC<{
  signup: Function,
  auth: Auth,
  isFetching: boolean;
  message?: string,
}> = ({
  auth,
  isFetching,
  signup,
  message
}) => {
  return(
    <div>
    {isFetching && <div> We zijn je gegevens aan het ophalen</div>}
    {!isFetching && !auth.isLoggedIn &&  <SignupForm signup={signup} />}
    { message && <div>{message}</div>}
    { auth.isLoggedIn  && <div>Bedankt voor het aanmelden</div>}
  </div>
  )
}

const mapStateToProps = (state: signupContainerState) => {
  return {...state.auth}
}

const mapDispatchToProps = (dispatch: any) => ({
  signup: (signUpCredentials: SignupCredentials) => dispatch(signupRequestActionCreator(signUpCredentials))
})

export default connect(mapStateToProps,mapDispatchToProps)(SignupContainer);