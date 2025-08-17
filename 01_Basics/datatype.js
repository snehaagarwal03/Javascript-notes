/* Most common type of datatypes

String - plain text
Boolean - yes or no
Number - 3,4,3.5
Bigint - for scientific calculations

Undefined - i have no definition for you , there might be some value , i know you exist and in future you might be defined

Null - empty (always doesn't mean zero) just assume with temperature like when i send a temperature as 0 then it is a valid temperature but when i send nothing its just empty that's null

Object - arrays, objects,dictionaries,etc

Symbol - make anything unique, identified by something unique value
*/

// Ways how you define a variable, variable is like a placeholder and in JavaScript we don't need to predefine what kind of value this variable will be holding

// this is the old way
var marks = 102
// this is the new way
let score = 102

let name = "chaicode.com"
let isLoggedin = false

// object
// way to define them
let teaTypes = ["lemon tea", "orange tea", "oolong tea"]
let user = { firstname: "sneha", lastname: "agarwal"}

// borrow values from another variable
let getScore = score

// now if we run this file notice that nothing will happen because right now data is just stored in the memory , we have to give printing instruction

console.log(getScore)

