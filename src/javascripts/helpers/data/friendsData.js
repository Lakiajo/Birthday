import Axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.fireBaseKeys.databaseURL;

const getFriendsByUid = uid => new Promise((resolve, reject) => {
  Axios.get(`${firebaseUrl}/friends.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const friendsResults = results.data;
      const friends = [];
      Object.keys(friendsResults).forEach((friendsId) => {
        friendsResults[friendsId].id = friendsId;
        friends.push(friendsResults[friendsId]);
      });
      resolve(friends);
    })
    .catch(err => reject(err));
});

const addNewFriend = friendObject => Axios.post(`${firebaseUrl}/friends.json`, friendObject);

const deleteFriend = friendId => Axios.delete(`${firebaseUrl}/friends/${friendId}.json`);

export default { addNewFriend, getFriendsByUid, deleteFriend };
