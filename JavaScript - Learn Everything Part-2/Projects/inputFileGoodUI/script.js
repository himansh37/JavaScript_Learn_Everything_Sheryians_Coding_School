let inp = document.querySelector("input");
let maindiv = document.querySelector(".main");
let submitButton = document.createElement("button");
submitButton.textContent = "Submit";
submitButton.classList.add("ui");

maindiv.appendChild(submitButton);

submitButton.addEventListener("click", function (dets) {
  inp.click();
});

inp.addEventListener("change", function (dets) {
  //   console.log(dets.target.files[0].name);
  const file = dets.target.files[0];
  if (file) {
    submitButton.textContent = file.name;
  }
});
