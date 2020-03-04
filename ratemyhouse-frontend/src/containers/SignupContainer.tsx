import React, { useState } from 'react'
import { Auth, SignupCredentials } from '../types/auth.types'
import { signupRequestActionCreator } from '../actions/AuthActionCreator';
import { connect } from 'react-redux';
import InputField from '../components/InputField';
import FlexBoxRow from '../components/FlexBoxRow';
import BlockWrapper from '../components/BlockWrapper';
import FlexBoxColumn from '../components/FlexBoxColumn';
import ConfirmButton from '../components/ConfirmButton';

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
      <FlexBoxRow>
        <BlockWrapper>
          <FlexBoxColumn>
            <InputField 
              fieldName="email"
              labelText="E-mail"
              onBlur={(event: any) => setEmail(event.target.value)}
              type="email"
            />
            <InputField 
              fieldName="username"
              labelText="Username"
              onBlur={(event: any) => setUserName(event.target.value)}
              type="text"
            />
            <InputField 
              fieldName="password"
              labelText="Password"
              onBlur={(event: any) => setPassWord(event.target.value)}
              type="password"
            />
            <ConfirmButton type="submit" value="Submit" onClick={() => { 
              signup({email, userName, password})}}> Sign up
              </ConfirmButton>
          </FlexBoxColumn>
        </BlockWrapper>
      </FlexBoxRow>
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