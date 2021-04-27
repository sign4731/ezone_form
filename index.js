import "./sass/style.scss";

("use strict");

window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("page is loaded");
  getData();
  createtoggleboxes();
}

function getData() {
  console.log("Getting data");

  const form = document.querySelector("form");

  const platforms = [];
  const platformEls = document.querySelectorAll("[name=platform]:checked");
  platformEls.forEach((el) => platforms.push(el.value));

  const types = [];
  const typeEls = document.querySelectorAll("[name=type]:checked");
  typeEls.forEach((el) => types.push(el.value));

  const games = [];
  const gameEls = document.querySelectorAll("[name=game]:checked");
  gameEls.forEach((el) => games.push(el.value));

  const areas = [];
  const areaEls = document.querySelectorAll("[name=areas]:checked");
  areaEls.forEach((el) => areas.push(el.value));

  console.log(platforms, types, games, areas);

  document.querySelector("#submit").addEventListener("click", function () {
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
