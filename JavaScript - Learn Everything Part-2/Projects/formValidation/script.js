let formVali = document.querySelector("form");
let submitButton = document.querySelector("button");
let erroruser = document.querySelector("#usererror");
let errorpass = document.querySelector("#passerror");
let erroremail = document.querySelector("#emailerror");
let profileName = document.querySelector("#username");
let emailName = document.querySelector("#email");
let passw = document.querySelector("#password");

submitButton.addEventListener("click", function (dets) {
  dets.preventDefault();
  let testusername = /^[a-zA-Z0-9]{3,16}$/;
  let testemail = /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/;
  let testpass = /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/;

  console.log(profileName.value);
  let isuserCorrect = testusername.test(profileName.value);
  let isemail = testemail.test(emailName.value);
  let ispass = testpass.test(passw.value);
  if (!isuserCorrect) {
    erroruser.textContent = "username is incorrect";
  }
  if (!isemail) {
    erroremail.textContent = "email is incorrect";
  }
  if (!ispass) {
    errorpass.textContent = "pass is incorrect";
  }
});
