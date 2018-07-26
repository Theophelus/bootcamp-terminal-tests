module.exports = function(weekday){
  var weekdays = !weekday.startsWith('S') && weekday.endsWith('day');
  return weekdays;
};
// Call it
// console.log(isWeekday("Monday"));
// console.log(isWeekday("Sunday"));
