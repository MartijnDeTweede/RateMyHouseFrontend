import React, { useState } from 'react';
import { loginRequestActionCreator, logoutRequestActionCreator } from '../actions/AuthActionCreator';
import { connect } from 'react-redux';
import { LoginCredentials } from '../types/auth.types';
import { Auth } from '../types/auth.types';
import InputField from '../components/userInterActionComponents/InputField';
import ConfirmButton from '../components/userInterActionComponents/ConfirmButton';
import Message from '../components/Message';
import StandardForm from '../components/forms/StandardForm';

interface LoginContainerState {
  auth: Auth,
  isFetching: boolean,
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
  const [email, setEmail] = useState<string|undefined>(undefined);
  const [password, setPassWord] = useState<string|undefined>(undefined);
  
  if(isFetching) {
    return(<article>Fetching data</article>)
  }

  return(
    <section>
      {!auth.isLoggedIn &&  
      <StandardForm 
        fields={[
          <InputField 
          fieldName="email"
          labelText="E-mail"
          onBlur={(event: any) => setEmail(event.target.value)}
          type="email"
        />,
        <InputField 
          fieldName="password"
          labelText="Password"
          onBlur={(event: any) => setPassWord(event.target.value)}
          type="password"
        />
        ]}
        message={message && <Message message={message} />}
        submitButton={
          <ConfirmButton type="submit" value="Submit" onClick={() => { 
            login({email, password})}}>Log in</ConfirmButton>
        }
      />}
      {auth.isLoggedIn && 
      <StandardForm 
        message={<div> Welkom {auth.userName}</div>}
        submitButton={
          <ConfirmButton type="submit" value="Submit" onClick={() => { 
            logout()}}>Log out</ConfirmButton>
        } 
      />}
    </section>
  )
}

const mapStateToProps = (state: LoginContainerState) => {
  return {...state.auth}
}

const mapDispatchToProps = (dispatch: any) => ({
  login: (loginCredentials: LoginCredentials) => {dispatch(loginRequestActionCreator(loginCredentials))},
  logout: () => dispatch(logoutRequestActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);