const uuidv4 = require('uuid/v4');
let rhinoceroses = require('./data');

const getAll = () => {
  return rhinoceroses;
};

const newRhinoceros = data => {
  const newRhino = {
    id: uuidv4(),
    name: data.name,
    species: data.species,
  };
  rhinoceroses.push(newRhino);
  return newRhino;
};

const getRhinoByID = (rhinoId) => {
  const [rhinoMatch = null] = rhinoceroses.filter(rhino => rhino.id === rhinoId);

  return rhinoMatch;
}

module.exports = {
  getAll,
  newRhinoceros,
  getRhinoByID
}
