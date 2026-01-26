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
js sabse phle jaise hi aapka function dekhta hai sabse pahle js banaata hai execution context,ye ek process hai jo ki do diffrent phases mein chalta hai,memory phase and execution phase.
ye ek abstract concept hai jo ki js ke andar hota hai.function dekhte hi js apne ander 2 phase banati hai ek memory phase and ek execution phase. aur ye dono phase execution context ke andar hi chalte hai.

1.memory phase -> js sabse phle function ke andar jo bhi variables and functions hai unko memory mein store kar leta hai,functions ko pura store kar leta hai but variables ko undefined ke sath store kar leta hai.

2.execution phase -> js ab function ke andar jo bhi code hai usko line by line execute karna start kar deta hai,ab jaise hi koi variable ka value assign hota hai to wo apne actual value se replace ho jata hai.

-------------------------------------------------------------------

-->Lexical Scoping
Zyadatar modern languages (JS, Python, C++) ise use karti hain. Iska matlab hai ki variable wahan dhoonda jayega jahan function likha (define) gaya hai, na ki jahan se wo call ho raha hai.

Logic: "Main apne mummy-papa (parent scope) ke ghar dhoondunga."

Kab fix hota hai: Code likhte waqt hi decide ho jata hai.

-->Dynamic Scoping (The Caller Rule)
Ye thoda purani ya specific languages (jaise Bash, purani Lisp) mein hota hai. Ismein variable wahan dhoonda jata hai jahan se function ko call kiya gaya hai.

Logic: "Jisne mujhe bulaya, main uske ghar dhoondunga."

Kab fix hota hai: Code run hote waqt (Runtime).

example:

let x = 10; // Global value
function grandchild() {
    console.log(x); 
    // Lexical: x = 10 dhoondega (kyunki grandchild Global mein likha hai)
    // Dynamic: x = 20 dhoondega (kyunki parent ne ise call kiya hai)
}

function parent() {
    let x = 20; // Local value inside parent
    grandchild();
}

parent(); 

// Result in JS (Lexical): 10
// Result if it were Dynamic: 20

-------------------------------------------------------------------

-->closure 
closure hota hai function jo ki kissi parent fnc ke andar ho aur andar wala function return ho raha ho and returning fnc use kare, parent fnc ke variable ko, to ise closure kehte hai.

function abcd(){
let a =12;
return function defg(){
    console.log(a); 
};
}
line 74 se 79 tak ko hi closure kahte hai.

let closureFnc = abcd(); // abcd call hua aur defg return hua
closureFnc(); // 12
// question-> jab abcd fnc ka execution complete ho chuka hai to fir bhi closureFnc() ke andar a ki value kaise mil rahi hai?
//ye sach hai fnc ke khatam hone pe aapke fnc and uske variable khtm ho jaate hai par jab bhi closure banta hai to aapka fnc aur uske varibles ka ek backlink banaya jaata hai aur uska naam hota hai [[environment]].

//exercise - countForMe

function countForMe(){
    let count = 0;  
    return function(){
        count++;
        return count;
    }
}
let counter = countForMe();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

let counter2 = countForMe();
console.log(counter2()); // 1
console.log(counter2()); // 2

//har baar naye countForMe call karoge to ek naya closure banega jisme alag count variable hoga.

//advantage of closure
variable ko private kar sakte ho
global pollution nhi hota
 
->encapsulation
inner logic hide kar dena aur sirf un chizo ki access dena jinki aapko jarurat hai. ye bhi closure ke sath hota hai

function  clickLimiter(){
let click =0
return function(){
if(click<5){
click++;
console.log("button clicked",click);
}else{
    console.error("click limit reached");

}
}
}   
let clicker = clickLimiter();
clicker();//button clicked 1
clicker();//button clicked 2        
clicker();//button clicked 3
clicker();//button clicked 4
clicker();//button clicked 5
clicker(); //click limit reached

if we try to change click variable from outside it will create a new global variable click and original click variable will remain unchanged.














*/
