document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("newsletterModal");
  const openModalButton = document.getElementById("openModal");
  const closeButton = document.getElementById("closeModal");
  const form = document.getElementById("newsletterForm");
  const successMessage = document.getElementById("successMessage");
  const submitButton = document.getElementById("submitButton");

  openModalButton.onclick = function () {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  };

  closeButton.onclick = function () {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  };

  form.onsubmit = function (event) {
    event.preventDefault();
    var emailInput = document.getElementById("email").value;

    if (emailInput) {
      successMessage.classList.remove("hidden");
      submitButton.innerHTML = "Abonniert";
      submitButton.disabled = true;
      submitButton.classList.remove("hover:bg-green-700", "bg-green-600");
      submitButton.classList.add("bg-kw-disabled", "text-kw-text-disabled");
      setTimeout(function () {
        modal.classList.add("hidden");
        successMessage.classList.add("hidden");
        submitButton.classList.add("hover:bg-green-700", "bg-green-600");
        submitButton.classList.remove(
          "bg-kw-disabled",
          "text-kw-text-disabled",
        );
        submitButton.innerHTML = "Abonnieren";
        submitButton.disabled = false;
        form.reset();
      }, 2000);
    }
  };
});

// footer HTML template

const footer = document.getElementById("footer");
footer.classList.add(
  "text-surface/75",
  "bg-neutral-700",
  "text-center",
  "text-white/75",
  "lg:text-left",
);
footer.innerHTML = `
      <div class="mx-auto max-w-[1440px] p-4">
        <div
          class="flex items-center justify-center border-b-2 border-neutral-200 border-white/10 p-6 lg:justify-between"
        >
          <div class="me-12 hidden lg:block">
            <span>Entdecke die Vielfalt der Küche - mit Kochwelt.</span>
          </div>
          <!-- Social network icons container -->
          <div class="flex justify-center">
            <a
              href="http://www.facebook.com"
              target="_blank"
              class="me-6 [&>svg]:h-4 [&>svg]:w-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 320 512"
              >
                <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                />
              </svg>
            </a>
            <a
              href="http://www.x.com"
              target="_blank"
              class="me-6 [&>svg]:h-4 [&>svg]:w-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                />
              </svg>
            </a>
            <a
              href="http://www.google.com"
              target="_blank"
              class="me-6 [&>svg]:h-4 [&>svg]:w-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 488 512"
              >
                <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                />
              </svg>
            </a>
            <a
              href="http://www.instagram.com"
              target="_blank"
              class="[&>svg]:h-4 [&>svg]:w-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </a>
          </div>
        </div>
        <!-- main section of the footer -->
        <div class="mx-6 py-10 text-center md:text-left">
          <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div class="">
              <h6
                class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start"
              >
                <span class="me-3 [&>svg]:h-6 [&>svg]:w-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <!-- Band der Mütze -->
                    <rect
                      x="4"
                      y="16"
                      width="16"
                      height="3"
                      rx="1.5"
                      fill="#FFFFFF"
                      stroke="#000000"
                      stroke-width="1"
                    />

                    <!-- Oberer Teil der Mütze -->
                    <path
                      d="M12 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z"
                      fill="#FFFFFF"
                      stroke="#000000"
                      stroke-width="1"
                    />
                    <path
                      d="M8 8c-2.21 0-4 1.79-4 4s1.79 4 4 4c0-2.21 1.79-4 4-4s4 1.79 4 4c2.21 0 4-1.79 4-4s-1.79-4-4-4"
                      fill="#F0F0F0"
                      stroke="#000000"
                      stroke-width="0.5"
                    />
                    <circle
                      cx="8"
                      cy="8"
                      r="1.5"
                      fill="#FFFFFF"
                      stroke="#000000"
                      stroke-width="0.5"
                    />
                    <circle
                      cx="12"
                      cy="6"
                      r="1.5"
                      fill="#FFFFFF"
                      stroke="#000000"
                      stroke-width="0.5"
                    />
                    <circle
                      cx="16"
                      cy="8"
                      r="1.5"
                      fill="#FFFFFF"
                      stroke="#000000"
                      stroke-width="0.5"
                    />
                  </svg>
                </span>
                Kochwelt
              </h6>
              <p>
                Deine Plattform für kulinarische Inspiration. Entdecke einfache
                Rezepte, <span class="italic">Hier ist ein Easter-Egg versteck</span>. Lass
                dich von der Welt des Kochens begeistern und koche wie ein
                <span class="italic">rechts unten</span>!
              </p>
            </div>
            <!-- Products section -->
            <div>
              <h6
                class="mb-4 flex justify-center font-semibold uppercase md:justify-start"
              >
                Unsere Kategorien
              </h6>
              <p class="mb-4">
                <a class="hover:text-white" href="../rezepte.html">Rezepte</a>
              </p>
              <p class="mb-4">
                <a class="hover:text-white" href="../cooking_tipps.html">Koch-Tipps</a>
              </p>
              <p class="mb-4">
                <a class="hover:text-white" href="../kitchen_tools.html">Küchen-Zubehör</a>
              </p>
              <p>
                <a class="hover:text-white" href="../blog.html">Blog</a>
              </p>
            </div>

            <!-- Useful links section -->
            <div>
              <h6
                class="mb-4 flex justify-center font-semibold uppercase md:justify-start"
              >
                Nützliche Links
              </h6>
              <p class="mb-4">
                <a class="hover:text-white" href="../about.html">Über uns</a>
              </p>
              <p class="mb-4">
                <a class="hover:text-white" href="../contact.html">Kontakt</a>
              </p>
              <p class="mb-4">
                <a class="hover:text-white" href="#newsletter" id="openModal">Newsletter abonnieren</a>
              </p>
              <p>
                <a class="hover:text-white" href="../faq.html">Häufige Fragen</a>
              </p>
            </div>

            <!-- Contact section -->
            <div>
              <h6
                class="mb-4 flex justify-center font-semibold uppercase md:justify-start"
              >
                Kontakt
              </h6>
              <p class="mb-4 flex items-center justify-center md:justify-start">
                <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                    />
                    <path
                      d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                    />
                  </svg>
                </span>
                Kochwelt GmbH, Küchenstraße 42, 123456 Gourmentstadt,
                Deutschland
              </p>
              <p class="mb-4 flex items-center justify-center md:justify-start">
                <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
                    />
                    <path
                      d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
                    />
                  </svg>
                </span>
                <a class="hover:text-white" href="mailto:info@kochwelt.de">info@kochwelt.de</a>
              </p>
              <p class="mb-4 flex items-center justify-center md:justify-start">
                <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <a class="hover:text-white" href="tel:+0123456788">+ 01 234 567 88</a>
              </p>
              <p class="flex items-center justify-center md:justify-start">
                <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
        <!--Copyright section-->
        <div class="p-6 text-center">
          <span>© 3080 Copyright:</span>
          <a class="font-semibold" href="./index.html">Kochwelt</a>
        </div>
      </div>
    <!-- Modal HTML -->
    <div id="newsletterModal" class="fixed p-4 inset-0 bg-gray-500 bg-opacity-75 items-center justify-center z-50 hidden">
        <div class="bg-white relative p-6 rounded-lg shadow-lg max-w-md w-full">
            <span class="absolute top-1 right-3 text-gray-600 cursor-pointer text-3xl" id="closeModal">&times;</span>
            <h2 class="text-xl font-semibold mb-4 text-gray-800">Newsletter abonnieren</h2>
            <form id="newsletterForm">
                <label for="email" class="block text-gray-700 mb-2">Ihre E-Mail-Adresse:</label>
                <input type="email" id="email" name="email" required class="block text-black w-full p-2 border border-gray-300 rounded mb-4">
                <button type="submit" id="submitButton" class="w-full bg-green-600 text-white py-2 px-4 hover:bg-green-700">Abonnieren</button>
            </form>
            <div id="successMessage" class="hidden mt-4 text-green-600">
                <p>Vielen Dank! Ihre E-Mail-Adresse wurde erfolgreich eingetragen.</p>
            </div>
        </div>
    </div>
`;

export default footer;
