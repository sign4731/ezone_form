import "./sass/style.scss";

// ("use strict");

// function get() {
//   fetch("https://ezone-eb75.restdb.io/rest/information", {
//     method: "get",
//     headers: {
//       "Content-Type": "application/json; charset=utf-8",
//       "x-apikey": "60866ebe28bf9b609975a6df",
//       "cache-control": "no-cache",
//     },
//   })
//     .then((e) => e.json())
//     .then((data) => data.forEach(showInformation));
// }

// function post() {
//   const data = {
//     first_name: "Paul",
//     last_name: "Poulsen",
//     age: 7,
//     platform: ["XBOX", "Playstation 4", "Playstation 5", "PC", "MAC"],
//     type: ["MMORPG", "Sports", "Racing"],
//     game: ["Tekken", "FIFA", "Super Mario", "Fortnite"],
//     areas: ["Hand/eye coordination", "Reaction time"],
//   };

//   const postData = JSON.stringify(data);
//   fetch("https://ezone-eb75.restdb.io/rest/information", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json; charset=utf-8",
//       "x-apikey": "60866ebe28bf9b609975a6df",
//       "cache-control": "no-cache",
//     },
//     body: postData,
//   })
//     .then((res) => res.json())
//     .then((data) => showInformation(data));
// }

// function deleteGame(id) {
//   fetch("https://ezone-eb75.restdb.io/rest/information" + id, {
//     method: "delete",
//     headers: {
//       "Content-Type": "application/json; charset=utf-8",
//       "x-apikey": "60866ebe28bf9b609975a6df",
//       "cache-control": "no-cache",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// function showInformation(information) {
//   console.log(information);
//   const template = document.querySelector("template").content;
//   const copy = template.cloneNode(true);
//   copy.querySelector(".first_name span").textContent = information.first_name;
//   copy.querySelector(".last_name span").textContent = information.last_name;
//   copy.querySelector(".age span").textContent = information.age;
//   copy.querySelector(".platform span").textContent = information.platform;
//   copy.querySelector(".type span").textContent = information.type;
//   copy.querySelector(".game span").textContent = information.game;
//   copy.querySelector(".areas span").textContent = information.areas;

//   document.querySelector("main").appendChild(copy);
// }
// get();

// document.querySelector(".addGame").addEventListener("click", post);
