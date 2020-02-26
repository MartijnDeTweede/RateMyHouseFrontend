import React from 'react';
import { User } from '../types/user.types';

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
    <div>
      <div>{userName}</div>
      <div>{email}</div>
      <div>{phoneNumber}</div>
      <div>{postalCode}</div>
      <div>{houseNumber} {houseNumberAddition}</div>
      <div>{street}</div>
      <div>{city}</div>
      <div>{county}</div>
      <div>{objectForSale ? 'For sale' : 'Not for sale'}</div>
    </div>
  )
};

export default UserDisplay;