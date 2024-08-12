import JSON from "../versus.json" with { type: "json" };

const container = document.getElementById("versus");
container.classList.add(
  "m-auto",
  "max-w-[1440px]",
  "px-3",
  "py-16",
  "text-center",
);

const random = JSON[Math.floor(Math.random() * JSON.length)];

container.innerHTML = `
    <h2 class="mb-2 text-xl font-bold md:text-2xl lg:mb-8 lg:text-4xl">${random.title}</h2>
    <div class="flex flex-col-reverse gap-8 items-center md:flex-row md:items-start">
    <p class="text-left text-lg">${random.text}</p>
    <img class="aspect-square rounded-xl max-w-xs w-full" src="${random.image}" />
    </div>
`;
