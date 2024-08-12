document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    document.querySelectorAll(".accordion-content").forEach((otherContent) => {
      if (otherContent !== content) {
        otherContent.classList.remove("show");
      }
    });

    content.classList.toggle("show");
  });
});
