// random whole number between 0-9

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
  }

//random number in a range

function randomRange(myMin, myMax) {
    let rangeb=Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    return rangeb;
  }
  console.log(randomRange(10, 15));



  //converst str to int

  function convertToInteger(str) {
    let b=parseInt(str);
    return b;
    }    
    console.log(convertToInteger("56"));


//convert binarry to int

function convertToInteger(str) {
    const a = parseInt(str, 2);
    return a;
    }
    
    console.log(convertToInteger("10011"));


//Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
  }
  
  console.log(checkEqual(1, 2));


  /*In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero. */
  function checkSign(num) {
    return num > 0 ? "positive": num < 0 ? "negative":"zero";
    }
    
    console.log(checkSign(-11));
    


    //Use Recursion to Create a Countdown
    function countdown(n){
        if (n < 1) {
          return [];
        } else {
          let countArray = countdown(n - 1);
          countArray.unshift(n);
          return countArray;
        }
      }
      console.log(countdown(5));


      //Use Recursion to Create a Range of Numbers
      function rangeOfNumbers(startNum, endNum) {
        if(endNum - startNum === 0){
          return [startNum];
        }else{
          var numbers=rangeOfNumbers(startNum, endNum-1);
          numbers.push(endNum);
          return numbers;
        }        
        };        
        console.log(rangeOfNumbers(5,7));
        
        
        
    
    
     