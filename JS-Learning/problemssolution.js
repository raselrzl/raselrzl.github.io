//Sum All Numbers in a Range
function sumAll(arr) {
    let fullArr = [];
    let sum = 0;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    arr.sort(function(a, b) {
        return a - b
    });
    for (let i = arr[0]; i <= arr[1]; i++) {
        fullArr.push(i);
    }
    sum = fullArr.reduce(reducer);
    return sum;
}
console.log(sumAll([1, 4]));

//Diff Two Arrays keep match
function diffArray(arr1, arr2) {
    const newArr = [...arr1,...arr2];
    return newArr.filter(item => !arr1.includes(item) || !arr2.includes(item));
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));


  //remove match

  function diffArray(arr1, arr2) {
    const newArr = [...arr1,...arr2];
    let unique= [...new Set(newArr)];
    return unique;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));


  //Seek and Destroy

  function destroyer(arr,...arr1) {
    const newArr = [...arr,...arr1];
      return newArr.filter(item => !arr.includes(item) || !arr1.includes(item));
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


  /////////Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
 
  // Only change code below this line
 var srcKeys = Object.keys(source);

  return collection.filter(function(obj) {
    return srcKeys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

  // Only change code above this line

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
/////////////////Spinal Tap Case
function spinalCase(str) {

    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
  }
  
  console.log(spinalCase('This Is Spinal Tap'));


  /////////////////////////////////////////////Pig Latin is a way of altering English Words. The rules are as follows:
  //- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
 //- If a word begins with a vowel, just add way at the end

 function translatePigLatin(str) {
    return str
      .replace(/^[aeiou]\w*/, "$&way")
      .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
  }
  
  // test here
  translatePigLatin("consonant");
///////////////////

function myReplace(str, before, after){
    if (/^[A-Z]/.test(before)) {
      after = after[0].toUpperCase() + after.substring(1)
    } else {
      after = after[0].toLowerCase() + after.substring(1)
    }
      return str.replace(before, after);
  }
  
  console.log(myReplace("A quick brown fox Lumped over the lazy dog", "Lumped","Leaped"));



  //DNA Pairing
  function pairElement(str) {
    let pairs = {
     A: "T",
     T: "A",
     C: "G",
     G: "C"
   };
   let arr = str.split("");
   console.log(arr)
   return arr.map(x => [x, pairs[x]]);
 
 }
 
 console.log(pairElement("GCG"));


 ////////////Missing letters
 function fearNotLetter(str) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var len = str.length;
    var start = alphabet.indexOf(str[0]);
    
    for(var i = start; i < start + len; i++){
      if(!str.includes(alphabet[i])){
        return alphabet[i];
      }
    }
    return undefined;
  }
  console.log(fearNotLetter("abce"))


  ////Sorted Union
  function uniteUnique(...arr) { 
    let arr=arr.flat()
    let unic=[...new Set(arr)]
    return unic
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

  //Convert HTML Entities
  function convertHTML(str) {
    let entities = { '&': '&amp;', '<':'&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'}
   return str.replace(/[&<>"']/g, 
   function(match){
      return entities[match]
    } )
  }
  
  convertHTML("Dolce & Gabbana");


  ///Sum All Odd Fibonacci Numbers
  function sumFibs(num) {
    let recentNumber=0;
    let previousNumber=1;
    let result=1;
    let sum=recentNumber+previousNumber;
    while(sum<=num){
      if ((sum % 2 !== 0) && (sum <= num)) {
        result += sum;
    }
     recentNumber=previousNumber;
      previousNumber=sum;
      sum=recentNumber+previousNumber;
    }
    return result;
  }
  
  console.log(sumFibs(40));

  /////////////////////Sum All Primes
  function sumPrimes(num) {
    let primes = [];
    for (let i = 2; i <= num; i++) {
  
      for(let j=1;j<=i;j++){}
      if (primes.every((prime) => i % prime !== 0))
        primes.push(i);
        
    }
    console.log(primes)
    return primes.reduce((sum, prime) => sum + prime, 0);
  }
  console.log(sumPrimes(10))

  //////////////////////////Smallest Common Multiple
  function smallestCommons(arr) {

    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let mltple = max;
  
    for(let i = max; i >= min; i--){
      if(mltple % i !== 0){
        mltple += max; 
        i = max;
      } 
    }
  
    return mltple;  
  }
  
  smallestCommons([1,5]);


  ////Drop it
  function dropElements(arr, func) {
    while (func(arr[0]) === false) {
      arr.shift();
    }
    
    return arr;
  }
  
  console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));

  ////Flatten a nested array. You must account for varying levels of nesting.
  function steamrollArray(arr) {
    return arr.reduce(function(a, b) {
          return a.concat(Array.isArray(b) ? steamrollArray(b) : b );
      }, []);
    }
    
    steamrollArray([1, [2], [3, [[4]]]]);




    /////////////////flatten array
    function steamrollArray(arr) {
        const flattened = arr.flat(Infinity);        
        return flattened
        }
        
        steamrollArray([1, [2], [3, [[4]]]]);


        ///Return an English translated sentence of the passed binary string.
        function binaryAgent(str) {
            return str.split(' ')
              .map( i => String.fromCharCode(parseInt(i,2)))
              .join("");
          }
          
          console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

          ///Everything Be True
          function truthCheck(collection, pre) {
            return collection.every(obj => obj[pre]);
           }
           
           truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


           ////Arguments Optional
           function addTogether() {
            const [a, b] = arguments;
           
             if (typeof a !== 'number' || (b && typeof b !== 'number')) {
               return undefined;
             }
           
             if (b) {
               return a + b;
             }
           
             return c => addTogether(a, c);
                 
           }
           
           addTogether(2,3);

           //make a person

           var Person = function(firstAndLast) {
            var fullName = firstAndLast;
          
            this.getFirstName = function() {
              return fullName.split(" ")[0];
            };
          
            this.getLastName = function() {
              return fullName.split(" ")[1];
            };
          
            this.getFullName = function() {
              return fullName;
            };
          
            this.setFirstName = function(name) {
              fullName = name + " " + fullName.split(" ")[1];
            };
          
            this.setLastName = function(name) {
              fullName = fullName.split(" ")[0] + " " + name;
            };
          
            this.setFullName = function(name) {
              fullName = name;
            };
          };
          
          var bob = new Person("Bob Ross");
          console.log(bob.getFullName());


          ///Map the Debris
          function orbitalPeriod(a) {
            return a.map(p => {
              return {
                name: p.name,
                orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow((p.avgAlt + 6367.4447), 3) / 398600.4418 ))
              }
            })
          }
          
          orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);



          ///////Roman Numeral Converter
          function convertToRoman(num) {
            let romanNumerals = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
            let roman = '';
            for (let i in romanNumerals ) {
              while ( num >= romanNumerals[i] ) {
                roman += i;
                num -= romanNumerals[i];
              }
            }
            return roman;
          }
          
          console.log(convertToRoman(3999));