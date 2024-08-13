import JSON from "../rezepte.json" with { type: "json" };
import { getDayName, getDayNumber } from "./dateHandler.js";

let rezepte;
if (JSON.length > 0) {
  rezepte = JSON;
}

const container = document.getElementById("dishoftheday");
container.classList.add(
  "m-auto",
  "max-w-[1440px]",
  "px-3",
  "py-16",
  "flex",
  "flex-col",
  "md:flex-row",
  "md:items-start",
  "gap-x-10",
);
const dayID = getDayNumber();
const rezept = rezepte[dayID];

container.innerHTML = `
    <div class="lg:max-w-screen-sm mb-2 md:flex-1">
        <img class="w-full rounded-2xl" src="${rezept.headerImg}" />
    </div>
    <div class="flex flex-col md:flex-1 gap-y-5">
        <div class="md:max-h-44 lg:max-h-64 xl:max-h-none md:overflow-auto">
            <h3 class="mb-2 text-xl font-bold md:text-2xl lg:mb-8 lg:text-4xl">${getDayName()}: ${rezept.title}</h3>
            <p class="mb-8">${rezept.description}</p>
        </div>
        <a class="block text-center mt-2 w-full bg-kw-green py-2 hover:bg-kw-lightgreen text-white sm:m-0 sm:h-full md:max-w-40 transition-all" href="rezept.html?id=${dayID}">Rezept öffnen</a>
    </div>
`;
