//test method

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);

//ignore case

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; 
let result = fccRegex.test(myString);


//use match method

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex); 

//Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig; 
let result = twinkleStar.match(starRegex); 
console.log(result)

//Match Anything with Wildcard Period
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);

//dot method
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
let result = unRegex.test(exampleStr);
console.log(result)

//Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let result = quoteSample.match(vowelRegex);
console.log(result)


//
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;
let result = quoteSample.match(alphabetRegex);
console.log(result);
console.log(result.length)

//Match Numbers and Letters of the Alphabet
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; 
let result = quoteSample.match(myRegex);

console.log(result)

//Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig; 
let result =quoteSample.match(myRegex);
console.log(result)

//You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.

let difficultSpelling = "Mississippi";
let myRegex = /s+/ig; 
let result = difficultSpelling.match(myRegex);


//Match Characters that Occur Zero or More Times
// Only change code below this line
let chewieQuote="Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/g; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
console.log(result)

//Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.
let text = "<h1>Winter is coming</h1>";
let myRegex = /<[a-z]1*?>/; // Change this line
let result = text.match(myRegex);
console.log(result)

//Match Beginning String Patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);


//Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);


/*The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_). */
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);


let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;  //Small w
let result = quoteSample.match(alphabetRegexV2).length;

//Match Everything But Letters and Numbers
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; //Capital W
let result = quoteSample.match(nonAlphabetRegex).length;
console.log(result);

//Match All Numbers

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // small d
let result = movieName.match(numRegex).length;
console.log(result)


//Match All Non-Numbers
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
console.log(result)


/*Usernames can only use alpha-numeric characters.

The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

Username letters can be lowercase and uppercase.

Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

 */

let username = "JackOfAllTrades";
let userCheck = /(^[a-z][a-z]+)(\d*)$|(^[a-z])(\d\d+)$/i; // Change this line
let result = userCheck.test(username);



//Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/g; 
let result = ohRegex.test(ohStr);

//Specify Exact Number of Matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/g; // Change this line
let result = timRegex.test(timStr);


//Check for All or None
let favWord = "favorite";
let favRegex = /favou?rite/; //? is optional
let result = favRegex.test(favWord);

//Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);

//Check For Mixed Grouping of Characters
let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin).*Roosevelt/;
let result = myRegex.test(myString);


//Reuse Patterns Using Capture Groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/g; // Change this line
let result = reRegex.test(repeatNum);

//Use Capture Groups to Search and Replace
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
let replaceText = "$3 $2 $1"; 
let result = str.replace(fixRegex, replaceText);

//Remove Whitespace from Start and End

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line