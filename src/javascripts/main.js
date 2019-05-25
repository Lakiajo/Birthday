import firebase from 'firebase/app';
import 'bootstrap';
import '../styles/main.scss';
import auth from './components/auth/auth';
import apiKeys from './helpers/apiKeys.json';
import MyNavBar from './components/myNavBar/MyNavBar';
import authData from './helpers/data/authData';

// console.error('Lakia Jones');

const init = () => {
  console.error('keys', apiKeys.fireBaseKeys);
  firebase.initializeApp(apiKeys.fireBaseKeys);
  MyNavBar.navBarEvents();
  auth.authString();
  authData.checkLoginStatus();
};

init();
