import firebase from 'firebase/app';
import 'firebase/auth';

const authdiv = document.getElementById('auth').addEventListener('click');
const birfdaydiv = document.getElementById('birfday').addEventListener('click');
const birfdayNavBar = document.getElementById('navbar-button-birfday').addEventListener('click');
const authNavBar = document.getElementById('navbar-button-auth').addEventListener('click');
const logoutNavBar = document.getElementById('navbar-button-logout').addEventListener('click');


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
