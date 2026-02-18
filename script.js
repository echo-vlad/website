const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

noBtn.addEventListener("click", () => {
  message.textContent = "Raspuns gresit";
  message.classList.remove("ok");
  message.classList.add("bad");
});

yesBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});
