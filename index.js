// code your solution here
function saturdayFun(rollerskate){
    console.log('"This Saturday, I want to roller-skate!');
}
// Define saturdayFun function
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Define mondayWork function
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  // Define wrapAdjective function
  function wrapAdjective(wrapper = "*") {
    return function(adjective) {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    }
  }
  
  module.exports = { saturdayFun, mondayWork, wrapAdjective };
  
