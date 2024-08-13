// Card overview
import JSON from "../rezepte.json" with { type: "json" };
let rezepte;
if (JSON.length >= 1) {
  rezepte = JSON;
}
const container = document.getElementById("container");
container.classList.add("p-6", "md:p-12");

const rezepteContainer = document.getElementById("rezepte");
rezepteContainer.classList.add(
  "grid",
  "grid-cols-1",
  "gap-6",
  "md:grid-cols-2",
  "lg:grid-cols-3",
);

const createRezeptCard = (rezept, id) => {
  rezepteContainer.innerHTML += `
    <div class="rounded-lg bg-kw-grey shadow-md">
                  <div class="p-4">
                  <img
                    src="${rezept.headerImg}"
                    alt="${rezept.title}"
                    class="mb-4 h-32 w-full rounded-md object-cover"
                  />
                  <h3 class="mb-2 text-lg font-semibold text-kw-menu">
                    ${rezept.title}
                  </h3>
                <div class="flex flex-col">
               ${rezept.tags
      .map((tag) => {
        return `
                    <div class="bg-kw-grey flex gap-2 rounded-lg px-2 py-1">
                        <img class="w-4" src="${tag.icon}" alt="${tag.text}"  />
                        <span>${tag.text}</span>
                    </div>`;
      })
      .join("")}
                </div>
 
                  
                </div>
                <a href="rezept.html?id=${id}" class="bg-kw-green w-full text-white text-center block rounded-b py-1 hover:bg-kw-lightgreen transition-all"
                    >Mehr erfahren</a
                  >
                </div>
    `;
};

const getRezeptId = () => {
  for (let rezeptId = 0; rezeptId < JSON.length; rezeptId++) {
    createRezeptCard(rezepte[rezeptId], rezeptId);
  }
};
getRezeptId();
