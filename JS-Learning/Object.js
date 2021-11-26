//Build JavaScript Objects
const myDog = {
  "name":"Tan", "legs":4, "tails":1, "friends":["ras","sob"]
  };
  console.log(myDog);


  //Accessing Object Properties with Dot Notation
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  const hatValue = testObj.hat; 
  const shirtValue = testObj.shirt; 
  console.log(hatValue);
  console.log(shirtValue);


  //Accessing Object Properties with Bracket Notation
 
const testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };

  const entreeValue = testObj2["an entree"]; 
  const drinkValue = testObj2["the drink"]; 
  console.log(entreeValue);
  console.log(drinkValue);

 //Accessing Object Properties with Variables
const testObj3 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  const playerNumber = 16;  
  const player = testObj3[playerNumber]; 
  console.log(player)

  /* 
const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);

Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:


const someObj = {
  propName: "John"
};

function propPrefix(str) {
  const s = "prop";
  return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]); 

*/


//Updating Object Properties
// Setup
const myDog2 = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog2.name="Happy Coder";  
  console.log(myDog2.name);
  

  //Add New Properties to a JavaScript Object
  const myDog4 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  myDog4.bark="bow-bow"; // dot method
  console.log(myDog4);
  myDog4["Tark"]="Gaw-Gaw";//bracket method
  console.log(myDog4);
  

  //Delete Properties from a JavaScript Object
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  delete myDog.tails;
  console.log(myDog);


  //Using Objects for Lookups

function phoneticLookup(val) {
  var result = "";
  var lookup="";
  var lookup= {
    "alpha": "Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
  };
  var result=lookup[val];
  return result;
}

console.log(phoneticLookup("charlie"));


//Testing Objects for Properties
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)){
      return obj[checkProp];
    }
    else {
    return "Not Found";
    }
  }
  
  console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"))


  //Manipulating Complex Objects
  const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ]
    }
  
  ];

  //Note: You will need to place a comma after every object in the array, unless it is the last object in the array.