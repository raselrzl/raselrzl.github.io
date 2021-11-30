//freezeObj

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

  //Use Arrow Functions to Write Concise Anonymous Functions

  var magic = function() {
    return new Date();
  };
  
  const magic=()=> new Date();


  //

  var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
  };
  
  console.log(myConcat([1, 2], [3, 4, 5]));
  
  
  const myConcat=(arr1, arr2)=>arr1.concat(arr2);
  console.log(myConcat([1, 2], [3, 4, 5]));


  //Set Default Parameters for Your Functions

const increment = (number=number++, value=1) => number + value;
console.log(increment(5));
console.log(increment(5,8));

//Use the Rest Parameter with Function Parameter

const sum = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  }
  
  const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
  
  console.log(sum(0, 1, 2));
  
//Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];
console.log(arr2);  

//Use Destructuring Assignment to Extract Values from Objects

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };

  const{today, tomorrow}=HIGH_TEMPERATURES;
  console.log(today, tomorrow)
  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };    
  const{today:highToday, tomorrow:highTomorrow}= HIGH_TEMPERATURES;
  console.log(highToday)


  //Use Destructuring Assignment to Assign Variables from Nested Objects
  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };  
  const{today:{low:lowToday,high:highToday}}= LOCAL_FORECAST;
  console.log(lowToday)