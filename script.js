/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* Close menu after clicking a link */

const links = document.querySelectorAll(".nav-links a");


links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =========================
   BOOKING
========================= */

const bookingForm =
    document.getElementById("bookingForm");


bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();


    const phone =
        document.getElementById("phone").value.trim();


    const service =
        document.getElementById("service").value;


    const date =
        document.getElementById("date").value;


    const message =
        document.getElementById("message").value.trim();


    if (!name || !phone || !service || !date) {

        alert("Please fill in all required fields.");

        return;

    }


    /*
        K-SMILES WhatsApp number.

        The poster shows:
        0108901996

        For WhatsApp's international format,
        the Kenyan country code is 254.

        Verify this number is actually connected
        to WhatsApp before publishing the site.
    */

    const whatsappNumber =
        "254108901996";


    const whatsappMessage =

`Hello K-SMILES 👋

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


    window.open(
        whatsappURL,
        "_blank"
    );

});


/* =========================
   FOOTER YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================
   PREVENT PAST DATES
========================= */

const dateInput =
    document.getElementById("date");


const today =
    new Date().toISOString().split("T")[0];


dateInput.setAttribute(
    "min",
    today
);
