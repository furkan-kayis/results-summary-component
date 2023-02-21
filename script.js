import data from "./data.json" assert { type: "json" };

const summaryList = document.querySelector(".summary__list");

data.map((item) => {
  summaryList.innerHTML += `
        <li class="summary__list-item" style="background-color:${item.iconColor}11;">
        <img src="${item.icon}">
        <h2 class="list-item__heading" style="color:${item.iconColor}">
        ${item.category}</h2>
        <span class="list-item__score">${item.score}
        <span class="score__percentage"> / 100</span>
        </span>
        </li>`;
});
