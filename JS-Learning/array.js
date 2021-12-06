//Use an Array to Store a Collection of Data

let complexArray = [
    [
      {
        one: 1,
        two: 2
      },
      {
        three: 3,
        four: 4
      }
    ],
    [
      {
        a: "a",
        b: "b"
      },
      {
        c: "c",
        d: "d"
      }
    ]
  ];


  //Access an Array's Contents Using Bracket Notation
  let myArray = ["a", "b", "c", "d"];
myArray[1]="this is change"
console.log(myArray);

//Add Items to an Array with push() and unshift()

function mixedNumbers(arr) {
   arr.push(7, 'VIII', 9);
   arr.unshift('I', 2, 'three');
    return arr;
  }  
  console.log(mixedNumbers(['IV', 5, 'six']));

  //Remove Items from an Array with pop() and shift()
  function popShift(arr) {
    let popped=arr.pop(); // Change this line
    let shifted=arr.shift(); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

  //Remove Items Using splice()
  const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
console.log(arr);


//Add Items Using splice()

function htmlColorNames(arr) {
    arr.splice(0,2,'DarkSalmon','BlanchedAlmond');
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

  //Copy Array Items Using slice()  

  function forecast(arr) {
   let slicedArray=arr.slice(2,4);  //2,4 those are array index
    return slicedArray;
  }
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

  //Copy an Array with the Spread Operator
  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
        newArr.push([...arr]);
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 3));

  //Combine Arrays with the Spread Operator
  function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence=['learning',...fragment,'is', 'fun']; 
    return sentence;
  }
  console.log(spreadOut());

  //heck For The Presence of an Element With indexOf()
  function quickCheck(arr, elem) {
     if (arr.indexOf(elem)>=0){
       return true;
       }
       return false;
     }
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

  //terate Through All an Array's Items Using For Loops

  function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
     for(let i = 0; i < arr.length; i++){     
         if(arr[i].indexOf(elem) == -1){
           newArr.push(arr[i]);
       }
       
     }
    return newArr;
  }
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


//Create complex multi-dimensional arrays


  let myNestedArray = [
    // Only change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    [['concat', false, true, 'spread', 'array','deep']],
    [[['mutate', 1327.98, 'splice', 'slice', 'push','deeper']]],
    [[[['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth','deepest']]]]
    // Only change code above this line
  ];

  //Add Key-Value Pairs to JavaScript Objects

  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  const s='strawberries'
  foods.bananas=13;
  foods['grapes']=35;
  foods[s]=27;
  console.log(foods);


  //Modify an Object Nested Within an Object
  let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
    userActivity.data.online=45;  
  console.log(userActivity);


  //Access Property Names with Bracket Notation
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
  return scannedItem=foods[scannedItem];
  }
  
  console.log(checkInventory("apples"));

  //Use the delete Keyword to Remove Object Properties

  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries;  
  console.log(foods);

  //Check if an Object has a Property

  let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
    if(userObj.hasOwnProperty('Alan')&&
     userObj.hasOwnProperty('Jeff')&&
     userObj.hasOwnProperty('Sarah')&&
     userObj.hasOwnProperty('Ryan')){
       return true;
     }
     return false;
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));

  //Iterate Through the Keys of an Object with a for...in Statement
  function countOnline(usersObj) {
    let count=0;
    for (let user in usersObj){
       if(usersObj[user].online === true){
         count=count+1;
       }
    }
    return count;
  }

  //Generate an Array of All Object Keys with Object.keys()
  let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
     return Object.keys(obj);
  }
  
  console.log(getArrayOfUsers(users));


  //Modify an Array Stored in an Object
  let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // Only change code below this line
    userObj.data.friends.push(friend);
    return userObj.data.friends;
    // Only change code above this line
  }
  
  console.log(addFriend(user, 'Pete'));