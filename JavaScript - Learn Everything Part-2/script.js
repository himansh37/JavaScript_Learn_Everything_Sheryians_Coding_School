/*

What is DOM?
DOM stands for Document Object Model.It represents the structure of a document(web page) as a tree of objects(tags), allowing developers to manipulate and interact with the content, structure, and style of web pages dynamically using programming languages like JavaScript.
D = Document (The web page)
O = Object (Tags like <body> or <h1> are converted into "objects" that JS can understand)
M = Model (The tree-like structure used to organize these objects)

------------------------------------------------------------------

-->selecting elements using DOM methods
getElementById
let element = document.getElementById("idName");

getElementsByClassName
let elements = document.getElementsByClassName("className");
//it returns HTMLCollection

getElementsByTagName
let elements = document.getElementsByTagName("tagName");
e.g.:
let h1 = document.getElementsByTagName("h1");

//more important ones
querySelector
let element = document.querySelector("#idName");
first one will be selected

querySelectorAll
let elements = document.querySelectorAll("#idName");
all will be selected
-------------------------------------------------------------------

-->Text/content manipulation using DOM methods
->textContent
e.g.:
let h1 = document.querySelector("h1");
h1.textContent = "hello";

->innerHTML
e.g.:
let h1 = document.querySelector("h1");
h1.innerHTML = "<span>hello</span>";

->innertext
e.g.:
let h1 = document.querySelector("h1");
h1.innerText = "<span>hello</span>";

//write difference between textContent and innerText and innerHTML. textContent is used for text, innerText is used for html, innerHTML is used for html

<div id="myBox">
    Hello 
    <span style="display:none">Hidden Text</span>
    <strong>World</strong>
</div>

let box = document.getElementById("myBox");
// textContent gets EVERYTHING (Even the hidden part)
console.log(box.textContent); //Output: "Hello Hidden Text World"

// innerText gets ONLY VISIBLE text (Ignores hidden part)
console.log(box.innerText);//Output: "Hello World"

// innerHTML gets the source code (Tags included!)
console.log(box.innerHTML); 
// Output: "Hello <span style='display:none'>Hidden Text</span> <strong>World</strong>"


-------------------------------------------------------------------
Attribute manipulation using DOM methods
->setAttribute
e.g.:
let h1 = document.querySelector("h1");
h1.setAttribute("style", "color:red"); 

->getAttribute
e.g.:
let h1 = document.querySelector("h1");
h1.getAttribute("style"); //output: "color:red"

->removeAttribute
e.g.:
let h1 = document.querySelector("h1");
h1.removeAttribute("style"); //output: h1 {style: ""}


-------------------------------------------------------------------

-->creating and inserting elements using DOM methods
->createElement
let element = document.createElement("tagName");
e.g.:
let h1 = document.createElement("h1");

->appendChild
let element = document.createElement("tagName");
let parentElement = document.getElementById("idName");
parentElement.appendChild(element);
e.g.:
let h1 = document.createElement("h1");
let h2 = document.createElement("h2");

h1.appendChild(h2);
document.body.appendChild(h1);

//do i have to append it in body tag? or it will automatically append in body tag by default? no, it will append in body tag by default

->append
let h1=document.createElement("h1");
h1.textContent="hello";
document.body.append(h1); tag will be added after script tag

->prepend
let h1=document.createElement("h1");
h1.textContent="hello";
document.body.prepend(h1); tag will be added before script tag


----------------------------------------------------------------------
-->style update via .style and classList(add,toggle,remove)

->.style
e.g.:
let h1 = document.querySelector("h1");
console.dir(h1);//this will show the style properties of the h1 element
h1.style.color = "red";
h1.style.fontFamily = "gilroy";


->classList
in sytle tag create a .classname and write a property in it and if you want to use it in js then use classList.add("classname").All the properties you have written in classname will be applied to the new elemnt

console.dir(h1); in this you can check for classList and see how many classes are there
h1.classList.add("classname"); //to add a class
h1.classList.remove("classname"); //to remove a class
h1.classList.toggle("classname"); //to toggle a class


-----------------------------------------------------------------------

Event and Event Listeners
an event is an action or occurrence that happens in the web page, such as a user clicking a button, submitting a form, or hovering over an element.

using evenlistener we can make our web page interactive by responding to user actions.

how to use event listener?
*/

//first select the element you want to attach the event to
let h1 = document.querySelector("h1");

/*
//then use addEventListener method to attach an event listener

//->format of event listener
//element.addEventListener("event", functionToBeExecuted);

h1.addEventListener("click", function () {
  //code to be executed when the event occurs
  //console.log("h1 was clicked");

  console.dir(h1); //to see all properties and methods of the h1 element

  h1.style.backgroundColor = "#eee"; //change background color on click
  h1.style.userSelect = "none";
});

--------------------------------------------------------------------

//->removeEventListener
//to remove an event listener, you need to define the function separately
function changeColor() {
  h1.style.color = "blue";
}
h1.addEventListener("mouseover", changeColor); //add event listener

//to remove the event listener
h1.removeEventListener("mouseover", changeColor);

->The Rule for Removal
For removeEventListener to work, three things must match exactly:
The Element (h1)
The Function Reference (changeCol)
The Event Type (Must be "click", not "dblclick")
*/

/*

-->creating toogle

let isBlue = false;

h1.addEventListener("click", () => {
  isBlue = !isBlue;
  h1.style.color = isBlue ? "#2bb0c8ff" : "black";
});

function makeBlue() {
  h1.style.color = "#2bb0c8ff";
  h1.removeEventListener("click", makeBlue);
  h1.addEventListener("click", makeBlack);
}

function makeBlack() {
  h1.style.color = "black";
  h1.removeEventListener("click", makeBlack);
  h1.addEventListener("click", makeBlue);
}

h1.addEventListener("click", makeBlue);
let black = "rgb(238, 238, 238)";
let blue = "rgb(34, 148, 234)";
h1.style.color = black;

h1.addEventListener("click", () => {
  if (h1.style.color === black) {
    h1.style.color = blue; // ✅ assignment
    console.log("this is done");
    console.dir(h1);
  } else if (h1.style.color === blue) {
    h1.style.color = black; // ✅ assignment
    console.log("this is also done");
  }
});


----------------------------------------------------------------------------------------------- 

//types of events in js

->mouse events
e.g.:
    mousemove-> when the mouse moves over an element 
    mousedown-> when the mouse button is pressed down on an element
    mouseup-> when the mouse button is released after being pressed down on an element
->change events
e.g.:
    change-> when the value of an <input> element changes

->scroll events
e.g.:
    scroll-> when the user scrolls the page

->click events
e.g.:
    click-> when the user clicks on an element

->contextmenu events
e.g.:
    contextmenu-> when the user right-clicks on an element

->keyboard events
e.g.:
    keydown-> when a key is pressed down
    keyup-> when a key is released

->input events
e.g.:
    input-> when the value of an <input> element changes

->form events
e.g.:
    submit-> when a form is submitted

->touch events
e.g.:
    touchstart-> when the user starts touching the screen
    touchmove-> when the user moves their finger on the screen
    touchend-> when the user stops touching the screen


    
    let input = document.querySelector("input");
    input.addEventListener("input", (details) => {
      if (details.data !== null) {
        console.log(details.data); //ye user input ke details print honge
        console.dir(input.value); // ye input element ke details print honge
        }
        });
        
        
        let select = document.querySelector("select");
        let h3 = document.querySelector("h3");
        select.addEventListener("change", (details) => {
  h3.textContent = `${details.target.value} selected`;
  //value from select element ke details print honge
});

//project;
//custon input file taker

//mouse tracker
let body = document.querySelector("body");
body.addEventListener("mousemove", (details) => {
  console.log(details.clientX);
  console.log(details.clientY);
});

//key press tracker
let input = document.querySelector("input");
input.addEventListener("keydown", (details) => {
  console.log(details.key);
});

//scroll tracker
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
});

// ----------------------------------------------------------------------------------

// Event Object

let input = document.querySelector("input");
input.addEventListener("input", (details) => {
  console.log(details);
  console.log(details.target);
  console.log(details.target.value);
});

//use of preventDefault() -> to stop the default behaviour
let form = document.querySelector("form");
form.addEventListener("submit", (details) => {
  details.preventDefault();
  //stop from reloading the page
  console.log(details);
  console.log(details.target);
  console.log(details.target.value);
});

//use of type in event object

let input = document.querySelector("input");
input.addEventListener("input", (details) => {
  console.log(details.type); //
  console.log(details.target);
  console.log(details.target.value);
});

---------------------------------------------------------------------------

//event bubbling and event capturing

let parent = document.querySelector(".parent");
let child = document.querySelector(".child");
let grandchild = document.querySelector(".grandchild");
parent.addEventListener("click", () => {
  console.log("parent clicked");
});
child.addEventListener("click", () => {
  console.log("child clicked");
});
grandchild.addEventListener("click", () => {
  console.log("grandchild clicked");
f});

//explaination of event bubbling and event capturing

//event capturing-> start from the top
//event bubbling-> start from the bottom

//event capturing
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");
let grandchild = document.querySelector(".grandchild");
parent.addEventListener("click", () => {
  console.log("parent clicked");
});
child.addEventListener("click", () => {
  console.log("child clicked");
});
grandchild.addEventListener("click", () => {
  console.log("grandchild clicked");
});

*/

//event delegation

let parent = document.querySelector(".parent");
let child = document.querySelector(".child");
let grandchild = document.querySelector(".grandchild");
parent.addEventListener("click", () => {
  console.log("parent clicked");
});
child.addEventListener("click", () => {
  console.log("child clicked");
});
grandchild.addEventListener("click", () => {
  console.log("grandchild clicked");
});

parent.addEventListener("click", (e) => {
  if (e.target.classList.contains("grandchild")) {
    console.log("grandchild clicked");
  }
});

//event delegation is better than event capturing
