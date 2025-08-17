// this is an object
const person = {
    name: "Sneha",
    greet (){
        console.log(`Hello, my name is ${this.name}`);
    },
};


person.greet(); //this will always have context of name

const greetFunction = person.greet;  ///here we are transferring the reference onto another variable , not executing it
//after the above statement the greetFunction has lost the context to name variable
greetFunction();  //this prints "Hello, my name is undefined"

//if we want to grab the context, we have to bind it 
//we can tell the function which context it should use when it is called
const boundGreet = person.greet.bind({name:"John"});
boundGreet();  //prints "Hello, my name is John"

//the context that we want to inject in the greet function with the help of boundGreet() that is what bind does
//we can't use this.name or name inside bind , we have to tell explicitly to what name we want to bind it 
//more discussed in call_apply_bind.md