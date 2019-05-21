import firebase from 'firebase/app';
import 'firebase/auth';

const navBarEvents = () => {
  console.error('LakiaLakia');
  const navLinks = document.getElementsByClassName('nav-link');
  for (let i = 0; i < navLinks.length; i += 1) {
    navLinks[i].addEventListener('click', (e) => {
      if (e.target.id === 'navbar-button-logout') {
        firebase.auth().signOut()
          .then(() => {
            console.error('bye');
          })
          .catch(err => console.error('logged in', err));
      }
    });
  }
};

export default { navBarEvents };