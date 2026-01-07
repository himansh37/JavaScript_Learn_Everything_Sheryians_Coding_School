/*

What is DOM?
DOM stands for Document Object Model.It represents the structure of a document(web page) as a tree of objects(tags), allowing developers to manipulate and interact with the content, structure, and style of web pages dynamically using programming languages like JavaScript.
D = Document (The web page)
O = Object (Tags like <body> or <h1> are converted into "objects" that JS can understand)
M = Model (The tree-like structure used to organize these objects)

------------------------------------------------------------------

-->slecting elements using DOM methods
getElementById
let element = document.getElementById("idName");

getElementsByClassName
let elements = document.getElementsByClassName("className");

getElementsByTagName

//more important ones
querySelector
querySelectorAll




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

//->rremoveEventListener
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

//creating toogle

// let isBlue = false;

// h1.addEventListener("click", () => {
//   isBlue = !isBlue;
//   h1.style.color = isBlue ? "#2bb0c8ff" : "black";
// });

// function makeBlue() {
//   h1.style.color = "#2bb0c8ff";
//   h1.removeEventListener("click", makeBlue);
//   h1.addEventListener("click", makeBlack);
// }

// function makeBlack() {
//   h1.style.color = "black";
//   h1.removeEventListener("click", makeBlack);
//   h1.addEventListener("click", makeBlue);
// }

// h1.addEventListener("click", makeBlue);
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
