import Axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.fireBaseKeys.databaseURL;

const getRsvpsByBirthdayId = birthdayId => new Promise((resolve, reject) => {
  Axios.get(`${firebaseUrl}/rsvps.json?orderBy="birthdayId"&equalTo="${birthdayId}"`)
    .then((results) => {
      const rsvpResults = results.data;
      const rsvps = [];
      Object.keys(rsvpResults).forEach((rsvpId) => {
        rsvpResults[rsvpId].id = rsvpId;
        rsvps.push(rsvpResults[rsvpId]);
      });
      resolve(rsvps);
    })
    .catch(err => reject(err));
});

const addRsvp = rsvp => Axios.post(`${firebaseUrl}/rsvps.json`, rsvp);
const editRsvp = (rsvpId, rsvpObj) => Axios.put(`${firebaseUrl}/rsvps/${rsvpId}.json`, rsvpObj);

export default { getRsvpsByBirthdayId, addRsvp, editRsvp };
