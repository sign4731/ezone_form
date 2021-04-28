const card = document.querySelector(".card");
const form = document.querySelector("form");

export function clickRotate() {
  console.log("card rotates");
  if (card.classList.contains("rotated_once") & form.checkValidity()) {
    card.classList.add("rotated_twice");
    document.querySelector(".card_welcome").classList.add("hidden");
  } else {
    card.classList.add("rotated_once");
  }
}
