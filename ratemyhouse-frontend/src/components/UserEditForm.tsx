import React, { useState } from 'react'
import { User } from '../types/user.types';
import InputField from './InputField';
import UserInfoSection from './UserInfoSection';
import ConfirmButton from './ConfirmButton';
import FlexWrapper from './FlexWrapper';

const UserEditForm: React.FC<{
  user: User;
  sendForm: Function;
}> = ({
  user,
  sendForm
}) => {
  const [userName, setUserName] = useState<string|undefined>(user.userName);
  const [objectForSale, setOjectForSale] = useState<boolean>(user.objectForSale);

  const [email, setEmail] = useState<string|undefined>(user.contactInfo.email);
  const [phoneNumber, setPhoneNumber] = useState<string|undefined>(user.contactInfo.phoneNumber);
  const [county, setCounty] = useState<string|undefined>(user.location.county);
  const [city, setCity] = useState<string|undefined>(user.location.city);
  const [street, setStreet] = useState<string|undefined>(user.location.street);
  const [postalCode, setPostalCode] = useState<string|undefined>(user.location.postalCode);
  const [houseNumber, setHouseNumber] = useState<number|undefined>(user.location.houseNumber);
  const [houseNumberAddition, setHouseNumberAddition] = useState<string|undefined>(user.location.houseNumberAddition);

  return(
    <UserInfoSection>
      <InputField 
        fieldName="userName"
        labelText="User name"
        onBlur={(event: any) => setUserName(event.target.value)}
        type="text"
        defaultValue={userName}
      />
      <InputField 
        fieldName="email"
        labelText="Email"
        onBlur={(event: any) => setEmail(event.target.value)}
        type="email"
        defaultValue={email}
      />
      <InputField 
        fieldName="phoneNumber"
        labelText="Phone nr."
        onBlur={(event: any) => setPhoneNumber(event.target.value)}
        type="text"
        defaultValue={phoneNumber}
      />
      <InputField 
        fieldName="country"
        labelText="country"
        onBlur={(event: any) => setCounty(event.target.value)}
        type="text"
        defaultValue={county}
      />
      <InputField 
        fieldName="city"
        labelText="City"
        onBlur={(event: any) => setCity(event.target.value)}
        type="text"
        defaultValue={city}
      />
      <InputField 
        fieldName="street"
        labelText="Street"
        onBlur={(event: any) => setStreet(event.target.value)}
        type="text"
        defaultValue={street}
      />
      <InputField 
        fieldName="postalCode"
        labelText="Postal code"
        onBlur={(event: any) => setPostalCode(event.target.value)}
        type="text"
        defaultValue={postalCode}
      />
      <InputField 
        fieldName="houseNumber"
        labelText="House nr."
        onBlur={(event: any) => setHouseNumber(event.target.value)}
        type="number"
        defaultValue={houseNumber}
      />
      <InputField 
        fieldName="houseNumberAddition"
        labelText="House nr. ext."
        onBlur={(event: any) => setHouseNumberAddition(event.target.value)}
        type="string"
        defaultValue={houseNumberAddition}
      />
      <FlexWrapper>
      <ConfirmButton onClick={() => {
        sendForm(
          {
            userName,
            objectForSale,
            contactInfo: {
              email,
              phoneNumber,
            },
            location: {
              county,
              city,
              street,
              postalCode,
              houseNumber,
              houseNumberAddition
            },
            _id: user._id
          }
        )
      }}> Update</ConfirmButton>

      </FlexWrapper>
    </UserInfoSection>
  )}

export default UserEditForm;