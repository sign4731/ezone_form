import "./sass/style.scss";
import { clickRotate } from "./rotate.js";
import { getPersonalName } from "./personal_name.js";

("use strict");

window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("page is loaded");
  getData();
  createtoggleboxes();
  document.querySelectorAll(".rotate").forEach((button) => button.addEventListener("click", clickRotate));
  //   document.querySelector(".card_welcome").classList.add("hidden");
}

function getData() {
  console.log("Getting data");
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const platforms = getCheckboxValues("platform");
    const types = getCheckboxValues("type");
    const games = getCheckboxValues("game");
    const areas = getCheckboxValues("areas");

    getPersonalName();

    post({
      first_name: form.elements.first_name.value,
      last_name: form.elements.last_name.value,
      email: form.elements.email.value,
      platform: platforms,
      type: types,
      game: games,
      areas: areas,
    });
  });
}

function getCheckboxValues(name) {
  const items = [];
  const itemEls = document.querySelectorAll(`[name=${name}]:checked`);
  itemEls.forEach((el) => items.push(el.value));
  return items;
}

function post(data) {
  console.log("Data is posted");

  const postData = JSON.stringify(data);
  fetch("https://ezone-eb75.restdb.io/rest/information", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "60866ebe28bf9b609975a6df",
      "cache-control": "no-cache",
    },
    body: postData,
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function createtoggleboxes() {
  const checkfields = document.querySelectorAll(".checkfield_label", ".checkfield_label label");
  for (let i = 0; i < checkfields.length; i++) {
    let checkfield = checkfields[i];
    clickToggleCheckbox(checkfield, i);
  }

  function clickToggleCheckbox(checkfield, i) {
    checkfield.addEventListener("click", togglecheckboxes);

    function togglecheckboxes() {
      if (checkfield.parentElement.open) {
        checkfield.childNodes[1].textContent = "▼";
      } else {
        checkfield.childNodes[1].textContent = "▲";
      }
    }
  }
}

//CLOSE DROPDOWN WHEN CLICKING ON NEW DROPDOWN
const details = document.querySelectorAll("details");

// Add the onclick listeners.
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});

document.querySelector("#submit").addEventListener("click", closeAll);

function closeAll() {
  //Close all dropdowns when clicked om "IM IN"
  details.forEach((detail) => {
    detail.removeAttribute("open");
  });
}

//CLICK -> OPEN FORMS
document.querySelector("#signUp").addEventListener("click", openForms);

function openForms() {
  document.querySelector(".cards_wrapper").classList.remove("hidden");
  console.log("opening forms");
}

//CLICK -> CLOSING FORMS
document.querySelector("#goBack").addEventListener("click", closeForms);

function closeForms() {
  document.querySelector(".cards_wrapper").classList.add("hidden");
  console.log("closing forms");
}
