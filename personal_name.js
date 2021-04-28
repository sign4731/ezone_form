const form = document.querySelector("form");

export function getPersonalName() {
  const personalName = form.elements.first_name.value;
  console.log(personalName);
  document.querySelector(".personal").textContent = `${personalName.toUpperCase()}`;
}
