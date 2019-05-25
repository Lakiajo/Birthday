import Axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getbirfdayByUid = uid => new Promise((resolve, reject) => {
  Axios.get(`${firebaseUrl}/birthdays.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const birthdayResults = results.data;
      console.error(birthdayResults);
    })
    .catch(err => reject(err));
});

export default { getbirfdayByUid };
