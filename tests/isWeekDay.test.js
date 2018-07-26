const assert = require('assert');
const isWeekDay = require('../isWeekDay');
describe('isWeekDay', function(){
  it('should return true if the day in a weekday', function(){
    assert.equal(isWeekDay('Monday'), true);
  });
  it('should fail if the day is in a weekday', function(){
    assert.equal(isWeekDay('Sunday'), false);
  });
});
