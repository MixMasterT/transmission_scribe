/*
  apiCalls
*/

export const root = 'http://localhost:5000/';
export const postPath = '/relative/path/for/post'; // post transcription data
export const getPath = 'api/v1/content'; // fetch audio data
// export const root = 'http://localhost:8080/api/';

const getConfig = (method, requestBody) => {
  const config = {
    method,
    mode: 'cors', // not sure if this will be needed
    headers: {
      "Content-Type": "application/json"
    }
  };
  if(requestBody) {
    config.body = JSON.stringify(requestBody);
  }
  return config;
};

export const postAudioData = data => {
  const config = getConfig('post', data);
  return fetch(`${root}${postPath}`, config);
}

export const getAudioData = () => {
  const config = getConfig();
  return fetch(`${root}${getPath}`);
}
