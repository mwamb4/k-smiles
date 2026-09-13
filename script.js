/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

}


/* Close menu after clicking a link */

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });

});


/* =========================
   BOOKING
========================= */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const nameElement = document.getElementById("name");
        const phoneElement = document.getElementById("phone");
        const serviceElement = document.getElementById("service");
        const dateElement = document.getElementById("date");
        const messageElement = document.getElementById("message");

        const name = nameElement ? nameElement.value.trim() : "";
        const phone = phoneElement ? phoneElement.value.trim() : "";
        const service = serviceElement ? serviceElement.value : "";
        const date = dateElement ? dateElement.value : "";
        const message = messageElement ? messageElement.value.trim() : "";

        if (!name || !phone || !service || !date) {

            alert("Please fill in all required fields.");

            return;
        }


        /* =========================
           WHATSAPP BOOKING
        ========================= */

        const whatsappNumber = "254108901996";

        const whatsappMessage = `Hello K-SMILES 👋

I'd like to book an appointment.

Name: ${name}

Phone: ${phone}

Service: ${service}

Preferred date: ${date}

Additional message:
${message || "None"}

Thank you.`;

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank");

    });

}


/* =========================
   FOOTER YEAR
========================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* =========================
   PREVENT PAST DATES
========================= */

const dateInput = document.getElementById("date");

if (dateInput) {

    const today =
        new Date().toISOString().split("T")[0];

    dateInput.setAttribute("min", today);

}
