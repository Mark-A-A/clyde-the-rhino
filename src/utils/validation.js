const validateRhinoPostBody = (body) => {
  const {name = null, species = null} = body
  if (!name || !species) {
    return false;
  }

  const valid = Object.entries(body).reduce((acc, entry) => { 
    const [ key, value ] = entry
    if (key === "name") {
      if (!value.length || value.length > 20) {
        acc = false;
      }
    } else if (key === 'species' ){

      const validRhinos = [
        `white_rhinoceros`,
        `black_rhinoceros`,
        `indian_rhinoceros`,
        `javan_rhinoceros`,
        `sumatran_rhinoceros`
      ];

      if (!validRhinos.includes(value)) {
        acc = false;
      }
    } else if (key) {
      acc = false
    }

    return acc;
  }, true)

  return valid
}

module.exports = {
  validateRhinoPostBody
};