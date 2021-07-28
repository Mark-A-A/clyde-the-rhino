const { getEndangeredRhinosSummary } = require('../getEndangeredRhinosSummary');

const rhinoceroses = require('../../data');

describe("getEndangeredRhinosSummary =>", () => {
  it("should return endangered rhinos summary", () => {

    const summary = getEndangeredRhinosSummary(rhinoceroses);

    console.dir(summary)
    expect(summary.white_rhinoceros).toBeUndefined();
    expect(summary.white_rhinoceros).toBeUndefined();
    expect(summary.javan_rhinoceross).toBeUndefined();
    expect(summary.indian_rhinoceros.rhinos).toEqual([
      {
        name: 'Phil',
        id: expect.anything(),
      }
    ]);
    expect(summary.indian_rhinoceros.count).toBe(1);
    expect(summary).toMatchSnapshot();
  });
});

