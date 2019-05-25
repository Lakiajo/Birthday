import Axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.fireBaseKeys.databaseURL;

const addNewFriend = friendObject => Axios.post(`${firebaseUrl}/friends.json`, friendObject);

export default { addNewFriend };
