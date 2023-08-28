const inventory = require('./inventory');
const problem1 = require('./problem1');
const problem2 = require('./problem2');
const problem3 = require('./problem3');
const problem4 = require('./problem4');
const problem5 = require('./problem5');
const problem6 = require('./problem6');

const result1 = problem1(inventory,33);
const result2 = problem2(inventory,10);
const result3 = problem3(inventory,'car_make');
const result4 = problem4(inventory,'car_make');
const result5 = problem5(inventory,'car_year',2000);
const result6 = problem6(inventory,'car_make',['Audi', 'Mercedes-Benz']);


console.log('\n',"XXXXXX FIRST PROBLEM OUTPUT XXXXXX",'\n');
console.log(result1);
console.log('\n',"XXXXXX SECOND PROBLEM OUTPUT XXXXXX",'\n');
console.log(result2);
console.log('\n',"XXXXXX THIRD PROBLEM OUTPUT XXXXXX",'\n');
console.log(`Inventory sorted by property you want is `,result3);
console.log('\n',"XXXXXX FOURTH PROBLEM OUTPUT XXXXXX",'\n');
console.log(`All the options in the given criteria are `,result4);
console.log('\n',"XXXXXX FIFTH PROBLEM OUTPUT XXXXXX",'\n');
console.log(result5);
console.log('\n',"XXXXXX SIXTH PROBLEM OUTPUT XXXXXX",'\n');
console.log(result6);
