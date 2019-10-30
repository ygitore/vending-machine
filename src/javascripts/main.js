import firebase from 'firebase';
import '../styles/main.scss';

import apiKeys from './helpers/apiKeys';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  console.log(firebase.apps);
  console.log('Hi');
};

init();
