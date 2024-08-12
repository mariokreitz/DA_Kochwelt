import JSON from "../rezepte.json" with { type: "json" };

const container = document.getElementById("rezept");
container.classList.add("m-auto", "max-w-[1440px]", "px-3", "py-8");
const searchParams = new URLSearchParams(window.location.search);
let portions = 1;
let rezept;

const render = () => {
  container.innerHTML = `
            <h2 class="mb-2 text-xl font-bold md:text-2xl lg:mb-8 lg:text-4xl">
                ${rezept.title}
            </h2>
            <img class="mb-4 h-48 w-full rounded-2xl object-cover lg:mb-8 lg:h-64" src="${rezept.headerImg}" alt="${rezept.title}" />
            <div class="mb-8 flex gap-4 flex-col xs:flex-row">
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
            <hr class="bg-kw-grey mb-2" />
            <div class="mb-2 flex flex-col xs:my-4 xs:flex-row xs:items-center xs:gap-4">
                <span class="xs:inline-block">Zutaten für</span>
                <input class="rounded xs:min-w-48" type="number" value="${portions}" min="1" max="99" />
                <button id="portion-button" class="mt-2 w-full bg-kw-green hover:bg-kw-lightgreen py-2 text-white xs:m-0 xs:h-full xs:max-w-32">
                    Portionen
                </button>
            </div>
            <div class="mb-8">
                ${rezept.ingredients
                  .map((item) => {
                    return `<div class="odd:bg-kw-grey rounded px-4 py-2">
                        ${item.amount != null ? portions * item.amount : ""}
                        ${item.measurement ? item.measurement + " " : ""}
                        ${item.ingredient}
                    </div>`;
                  })
                  .join("")}
            </div>
            <h3 class="mb-2 text-lg font-bold lg:mb-4 lg:text-3xl">Zubereitung</h3>
            <div class="mb-8 flex flex-col gap-4 xs:flex-row">
                <div class="bg-kw-grey flex gap-2 rounded-lg px-2 py-1">
                    <img class="w-4" src="../images/icons/clock-regular.svg" />
                    <span>${rezept.preperationtime}</span>
                </div>
                <div class="bg-kw-grey flex gap-2 rounded-lg px-2 py-1">
                    <img class="w-4" src="../images/icons/clock-regular.svg" />
                    <span>Gesamtzeit: ${rezept.totaltime}</span>
                </div>
            </div>
            <p class="mb-8">
                ${rezept.description}
            </p>
            <h4 class="text-md mb-4 font-bold lg:text-xl">Rezept erstellt von</h4>
            <div class="flex items-center">
                <img
                    class="mr-4 w-full max-w-20 rounded-full"
                    src="${rezept.avatar}"
                />
                <span class="text-xl">${rezept.author}</span>
            </div>
        `;

  document
    .getElementById("portion-button")
    .addEventListener("click", calcIncredients);
};

const calcIncredients = () => {
  const inputBox = document.querySelector("input");
  let input = inputBox.value;
  if (input > 0 && input < 100) {
    portions = input;
    render();
  } else {
    inputBox.classList.add("animate-shake", "border-red-600");
    setTimeout(() => {
      inputBox.classList.remove("animate-shake", "border-red-600");
      input = 1;
      render();
    }, 1000);
  }
};

if (!searchParams.has("id")) {
  location.href = "/";
} else {
  const rezeptId = searchParams.get("id");
  if (!JSON[rezeptId]) {
    location.href = "/";
  } else {
    rezept = JSON[rezeptId];
    render();
  }
}
