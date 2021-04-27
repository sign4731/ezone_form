import "./sass/style.scss";

("use strict");

window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("page is loaded");
  getData();
}

function getData() {
  const platforms = [];
  const platformEls = document.querySelectorAll("[name=platform]:checked");
  platformEls.forEach((el) => platforms.push(el.value));

  const types = [];
  const typeEls = document.querySelectorAll("[name=type]:checked");
  typeEls.forEach((el) => types.push(el.value));

  const games = [];
  const gameEls = document.querySelectorAll("[name=game]:checked");
  gameEls.forEach((el) => games.push(el.value));

  //   document.querySelector("#submit").addEventListener("click", post);
}

function post(data) {
  console.log("Data is posted");
  //   const data = {
  //     first_name: "Paul",
  //     last_name: "Poulsen",
  //     age: 7,
  //     platform: ["XBOX", "Playstation 4", "Playstation 5", "PC", "MAC"],
  //     type: ["MMORPG", "Sports", "Racing"],
  //     game: ["Tekken", "FIFA", "Super Mario", "Fortnite"],
  //     areas: ["Hand/eye coordination", "Reaction time"],
  //   };

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
    .then((data) => showInformation(data));
}
