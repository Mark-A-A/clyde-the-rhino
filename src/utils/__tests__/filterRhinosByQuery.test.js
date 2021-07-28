const { filterRhinosByQuery } = require('../filterRhinosByQuery.js');
const rhinoceroses = require('../../data');
describe("filterRhinosByQuery =>", () => {
  it("should return all rhinos if query has no name or species", () => {
    const queryMock = {}
    
    const rhinoList = filterRhinosByQuery(rhinoceroses, queryMock);
    
    expect(rhinoList).toEqual(rhinoceroses);
    expect(rhinoList).toMatchSnapshot();
  });
  
  it("should return specific rhino with name & species", () => {
    const queryMock = {
      "name": "Clyde",
      "species": "white_rhinoceros",
    }

    const rhinoList = filterRhinosByQuery(rhinoceroses, queryMock);
    expect(rhinoList.length).toBe(1);
    
    const [ rhino ] = rhinoList
    expect(rhino.name).toBe("Clyde")
    expect(rhino.species).toBe("white_rhinoceros")
    expect(rhinoList).toMatchSnapshot();
  });

  it("should return all rhinos with specified name ", () => {
    const queryMock = {
      "name": "Winston"
    }

    const rhinoList = filterRhinosByQuery(rhinoceroses, queryMock);
    expect(rhinoList.length).toBe(1);
    
    const [rhino] = rhinoList;
    expect(rhino.name).toBe("Winston")
    
    expect(rhinoList).toMatchSnapshot();
  });

  it("should return all rhinos of a species ", () => {
    const queryMock = {
      "species": "white_rhinoceros"
    }

    const rhinoList = filterRhinosByQuery(rhinoceroses,queryMock);
    
    rhinoList.forEach(rhino => {
      expect(rhino.species).toBe(queryMock.species)
    })

    expect(rhinoList).toMatchSnapshot();
  });
})