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