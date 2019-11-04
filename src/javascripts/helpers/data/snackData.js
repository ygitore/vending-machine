import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getSnacksByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/snacks.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const demSnacks = response.data;
      const snacks = [];
      Object.keys(demSnacks).forEach((fbId) => {
        demSnacks[fbId].id = fbId;
        snacks.push(demSnacks[fbId]);
      });
      resolve(snacks); // Hard code to only return first machine that comes back
    })
    .catch((error) => reject(error));
});

export default { getSnacksByUid };
