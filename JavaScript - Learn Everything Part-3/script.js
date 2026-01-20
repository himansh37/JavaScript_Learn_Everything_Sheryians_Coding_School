/*
-->variable scope
//global scope
var x = 10; //global variable
function myFunction() {
    console.log(x); // Accessible here
}
myFunction();

//block scope
if (true) { 
    var c = 3; 
    }
console.log(c); // ReferenceError: c is not defined
because var variable is block scoped
while loop, if else are in block space 

//functional scope
function myFunction() {
    var y = 5; //local variable
    console.log(y); // Accessible here
}
myFunction();
---------------------------------------------------------------------------

-->execution context
js sabse phle jaise hi aapka function dekhta hai sabse pahle js banaata hai execution context,ye ek process hai jo ki do diffrent phases mein chalta hai,memory phase nad execution phase.
function myFunction() {
    var y = 5; //local variable
    console.log(y); // Accessible here
}
myFunction();




























->extra info
//lexical scope
function abcd(){
let a =12;
function defg(){
    let b = 23;
    function xyz(){
        let c =34;
}}}
lexical scope of a is abcd, defg, xyz
lexical scope of b is defg, xyz
lexical scope of c is xyz




*/
