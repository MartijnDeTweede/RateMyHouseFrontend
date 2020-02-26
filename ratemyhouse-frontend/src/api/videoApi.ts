import { baseUrl } from "./apiConfig";

export const getVideos = (userName: string) => {
  const url = `${baseUrl}/user/${userName}/getVideos`;
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