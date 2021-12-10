//Reverse a String
function reverseString(str) {
    str=[...str].reverse().join("");
    return str;
  }
  
  reverseString("hello");


  //Factorialize a Number
  function factorialize(num) {
    let ans=1;
    if(num<=0){
      console.log(ans);
      return ans;
    }else{
      for(let i=1;i<=num;i++){
         ans=ans*i;
      }
    }
    console.log(ans);
    return ans;
    
  }
  
  factorialize(10);



  //Find the Longest Word in a String

  function findLongestWordLength(str) {
    let arr = str.split(' ');
    console.log(arr);
    
    let longestWord = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i].length > longestWord){
           longestWord = arr[i].length;
       }
    } 
    console.log(longestWord)
    return longestWord;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");


  //largestNumber
  function largestOfFour(arr) {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
      let largestNumber = arr[i][0];
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
      results[i] = largestNumber;
    }
  
    return results;
  }


  //Confirm the Ending
  function confirmEnding(str, target) {
    return str.substr(-target.length) === target;
  }
  
  confirmEnding("Bastian", "n");

  //Repeat a String Repeat a String
  function repeatStringNumTimes(str, num) {
    if(num<=0){
      let repeat='';
      return repeat;
    }
    else if(num===1){
      return str;
    }
    
    else{
      let repeat='';
      while(num>0){
        repeat=repeat+str;
        num--;
        
      }
      return repeat;
    } 
  }
  
  console.log(repeatStringNumTimes("abc", 3));



  //Truncate a String
  function truncateString(str, num) {
    if (str.length > num) {
      return str.substr(0, num) + "...";
    } else {
      return str;
    }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);

  //Finders Keepers
  function findElement(arr, func) {
    let n = 0;
    for(let i=0;i<arr.length;i++){
      n=arr[i];
      if(func(n)){
        return n;
      }
    }
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);

  //boo Whoo

  //heck if a value is classified as a boolean primitive. Return true or false.
  function booWho(bool) {
    return typeof bool === "boolean";
  }
  
  booWho(null);

  //Title Case a Sentence Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

  function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
  }
  
  console.log(titleCase("I'm a little tea pot"));


  //Slice and SplicePassed

//array.splice(index, number of elements, element, element);

  function frankenSplice(arr1, arr2, n) {
    let arr = arr2.slice();
    arr.splice(n, 0, ...arr1);
     return arr;
   }
   
   frankenSplice([1, 2, 3], [4, 5, 6], 1);


   //Falsy Bouncer
   function bouncer(arr) {
    let returenedValue=[];
    for(let i=0;i<arr.length;i++){
      if(arr[i]){
           returenedValue.push(arr[i]);
      }
    }
  
    return returenedValue;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));


  //Where do I Belong
  function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num){      
        return i;
       }
    }
  
    return arr.length;
  }
  
  getIndexToIns([40, 60], 50);

  //another way Where do I Belong
  function getIndexToIns(arr, num) {
    let arr2=arr.sort((a, b) => a - b);
    arr2.push(num);
    arr2=arr.sort((a, b) => a - b);
    let index=arr2.indexOf(num);
    return index;
  }
  
  console.log(getIndexToIns([40, 60], 50));

  //Mutations
  function mutation(arr) {
    let arr2=arr;
    let c=arr2[0].toLowerCase();
    let d=arr2[1].toLowerCase();
  
    for (let i = 0; i < d.length; i++) {
      if (c.indexOf(d[i]) < 0) return false;
    }
    return true;
  }
  
  console.log(mutation(["hello", "hey"]));


//Chunky Monkey
  function chunkArrayInGroups(arr, size) {
 let newArr = [];
  for (let i = 0; i < arr.length; i=i+size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
