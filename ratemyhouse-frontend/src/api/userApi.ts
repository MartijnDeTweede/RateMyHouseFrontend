import { User } from "../types/user.types";

const baseUrl = 'http://localhost:4000';

export const getUser = (userName: string) => {
  const url = `${baseUrl}/user/${userName}`;
  const result =  fetch(url, {
    method: 'GET',
    mode: 'cors',
    credentials: 'same-origin',
})
.then(response => {
  return response.json()
}
  );
return result;
}

export const updateUser = ({user, token} : {user: User, token: string}) => {
  const url = `${baseUrl}/user/updateUserInfo`;

  const result =  fetch(url, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      'Access-Control-Allow-Headers': 'Content-Type',
      'auth-token': `${token}`
    },
    body: JSON.stringify(user)
})
.then(response => { return response.json()});
return result;
}

export const getIsOwnPage = ({userName, token}: {userName: string, token: string}) => {
  const url = `${baseUrl}/user/${userName}/isOwnPage`;
  // set response header
  const result =  fetch(url, {
    method: 'GET',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {'auth-token': `${token}`}
})
.then(response => {
  return response.json()
}
  );
return result; 
}