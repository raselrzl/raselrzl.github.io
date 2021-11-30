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


  //Write Arrow Functions with Parameters

  var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
  };
  
  console.log(myConcat([1, 2], [3, 4, 5]));
  
  
  const myConcat=(arr1, arr2)=>arr1.concat(arr2);
  console.log(myConcat([1, 2], [3, 4, 5]));