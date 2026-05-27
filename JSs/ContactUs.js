emailjs.init("qMw_I8Q1XyeHw-PNN");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm("service_6wqtfif", "template_35f49ne", this)

    .then(() => {
      showModal();

      form.reset();
    })

    .catch((error) => {
      alert("Failed To Send Message");

      console.log(error);
    });
});

const modal = document.getElementById("successModal");

function showModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}
