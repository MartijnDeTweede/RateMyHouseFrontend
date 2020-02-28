import React from 'react';
import { User } from '../types/user.types';
import UserInfoSection from './UserInfoSection';
import DisplayField from './DisplayField';
import SubTitle from './SubTitle';

const UserDisplay: React.FC<{
  user: User;
}> =
({ user}) => {
  const {
    userName,
    objectForSale,
    contactInfo: {
      email,
      phoneNumber,
    },
    location: {
      postalCode,
      city,
      county,
      street,
      houseNumber,
      houseNumberAddition
    }
  } = user;


  return(
    <UserInfoSection>
        <SubTitle>About this user</SubTitle>
        <DisplayField label="User Name" fieldValue={userName} />
        <DisplayField label="Email" fieldValue={email} />
        <DisplayField label="Phone nr." fieldValue={phoneNumber} />
        <DisplayField label="County" fieldValue={county} />
        <DisplayField label="City" fieldValue={city} />
        <DisplayField label="Street" fieldValue={street} />
        <DisplayField label="House nr." fieldValue={ houseNumberAddition ? `${houseNumber} ${houseNumberAddition}` : `${houseNumber}`} />
        <DisplayField label="Postal code" fieldValue={postalCode} />
        <DisplayField label="For sale" fieldValue={objectForSale ? 'Yes' : 'No'} />
    </UserInfoSection>
  )
};

export default UserDisplay;