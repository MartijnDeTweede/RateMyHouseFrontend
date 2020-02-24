const baseUrl = 'http://localhost:4000';

export const login = (payload: {email:string, password: string}) => {
  const url = `${baseUrl}/auth/login`;

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
    },
    body: JSON.stringify(payload)
})
.then(response => {
  return response.json()
}
  );
return result;

}