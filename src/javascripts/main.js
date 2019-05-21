import firebase from 'firebase/app';
import 'bootstrap';
import '../styles/main.scss';
import auth from './components/auth/auth';
import birthday from './components/birthday/birthday';
import apiKeys from './helpers/apiKeys.json';

console.error('Lakia Jones');

const init = () => {
  console.error('keys', apiKeys.fireBaseKeys);
  firebase.initializeApp(apiKeys.fireBaseKeys);
  birthday.birthdayString();
  auth.authString();
};

init();
