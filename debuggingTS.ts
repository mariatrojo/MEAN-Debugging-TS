//1. Original code:

var myString: string;
// I can assign myString like this:copy
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
//ISSUE: myString is declared as type string, but assigned in 
// the line below as a number.
myString = 9;


//Updated code:

var myString: string;
// I can assign myString like this:copy
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
//CHANGES: changed the number 9 into a string 9 using quotes around it.
myString = "9";


////////////////////////////////////////

//2. Original code:

function sayHello(name: string){
	return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 //ISSUE: the parameter in the function 'name:' is declared as 
 // a string type, but the argument in the line below is a number,
 // not a string.
 console.log(sayHello(9));
 
 //Updated code:

 function sayHello(name: string){
	return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 //CHANGES: added quotes around the argument 9 to make it into a string.
 console.log(sayHello("9"));

 ////////////////////////////////////////////

 //3. Original code:

 function fullName(firstName: string, lastName: string, middleName: string){
	let fullName = `${firstName} ${middleName} ${lastName}`;
	return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
// ISSUE: The error is because three parameters are required, but
// only two arguments are passed in
 console.log(fullName("Jimbo", "Jones"));

 //Updated code:

 //CHANGES: added a "?" after "middleName" to make it an 
 // optional parameter
 function fullName(firstName: string, lastName: string, middleName?: string){
	let fullName = `${firstName} ${middleName} ${lastName}`;
	return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 console.log(fullName("Jimbo", "Jones"));
 
 /////////////////////////////////////////////
//4. Original code

 interface Student {
	firstName: string;
	lastName: string;
	belts: number;
 }
 function graduate(ninja: Student){
	return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
	firstName: "Christine",
	lastName: "Yang",
	belts: 2
 }
 const jay = {
	firstName: "Jay",
	lastName: "Patel",
	//ISSUE: the attribute is "belts" 
	// but it's named "belt" without an "s" here
	belt: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 console.log(graduate(jay));

 //Updated code:

 interface Student {
	firstName: string;
	lastName: string;
	belts: number;
 }
 function graduate(ninja: Student){
	return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
	firstName: "Christine",
	lastName: "Yang",
	belts: 2
 }
 const jay = {
	firstName: "Jay",
	lastName: "Patel",
	//CHANGES: changed belt > belts
	belts: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 console.log(graduate(jay));
 
 ////////////////////////////////////////////////////

 //5. Original code
 class Ninja {
	fullName: string;
	constructor(
	   public firstName: string,
	   public lastName: string){
		  this.fullName = `${firstName} ${lastName}`;
	   }
	debug(){
	   console.log("Console.log() is my friend.")
	}
 }
 // This is not making an instance of Ninja, for some reason:
 //ISSUE: making an instance requires a first and last name, which is missing
 // in the arguments for the line below
 const shane = Ninja();
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 // ISSUE: this const has three attributes, 'fullName' is not needed, and in () instead of {}
 const turing = {
	fullName: "Alan Turing",
	firstName: "Alan",
	lastName: "Turing"
 }
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja){
	return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 console.log(study(turing));

//Updated code:

class Ninja {
	fullName: string;
	constructor(
	   public firstName: string,
	   public lastName: string){
		  this.fullName = `${firstName} ${lastName}`;
	   }
	debug(){
	   console.log("Console.log() is my friend.")
	 }
 }
 // This is not making an instance of Ninja, for some reason:
 //CHANGES: added a first and last name
 const shane = new Ninja("Alan", "Turing");
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 //CHANGES: replaced {} with (), removed "fullname" line, the attributes firstName and lastName
//  const turing = new Ninja (
// 	"Alan",
// 	"Turing"
//  )
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja){
	return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 console.log(study(shane));

 ////////////////////////////////////////////////////
 //6. Original code

 var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => {x * x};
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = x,y => x * y;
// Nor is this working:
var math = (x, y) => let sum = x + y;
   let product = x * y;
   let difference = Math.abs(x-y);
   return [sum, product, difference];

// Updated code:

var increment = x => x + 1;
// This works great:
console.log(increment(3));
//ISSUE: the following line needed a return.
var square = x => { return x * x};
// This is not showing me what I want:
console.log(square(4));
// This is not working:
//ISSUE: the following line needed parentheses around (x,y) and a return inside brackets
var multiply = (x, y) => { return x * y };
// Nor is this working:
//ISSUE: all of the variables needed to be inside curly brackets
var math = (x, y) => {
    var sum = x + y
    let product = x * y;
    let difference = Math.abs(x-y);
    return [sum, product, difference];
};

///////////////////////////

// Original code:

class Elephant {
	constructor(public age: number){}
	birthday = () => {
	   this.age++;
	}
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
	console.log(`Babar's age is ${babar.age}.`)
	}, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.

 
 // Updated code:

 class Elephant {
	constructor(public age: number){}
	//ISSUE: arrow is needed since this function is called by another function.
	birthday = () => {
	   this.age++;
	}
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
	console.log(`Babar's age is ${babar.age}.`)
	}, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
 