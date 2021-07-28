const uuidv4 = require('uuid/v4');
let rhinoceroses = require('./data');
const { filterRhinosByQuery } = require('./utils/filterRhinosByQuery');
const { getEndangeredRhinosSummary } = require('./utils/getEndangeredRhinosSummary');

const getAll = (query) => {
  const allRhinos = filterRhinosByQuery(rhinoceroses, query);
  return allRhinos;
};

const newRhinoceros = (data) => {
  const newRhino = {
    id: uuidv4(),
    name: data.name,
    species: data.species,
  };
  rhinoceroses.push(newRhino);
  return newRhino;
};

const getRhinoByID = (rhinoId) => {
  const [rhinoMatch = null] = rhinoceroses.filter(
    (rhino) => rhino.id === rhinoId
  );

  return rhinoMatch;
};

const getEndangeredRhinos = () => {
  const summary  = getEndangeredRhinosSummary(rhinoceroses)
  
  console.dir(summary);
  return summary
}

module.exports = {
  getAll,
  newRhinoceros,
  getRhinoByID,
  getEndangeredRhinos
};
