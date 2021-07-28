const getEndangeredRhinosSummary = (rhinosList) => {
  const { endangeredSpeciesSummary } = rhinosList.reduce((acc, rhino, rhinoList) => {
    const { name, species } = rhino;

    const { speciesCounts, endangeredSpeciesSummary } = acc
    if (!speciesCounts[species]) {
      speciesCounts[species] = 1;
    } else {
      speciesCounts[species] += 1;
    }

    if (speciesCounts[species] <= 2) {
      if (!acc.endangeredSpeciesSummary[species]) {
        acc.endangeredSpeciesSummary[species] = {
          rhinos: [name],
          count: 1,
        }
      } else {
        const {
          rhinos = []
        } = acc.endangeredSpeciesSummary[species];
  
        endangeredSpeciesSummary[species].count += 1;
        endangeredSpeciesSummary[species].rhinos = [...rhinos, name];

      }
    } else if (speciesCounts[species] > 2){
      endangeredSpeciesSummary[species] = undefined;
    }

    return acc
  }, {
    speciesCounts: {},
    endangeredSpeciesSummary: {}
  })

  return endangeredSpeciesSummary
}

module.exports = {
  getEndangeredRhinosSummary
}