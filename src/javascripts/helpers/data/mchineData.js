import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;
const getMachine = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/machines.json`)
    .then((response) => {
      const demMachines = response.data;
      const machines = [];
      Object.keys(demMachines).forEach((fbId) => {
        demMachines[fbId].id = fbId;
        machines.push(demMachines[fbId]);
      });
      resolve(machines[0]);
    })
    .catch((err) => reject(err));
});
export default { getMachine };
