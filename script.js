const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const container = document.getElementById("container");

noBtn.addEventListener("click", () => {
  message.textContent = "Wrong answer 😅 Try again.";
});

yesBtn.addEventListener("click", () => {
  container.innerHTML = "<h1>Vlad loves you ❤️</h1>";
});
