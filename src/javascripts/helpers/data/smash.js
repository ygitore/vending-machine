import machineData from './mchineData';
import positionData from './positionData';
import snackPositionData from './snackPositionData';
import snackData from './snackData';

const getCompleteMachine = () => new Promise((resolve, reject) => {
  machineData.getMachine()
    .then((singleMachine) => positionData.getAllPositionsByMachineId(singleMachine.id))
    .then((positions) => {
      snackPositionData.getAllSnackPositionsByMachineId(positions[0].machineId)
        .then((snackPosition) => {
          snackData.getSnacksByUid(positions[0].uid).then((snacks) => {
            console.log('snacksPositions', snackPosition);
            resolve(snacks);
          });
        });
    })
    .catch((err) => reject(err));
  // to start of we need machineid. can't do anything unless we have machine data
  // 1. getMachines -returns first machine (hard coding)
  // 2. use machineId to get all positions for that machine
  // 3. use machineId to get all snack postions
  // 4. use uid of snackPositions/ positions to get all available snacks for that machine
  // 5. smash EM' returns an array of positions (in order A1, A2, A3, B1 ...),
  // so positions should have positions.snack if a snack exists at that position
});
export default { getCompleteMachine };
