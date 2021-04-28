const card = document.querySelector(".card");

export function clickRotate() {
  console.log("card rotates");
  if (card.classList.contains("rotated_once")) {
    card.classList.add("rotated_twice");
    document.querySelector(".card_welcome").classList.add("hidden");
  } else {
    card.classList.add("rotated_once");
  }
}
