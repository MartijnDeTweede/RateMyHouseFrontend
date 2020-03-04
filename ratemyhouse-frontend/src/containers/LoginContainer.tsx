import React, { useState } from 'react';
import { loginRequestActionCreator, logoutRequestActionCreator } from '../actions/AuthActionCreator';
import { connect } from 'react-redux';
import { LoginCredentials } from '../types/auth.types';
import { Auth } from '../types/auth.types';
import InputField from '../components/userInterActionComponents/InputField';
import ConfirmButton from '../components/userInterActionComponents/ConfirmButton';
import InformationBlock from '../components/blocks/InformationBlock';
import FlexBoxRowHolder from '../components/stylers/FlexBoxRowHolder';
import FlexBoxColumn from '../components/stylers/FlexBoxColumnHolder';
import Message from '../components/Message';

interface LoginContainerState {
  auth: Auth,
  isFetching: boolean,
}

const LoginForm: React.FC<{login: Function}> = ({login}) => {
  const [email, setEmail] = useState<string|undefined>(undefined);
  const [password, setPassWord] = useState<string|undefined>(undefined);
  return(
    <FlexBoxRowHolder>
      <InformationBlock>
        <FlexBoxColumn>
          <div>
          <InputField 
          fieldName="email"
          labelText="E-mail"
          onBlur={(event: any) => setEmail(event.target.value)}
          type="email"
        />
        <InputField 
          fieldName="password"
          labelText="Password"
          onBlur={(event: any) => setPassWord(event.target.value)}
          type="password"
        />
          </div>
        <ConfirmButton type="submit" value="Submit" onClick={() => { 
          login({email, password})}}>Log in</ConfirmButton>
        </FlexBoxColumn>
      </InformationBlock>      
    </FlexBoxRowHolder>
  )
}

const LogoutForm: React.FC<{
  userName: string;
  logout: Function;
}> = ({
  userName,
  logout
}) => {
  return(
    <FlexBoxRowHolder>
    <InformationBlock>
      <FlexBoxColumn>
        <div> Welkom {userName}</div>
      <ConfirmButton type="submit" value="Submit" onClick={() => { 
        logout()}}>Log out</ConfirmButton>
      </FlexBoxColumn>
    </InformationBlock>      
  </FlexBoxRowHolder>
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
      { message && <Message message={message} />}
      {auth.isLoggedIn && <LogoutForm logout={logout} userName={auth.userName} />}
    </div>
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