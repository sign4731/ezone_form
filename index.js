import "./sass/style.scss";
import { clickRotate } from "./rotate.js";
const rotateButton = document.querySelector(".rotate_one");

("use strict");

window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("page is loaded");
  getData();
  createtoggleboxes();
  rotateButton.addEventListener("click", clickRotate);
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
  const checkfields = document.querySelectorAll(".checkfield_label");
  for (let i = 0; i < checkfields.length; i++) {
    let checkfield = checkfields[i];
    clickToggleCheckbox(checkfield, i);
  }

  function clickToggleCheckbox(checkfield, i) {
    checkfield.addEventListener("click", togglecheckboxes);

    function togglecheckboxes() {
      console.log("virker");
      let element = document.querySelector(".dropdown" + i);
      if (element.style.display === "none") {
        document.querySelector(".span" + i).textContent = "▲";
        element.style.display = "block";
      } else {
        element.style.display = "none";
        document.querySelector(".span" + i).textContent = "▼";
      }
    }
  }
}
