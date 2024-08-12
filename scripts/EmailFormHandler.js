// action="https://formspree.io/f/xpwarlpa"
const sendMail = (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  fetch("https://formspree.io/f/xpwarlpa", {
    method: "POST",
    body: new FormData(e.target),
    headers: {
      Accept: "application/json",
    },
  })
    .then(() => {
      window.location.href = "../send_mail.html";
    })
    .catch((error) => {
      console.log(error);
    });
};
