const filterRhinosByQuery = (rhinosList, query) => {
  const { name, species } = query
  if (!name && !species) {
    return rhinosList;
  }

  const filteredListOfRhinos = rhinosList.filter((rhino) => {
    const nameMatch = rhino.name === name;
    const speciesMatch = rhino.species === species;
    
    if (name && species) {
      return nameMatch && speciesMatch;
    } else if (name) {
      return nameMatch;
    } else if (species) {
      return speciesMatch;
    }

    return null;
  })

  return filteredListOfRhinos;
}

module.exports = {
  filterRhinosByQuery
};