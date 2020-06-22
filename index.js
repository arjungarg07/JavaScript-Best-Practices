// "CLean code reads like well-written prose.
// Clean code never obscures the designer's intent but rather is full 
// of crisp abstractions and straightforward lines of control" - Robert C.Martin

// Magic Numbers

for(let i = 0; i < 86400; i++){
    //..
}

// Better write 
const SECONDS_IN_A_DAY = 86400;

for(let i = 0; i < SECONDS_IN_A_DAY; i++){
    //..
}

// Deep Nesting 

const exampleArrray = [ [ [ 'value'] ] ];

exampleArrray.forEach((array1)=>{
    array1.forEach((array2)=> {
        array2.forEach((el)=>{
            console.log(el);
        })
    })
});

const retrieveFinalValue = (element) => {
    if(Array.isArray(element)) {
        return retrieveFinalValue(element[0])
    }
    return element;
}

retrieveFinalValue(exampleArrray);

// Stop writing comments

// "While comments are neither inherently good or bad,
// they are frequently used as a crutch."
// You should always write your code in the simplest,plainest,
// most self-documenting way you can humanly come up with." - Jeff Atwood"


// Avoid large functions 

const addMultiplySubtract = (a,b,c)=>{
    // addition
    const addition = a + b + c;
    // multiplication
    const multiplication = a * b * c;
    // subtraction
    const subtraction = a -b - c;

    return `${addition} ${multiplication} ${subtraction}`
}

//Better make seperate functions

const add = (a,b,c)=>a + b + c;
const multiply = (a,b,c)=>a * b * c;
const subtract = (a,b,c)=>a - b - c; 

// Code repetition
// Like the example array function  discussed above

const getUserCredentials = (user) => {
    const name = user.name;
    const surname = user.surname;
    const password = user.password;
    const email = user.email;
}

const getUserCredentials = (user) => {
    // Better Destructure 
    const { name, surname, password, email}= user;
}

// VARIABLE NAMING

const camelCase = '';

let thisIsRandomCamelCaseName;
let exampleFunctionName;


// Meaningful names
getUserData;
getUserInfo;

getUserPosts;


//  Favour descriptive over concise

findUser;

findUserByNameOrEmail;
setUserLoggedInTrue;

// use shorter version

getUserFromDatabase;
// Who are you kiddin "FromDatabase" is already understood
getUser;

// Use consistent verbs per concept

// Functions will usually create, read, update or delete something

getQuestions; // get 
returnUsers; // get
retrieveUsers; // get

// Like this

getQuestions;
getUsers;

// Make booleans that read well in if-then statements

let car = {};

sedan,sold,green,airbag//Not good
isSedan, isSold , isGreen , hasAirbag//Better

car.isSedan; car.isSold; car.isGreen; car.hasAirbag;

// Use nouns for classNames

class car = {
    //..
}

// Use PascalCase for classNames.

class Task = {}
class task = {} //NO

// Capitalize constant values 

const SECONDS_IN_A_DAY = 86400;

const HOURS_IN_DAY = 24;
const USER_AGE = 30;

const user = foundUser;
const today = new Date();

// Avoid one-letter variable names

const query = () => {}
const q = () => {}

const d = () =>new Date();//Bad
const newDate = () =>new Date();