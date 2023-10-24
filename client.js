// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  // create increase bonus array
let bonusPercentage = 0;
let employeeBonus = {};
console.log("Here is the current bonus percent", bonusPercentage, "and this is their bonus record", employeeBonus);

for (let index of employees){
  if (employee === index.name){
    employeeBonus.name = index.name
      if (index.reviewRating === 3){
        bonusPercentage += 4;
    }
      else if (index.reviewRating === 4){
        bonusPercentage += 6;
      }
      
      else if (index.reviewRating === 5){
        bonusPercentage += 10;
      }
      console.log(bonusPercentage);
  }
}



  // create new object called employeeBonus with the first paramater being name
  // Be able to look up employee
  // look at their reviewRating
  // find the associated object in the increaseBonusArray
  // return the associated percent from the increaseBonusArray
  // add the percent we find to a the bonusPercentage paramter in the employeeBonus object
  // check amount of digits in employee number, then add 5 percent to the bonusPercentage paramter
  // if statement to check if income is over 65000 decrease bonusPercentage by 1
  // if bonusPercentage is above 13, change bonusPercentage to 13
  // if bonusPercentage is below 0, change bonusPercentage to 0
  // look back to annualSalary and multiply by bonusPercentage push that to the new totalBonus paramter
  // add totalBonus and annualSalaray and push to totalCompensation paramter
  // return as an object with new values
  
  // return new object with bonus results

}

calculateIndividualEmployeeBonus('Scout')