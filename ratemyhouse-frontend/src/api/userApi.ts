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

export const getIsOwnPage = ({userName, token}: {userName: string, token: string}) => {
  console.log('token: ', token);
  console.log('userName: ', userName);
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