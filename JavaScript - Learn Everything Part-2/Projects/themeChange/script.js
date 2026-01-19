const themeBtn = document.getElementById("theme-btn");
const bodyElement = document.body;

// 1. Check for saved theme in localStorage on page load
const savedTheme = localStorage.getItem("theme");

// 2. If a theme was saved, apply it immediately
if (savedTheme === "dark") {
  bodyElement.classList.add("dark-theme");
}

themeBtn.addEventListener("click", function () {
  if (bodyElement.classList.contains("dark-theme")) {
    bodyElement.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  } else {
    bodyElement.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  }

  // Log to verify it's working
  console.log("Current theme saved:", localStorage.getItem("theme"));
});

// Your logic goes here:
// 1. Add an event listener to themeBtn
// 2. Toggle the 'dark-theme' class on bodyElement
// 3. (Optional) Save preference to localStorage
