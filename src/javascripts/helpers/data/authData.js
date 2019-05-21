import firebase from 'firebase/app';
import 'firebase/auth';

const authdiv = document.getElementById('authdiv').addEventListener('navbar-button-logout');
const birfdaydiv = document.getElementById('authdiv').addEventListener('navbar-button-logout');
const birfdayNavBar = document.getElementById('authdiv').addEventListener('navbar-button-logout');
const authNavBar = document.getElementById('authdiv').addEventListener('navbar-button-logout');
const logoutNavBar = document.getElementById('authdiv').addEventListener('navbar-button-logout');


const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.error('user found');
      authdiv.classlist.add('hide');
      birfdaydiv.classlist.remove('hide');
      birfdayNavBar.classlist.remove('hide');
      authNavBar.classlist.add('hide');
      logoutNavBar.classlist.remove('hide');
    } else {
      console.error('user not found');
      authdiv.classlist.remove('hide');
      birfdaydiv.classlist.add('hide');
      birfdayNavBar.classlist.add('hide');
      authNavBar.classlist.remove('hide');
      logoutNavBar.classlist.add('hide');
    }
  });
};

export default { checkLoginStatus };
