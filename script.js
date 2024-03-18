let btnsShowModal = document.querySelectorAll(".show-modal");
let btnCloseModal = document.querySelector(".close-modal");
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");

function showModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function removeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener("click", showModal);
  btnCloseModal.addEventListener("click", removeModal);
  overlay.addEventListener("click", removeModal);
}
