import { baseUrl } from "./apiConfig";
import { Video } from "../types/video.types";

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

export const updateVideo = ({video, token} : {video: Video, token: string}) => {

  const url = `${baseUrl}/video/${video._id}/updateVideo`;

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
    body: JSON.stringify(video)
})
.then(response => { return response.json()});
return result;
}

export const addVideo = ({video, userName, token} : {video: Video, userName: string, token: string}) => {
  
  const url = `${baseUrl}/user/${userName}/addVideo`;

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
    body: JSON.stringify({...video})
})
.then(response => { return response.json()});
return result;
}

export const addVideoFile = ({file, token} : {file: File,  token: string}) => {
  console.log('file: ', file);
  
  const url = `${baseUrl}/video/uploadVideoFile`;
  let formData = new FormData();
  formData.append('productImage', file, 'productImage')
  const result =  fetch(url, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      'Access-Control-Allow-Headers': 'Content-Type',
      'auth-token': `${token}`
    },
    body: formData
})
.then(response => { return response.json()});
return result;
}

export const deleteVideo = ({video, token} : {video: Video, token: string}) => {
  
  const url = `${baseUrl}/video/${video._id}/deleteVideo`;

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
    body: JSON.stringify({...video})
})
.then(response => { return response.json()});
return result;
}