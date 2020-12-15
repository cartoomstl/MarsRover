const assert = require('assert');
const Command = require('../classes/command');

describe("Command class", function() {
  
  it("should throw error if type is NOT passed into constructor as first parameter", function() {
    assert.throws(
      function() {
        new Command();
      },
      {
        message: 'Type required'
      }
    );
  });
 
  it("constructor sets command type", function() {
  });
});
it("constructor sets a value passed in as the 2nd argument", function() {
});