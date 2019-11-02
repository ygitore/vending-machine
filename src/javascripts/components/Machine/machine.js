import './machine.scss';
import smash from '../../helpers/data/smash';

const buildTheMachine = () => {
  smash.getCompleteMachine()
    .then((singleMachine) => console.log('1 machine', singleMachine))
    .catch((err) => console.err(err));
};
export default { buildTheMachine };
