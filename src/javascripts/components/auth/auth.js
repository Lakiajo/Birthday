import firebase from 'firebase/app';
import 'firebase/auth';
import googleImage from './googlebutton.png';
import util from '../../helpers/util';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const authString = () => {
  let domString = '<button id="google-auth" class="btn btn-danger">';
  domString += `<img src=${googleImage} />`;
  domString += '</button>';
  util.printToDom('auth', domString);
  document.getElementById('google-auth').addEventListener('click', signMeIn);
};

export default { authString };
