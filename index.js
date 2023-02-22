// code your solution here
function saturdayFun(activity) {
    if (activity === undefined) {
    return 'This Saturday, I want to roller-skate!';}
    else {
         return (`This Saturday, I want to ${activity}!`);
    }
}

saturdayFun()

saturdayFun('bathe my dog')

const mondayWork = function(act) {
    if (act === undefined) {
        return 'This Monday, I will go to the office.';}
        else {
            return (`This Monday, I will ${act}.`);
    }
 }

 let wrapAdjective = function(style="*") {
    return function(adj="special") {
      return `You are ${style}${adj}${style}!`
    }
  }
