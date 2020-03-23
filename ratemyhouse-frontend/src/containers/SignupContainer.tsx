import React, { useState } from 'react'
import { Auth, SignupCredentials } from '../types/auth.types'
import { signupRequestActionCreator } from '../actions/AuthActionCreator';
import { connect } from 'react-redux';
import InputField from '../components/userInterActionComponents/InputField';
import ConfirmButton from '../components/userInterActionComponents/ConfirmButton';
import StandardForm from '../components/forms/StandardForm';
import Message from '../components/Message';
import { isFilledString } from '../helpers/validationHelpers';
import Loader from '../components/Loader';

interface signupContainerState {
  auth: Auth,
  isFetching: boolean,
  message?: string;
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
  const [email, setEmail] = useState<string|undefined>(undefined);
  const [userName, setUserName] = useState<string|undefined>(undefined);
  const [password, setPassWord] = useState<string|undefined>(undefined);

  
  if(isFetching) {
    return(<Loader />)
  }

  const inputIsValid = (): boolean => (isFilledString(email) && isFilledString(userName) && isFilledString(password));

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
          fieldName="username"
          labelText="Username"
          onBlur={(event: any) => setUserName(event.target.value)}
          type="text"
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
            signup({email, userName, password})}}> Sign up
          </ConfirmButton>
        }
      />}
      {auth.isLoggedIn && 
      <StandardForm 
        message={<div> Bedankt voor het aanmelden. Upload nu je eerste video.</div>}
        submitButton={
          <ConfirmButton
          type="button"
          value="button"
          disabled={!inputIsValid()}
          onClick={() => { 
            window.location.href= `/user/${auth.userName}`}}>Naar mijn pagina.</ConfirmButton>
        } 
      />}
  </section>
  )
}

const mapStateToProps = (state: signupContainerState) => {
  return {...state.auth};
}

const mapDispatchToProps = (dispatch: any) => ({
  signup: (signUpCredentials: SignupCredentials) => dispatch(signupRequestActionCreator(signUpCredentials))
})

export default connect(mapStateToProps,mapDispatchToProps)(SignupContainer);