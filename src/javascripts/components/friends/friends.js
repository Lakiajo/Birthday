import firebase from 'firebase/app';
import 'firebase/auth';
import util from '../../helpers/util';
import friendsData from '../../helpers/data/friendsData';
import SMASH from '../../helpers/smash';
import rsvpData from '../../helpers/data/rsvpData';
import birfdayData from '../../helpers/data/birfdayData';

const createNewFriend = (e) => {
  e.preventDefault();
  const newFriend = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    uid: firebase.auth().currentUser.uid,
  };
  friendsData.addNewFriend(newFriend)
    .then(() => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('birthday').classList.remove('hide');
      document.getElementById('new-friend').classList.add('hide');
      getFriends(firebase.auth().currentUser.uid); // eslint-disable-line no-use-before-define
    })
    .catch(err => console.error('no new friends', err));
  // console.error(newFriend);
};

const newFriendButton = () => {
  document.getElementById('birthday').classList.add('hide');
  document.getElementById('new-friend').classList.remove('hide');
  document.getElementById('saveNewFriend').addEventListener('click', createNewFriend);
};

const deleteFriendsEvent = (e) => {
  const friendId = e.target.id;
  friendsData.deleteFriend(friendId)
    .then(() => getFriends(firebase.auth().currentUser.uid)) // eslint-disable-line no-use-before-define
    .catch(err => console.error('no deletion', err));
};

const addEvents = () => {
  document.getElementById('add-friend-button').addEventListener('click', newFriendButton);
  const deleteButtons = document.getElementsByClassName('delete-friend');
  for (let i = 0; i < deleteButtons.length; i += 1) {
    deleteButtons[i].addEventListener('click', deleteFriendsEvent);
  }
};

const showFriends = (friends) => {
  let domString = '<div class="col-6 offset-3">';
  domString += '<h2>Friends</h2>';
  domString += '<button id="add-friend-button" class="btn btn-info">Add Friend</button>';
  domString += '<table class="table table-striped"';
  domString += '<thead>';
  domString += '<tr>';
  domString += '<th scope="col">Name</th>';
  domString += '<th scope="col">Email</th>';
  domString += '<th scope="col">RSVP</th>';
  domString += '<th scope="col"></th>';
  domString += '</tr>';
  domString += '</thead>';
  domString += '<tbody>';
  friends.forEach((friend) => {
    domString += '<tr>';
    domString += `<td>${friend.name}</td>`;
    domString += `<td>${friend.email}</td>`;
    domString += `<td id=${friend.rsvpId}>`;
    domString += '<div class="custom-control custom-radio custom-control-inline">';
    domString += `<input type="radio" id="radio1 _${friend.id}" name="radio-buttons_${friend.id}" class="custom-control-input" ${friend.statusId === 'status2' ? 'checked' : ''}>`;
    domString += `<label class="custom-control-label" for="radio1 _${friend.id}">Yes, I'll 
    </label>`;
    domString += '</div>';
    domString += '<div class="custom-control custom-radio custom-control-inline">';
    domString += `<input type="radio" id="radio2 _${friend.id}" name="radio-buttons_${friend.id}" class="custom-control-input" ${friend.statusId === 'status3' ? 'checked' : ''}>`;
    domString += `<label class="custom-control-label" for="radio2 _${friend.id}">No, I cant make it.</label>`;
    domString += '</div>';
    domString += '<div class="custom-control custom-radio custom-control-inline">';
    domString += `<input type="radio" id="radio3 _${friend.id}" name="radio-buttons_${friend.id}" class="custom-control-input" ${friend.statusId === 'status1' ? 'checked' : ''}>`;
    domString += `<label class="custom-control-label" for="radio3 _${friend.id}">Maybe or unsure</label>`;
    domString += '</div>';
    domString += '</td>';
    domString += `<th scope="col"><button id=${friend.id} class="btn btn-danger delete-friend">X</button></th>`;
    domString += '</tr>';
  });
  domString += '</tbody>';
  domString += '</table>';
  domString += '</div>';
  util.printToDom('friends', domString);
  addEvents();
};

const getFriends = (uid) => {
  friendsData.getFriendsByUid(uid)
    .then((friends) => {
      birfdayData.getbirfdayByUid(uid).then((bday) => {
        rsvpData.getRsvpsByBirthdayId(bday.id).then((rsvps) => {
          // console.error('rsvps', rsvps);
          const finalFriends = SMASH.friendRsvps(friends, rsvps);
          // console.error(finalFriends);
          showFriends(finalFriends);
        });
      });
    })
    .catch(err => console.error('no friends', err));
};

export default { getFriends };
