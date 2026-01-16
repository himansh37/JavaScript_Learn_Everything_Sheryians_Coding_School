let count = 0;
let progress = document.querySelector(".progress-fill");
let pro = document.querySelector(".progress-percentage");

let interval = setInterval(() => {
  count++;
  if (count <= 100) {
    progress.style.width = `${count}%`;
    pro.textContent = `${count}%`;
  } else {
    document.querySelector(".progress-label").textContent = "downloaded";
    clearInterval(interval);
  }
}, 50);
