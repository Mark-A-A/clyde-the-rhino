const { validateRhinoPostBody } = require('../validation.js');

describe("validateRhinoPostBody =>", () => {
  it("should return true if post body object has only valid name & only valid species", () => {
    const postBodyMock = {
      "name": "Albert",
      "species": "white_rhinoceros"
    }
    
    const isValid = validateRhinoPostBody(postBodyMock);
    expect(isValid).toBeTruthy();
  });
  
  it("should return false if post body has invalid name", ()=>{
    const invalidName1 = '';
    const postBodyMock1 = {
      "name": invalidName1,
      "species": "white_rhinoceros"
    }
    
    const isValid = validateRhinoPostBody(postBodyMock1);
    expect(isValid).toBeFalsy();
    
    const invalidName2 = 'asdf1234asdf1234asdf1234';
    const postBodyMock2 = {
      "name": invalidName2,
      "species": "white_rhinoceros"
    }

    const isValid2 = validateRhinoPostBody(postBodyMock2);
    expect(isValid2).toBeFalsy();
  });

  it("should return false if post body has invalid species ", ()=>{
    const postBodyMock = {
      "name": "Albert",
      "species": "white rhinos"
    }
    
    const isValid = validateRhinoPostBody(postBodyMock);
    expect(isValid).toBeFalsy();
  });
})
