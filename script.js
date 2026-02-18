const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

noBtn.addEventListener("click", () => {
  message.textContent = "Raspuns gresit";
  message.classList.remove("ok");
  message.classList.add("bad");
});

yesBtn.addEventListener("click", () => {
  // "pop up" message
  alert("Scrie-i finului");

  // also show it on the page (nice UX on mobile / if popups blocked)
  message.textContent = "Scrie-i finului";
  message.classList.remove("bad");
  message.classList.add("ok");
});
