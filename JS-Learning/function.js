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