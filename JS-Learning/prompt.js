function test(a){
    return function second(b){
       return a+2
    }
}
result = test(1)(2)
console.log(result)