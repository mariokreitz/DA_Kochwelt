import JSON from "../rezepte.json" with { type: "json" };

let rezepte;
if (JSON.length > 0) {
  rezepte = getRandomElements(JSON, 3);
}

const container = document.querySelector("#somethingnew>div");
container.classList.add(
  "m-auto",
  "max-w-[1440px]",
  "px-3",
  "py-16",
  "text-center",
);

function getRandomElements(arr, count) {
  if (count > arr.length) {
    throw new Error(
      "Die Anzahl der gewünschten Elemente übersteigt die Größe des Arrays.",
    );
  }

  const result = [];
  const tempArr = [...arr];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * tempArr.length);
    const elementWithIndex = {
      index: randomIndex,
      item: tempArr[randomIndex],
    };
    result.push(elementWithIndex);
    tempArr.splice(randomIndex, 1);
  }

  return result;
}

container.innerHTML = `
    <h2 class="mb-2 text-xl font-bold md:text-2xl lg:mb-8 lg:text-4xl">Lust auf was Neues?</h2>
    <div class="md:flex md:justify-between md:gap-4">
${rezepte.map((rezept) => {
  return `<a href="rezept.html?id=${rezept.index}"><img class="mb-2 rounded-2xl w-full md:max-w-80 aspect-square object-cover" src="${rezept.item.headerImg}" /><h3 class="text-lg font-bold">${rezept.item.title}</h3></a>`;
})}
    </div>
`;
