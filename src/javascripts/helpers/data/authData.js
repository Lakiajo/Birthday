import firebase from 'firebase/app';
import 'firebase/auth';
import birthday from '../../components/birthday/birthday';
import friends from '../../components/friends/friends';

const authDiv = document.getElementById('auth');
const birfdayDiv = document.getElementById('birthday');
const birfdayNavbar = document.getElementById('navbar-button-birfday');
const authNavbar = document.getElementById('navbar-button-auth');
const logoutNavbar = document.getElementById('navbar-button-logout');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // console.error(user);
      authDiv.classList.add('hide');
      birfdayDiv.classList.remove('hide');
      birfdayNavbar.classList.remove('hide');
      authNavbar.classList.add('hide');
      logoutNavbar.classList.remove('hide');
      birthday.birthdayString(user.uid);
      friends.getFriends(user.uid);
    } else {
      // console.error('user not found');
      authDiv.classList.remove('hide');
      birfdayDiv.classList.add('hide');
      birfdayNavbar.classList.add('hide');
      authNavbar.classList.remove('hide');
      logoutNavbar.classList.add('hide');
    }
  });
};

export default { checkLoginStatus };
