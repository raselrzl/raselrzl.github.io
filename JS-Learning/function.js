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
