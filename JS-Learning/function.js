//

function print(arg){
    //console.log(arg)
}


function functionWithArgs(param1, param2){
    result=param1+param2;
}
functionWithArgs("test", " func");
//console.log(result);

//Return a Value from a Function with Return
function timesFive(num){
    return num*5;
  }
  let ans=timesFive(10);
  //console.log(ans)



  //Global Scope and Functions
let myGlobal=10;
function fun1() {
      oopsGlobal=5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1()
fun2()

//Local Scope and Functions
function myLocalScope() {
    let myVar=10;  
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();

  //Global vs. Local Scope in Functions

  const outerWear = "T-Shirt";
  function myOutfit() {
  const outerWear="sweater";
  return outerWear;
}
myOutfit();
console.log(myOutfit());

//Understanding Undefined Value returned from a Function
let sum = 0;

function addThree() {
  sum = sum + 3;
  return sum;
}
function addFive(){
  sum=sum+5;
}
console.log(addThree());
console.log(addFive());
  

//Assignment with a Returned Value
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed=processArg(7);
console.log(processed)


// Stand in Line
function nextInLine(arr, item) {
    
    arr.push(item);
  
    item=arr.shift();
    return item;
  }
  const testArr = [1, 2, 3, 4, 5];
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));


  //true of false, if statement
  function trueOrFalse(wasThatTrue) {
     if(wasThatTrue){
       return "Yes, that was true"
     }
       return "No, that was false"
  
  }
  console.log(trueOrFalse(true))
  console.log(trueOrFalse(false))


  //Comparison with the Equality Operator

function testEqual(val) {
    if (val==12) { 
      return "Equal";
    }
    return "Not Equal";
  } 
  console.log(testEqual(10))

//Comparison with the Strict Equality Operator
function testStrict(val) {
    if (val===7) {
      return "Equal";
    }
    return "Not Equal";
  }  
  console.log(testStrict(7));

  //Comparison with the Inequality Operator
function testNotEqual(val) {
    if (val != 99) { 
      return "Not Equal";
    }
    return "Equal"; 
} 
  testNotEqual(10);

  //Comparisons with the Logical And Operator
  function testLogicalAnd(val) {  
    if (val<=50 && val>=25) {      
        return "Yes";
    }
    return "No";
  }
  console.log(testLogicalAnd(10));

  //Comparisons with the Logical Or Operator
  function testLogicalOr(val) {
    if (val<10||val>20) {
      return "Outside";
    }
     return "Inside";
  }
  console.log(testLogicalOr(25));

  //Introducing Else Statements
  function testElse(val) {
    let result = "";
    if (val > 5) {
      result = "Bigger than 5";
    } 
    else {
      result = "5 or Smaller";
    }
    return result;
  }  
  console.log(testElse(4));

  //Introducing Else If Statements
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }  
    else if (val <= 5) {
      return "Smaller than 56";
    }
    else if (val <= 5) {
        return "Smaller than 5";
      }
   else{
    return "Between 5 and 10";
  }
  }
  
  console.log(testElseIf(5));


//Golf Code

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
if (strokes==1){
  return "Hole-in-one!";
}
else if(strokes<= par-2	){
  return "Eagle";
}
else if(strokes==par - 1){
  return "Birdie";
}
else if(strokes==par){
  return "Par";
}
else if(strokes==par+1){
  return "Bogey";
}
else if(strokes==par + 2){
  return "Double Bogey";
}
else if(strokes>=par + 3){
  return "Go Home!";
}

else{
  return "Change Me";
}
}

console.log(golfScore(5, 4));



//Selecting from Many Options with Switch Statements

function caseInSwitch(val) {
    let answer = "";
    switch(val){
  case 1:
  return "alpha";
  break;
  case 2:
  return "beta";
  break;
  case 3:
  return "gamma";
  break;
  case 4:
  return "delta";
  break;
    return answer;
  }
  }
  
  caseInSwitch(1);


  //Adding a Default Option in Switch Statements

  function switchOfStuff(val) {
    let answer = "";
  switch(val){
    case "a":
    return "apple"
    break;
    case "b":
    return "bird";
    break;
    case "c":
    return "cat";
    break;
    default:
    return "stuff";
    break
  }
  
    return answer;
  }
  
  switchOfStuff(1);