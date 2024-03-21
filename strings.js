// Extract the last four characters from the string below; "extravaganza"



var word = "extravaganza";
var result = word.substr(8,11);
console.log({result});


// Insert the following string at the forth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"


let action = "eat";

const food = `The ${action} quick fox jumped over the lazy dog`;

console.log({food});


// Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"



    const story = "The quick brown fox jumps over the lazy dog";
    
    console.log(
    (story.match(/the/g)).length);
    (story.match(/brown/g).length);


    // Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"

    const string1 = "The pupils are reading in the library";

    let find = string1.indexOf("are");
    console.log({find});

    const string2 = "The child was sitting on the table before if fell";

    let check = string2.indexOf("sitting");
    console.log({check});

    // Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"


    let text = "wonderful";
    let output = text.toUpperCase();
    console.log({output});


let message = "amazing";
let words = "UndERneath";
let final = message.toLowerCase();
console.log({final});
let last = words.toLowerCase();
console.log({last});

let statement = "A wonderful world";
let conclusion = statement.toTitle();
console.log({conclusion});
