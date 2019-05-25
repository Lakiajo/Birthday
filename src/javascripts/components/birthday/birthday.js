import util from '../../helpers/util';
import birfdayData from '../../helpers/data/birfdayData';

const birthdayString = (uid) => {
  birfdayData.getbirfdayByUid(uid).then((resp) => {
    console.error(resp);
    const domString = 'Birthday';
    util.printToDom('event', domString);
  }).catch(err => console.error('could not get birthday', err));
};

export default { birthdayString };
