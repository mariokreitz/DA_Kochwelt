import { getDayNumber } from "./dateHandler.js";
const dayID = getDayNumber();

// Header HTML Template
const header = document.getElementById("header");
header.classList.add("shadow-md", "relative");
header.innerHTML = `
      <div
        class="relative mx-auto flex items-center h-20 max-w-[1440px] lg:items-end justify-between p-4 lg:h-24 lg:pb-3 z-40 bg-white"
      >
        <a href="./index.html" class="flex h-full"
          ><img
            class="lg:hidden"
            src="./images/logo_small.png"
            alt="Kochwelt logo" />
          <img
            class="hidden lg:block"
            src="./images/logo.png"
            alt="Kochwelt logo"
        /></a>

         <button
          type="menu"
          id="menu-btn"
          class="shadow-inner-md z-50 block rounded p-2 focus:outline-none lg:hidden"
        >
          <!-- Hamburger Icon -->
          <div class="hamburger w-6 h-4 z-50 relative">
            <span class="block h-0.5 w-6 bg-black absolute"></span>
            <span class="block h-0.5 w-6 bg-black absolute"></span>
            <span class="block h-0.5 w-6 bg-black absolute"></span>
          </div>
        </button>
        <nav
          id="menu"
          class="hidden font-semibold lg:relative lg:flex items-end text-xl"
        >
          <a
            href="../index.html"
            class="shadow-inner-md mr-4 rounded-3xl px-4 py-2 blur-none hover:text-gray-500 active:shadow-md lg:px-2 lg:py-0 lg:shadow-none lg:active:shadow-none"
            >Start</a
          >
          <a
            href="../rezept.html?id=${dayID}"
            class="shadow-inner-md mr-4 rounded-3xl px-4 py-2 text-kw-green hover:text-kw-lightgreen active:shadow-md lg:px-2 lg:py-0 lg:underline lg:decoration-4 lg:underline-offset-[1rem] lg:shadow-none lg:active:shadow-none"
            >Rezept des Tages</a
          >
          <a
            href="../contact.html"
            class="shadow-inner-md mr-4 rounded-3xl px-4 py-2 active:shadow-md hover:text-gray-500 lg:px-2 lg:py-0 lg:shadow-none lg:active:shadow-none"
            >Kontakt</a
          >
          <a
            href="../imprint.html"
            class="shadow-inner-md mr-4 rounded-3xl px-4 py-2 active:shadow-md hover:text-gray-500 lg:px-2 lg:py-0 lg:shadow-none lg:active:shadow-none"
            >Impressum</a
          >
        </nav>
      </div>
      <nav
          id="mobile-menu"
          class="absolute left-0 right-0 top-20 hidden z-20 h-[calc(100vh-5rem)] bg-white pt-4 font-semibold"
        >
          <a
            href="../index.html"
            class="shadow-inner-md mr-4 rounded-3xl px-4 py-2 blur-none active:shadow-md"
            >Start</a
          >
          <a
            href="../rezept.html?id=${dayID}"
            class="shadow-inner-md mr-4 rounded-3xl px-4 py-2 text-kw-green active:shadow-md lg:px-2 lg:py-0 lg:underline lg:decoration-4 lg:underline-offset-[1rem] lg:shadow-none lg:active:shadow-none"
            >Rezept des Tages</a
          >
          <a
            href="../contact.html"
            class="shadow-inner-md mr-4 rounded-3xl px-4 py-2 active:shadow-md"
            >Kontakt</a
          >
          <a
            href="../imprint.html"
            class="shadow-inner-md mr-4 rounded-3xl px-4 py-2 active:shadow-md"
            >Impressum</a
          >
        </nav>
`;
export default header;

// hamburger menu toggler
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  if (menu.classList.contains("hidden")) {
    // Wenn das Menü verborgen ist, nach unten sliden
    menu.classList.remove("hidden", "animate-slideUp");
    menu.classList.add(
      "animate-slideDown",
      "flex",
      "flex-col",
      "items-end",
      "gap-2",
    );
  } else {
    // Wenn das Menü sichtbar ist, nach oben sliden
    menu.classList.remove("animate-slideDown");
    menu.classList.add("animate-slideUp");

    // Das `hidden` Attribut hinzufügen, nachdem die Animation beendet ist
    menu.addEventListener(
      "animationend",
      () => {
        menu.classList.add("hidden");
        menu.classList.remove("animate-slideUp", "flex", "flex-col");
      },
      { once: true },
    );
  }
});
