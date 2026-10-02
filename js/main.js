const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const contactForm = document.getElementById("contact-form");

// Dit formulier bestaat alleen op index.html. Op projecten.html levert
// elementById niets op, dus zonder deze controle zou de regel hieronder
// een TypeError geven en zou het hele script stoppen met werken.
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log("Formulier ingevuld:", { name, email, message });
    alert("Bedankt voor je bericht, " + name + "!");
    contactForm.reset();
  });
}
