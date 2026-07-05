// =========================
// Sticky Header
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.9)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";
    } else {
        header.style.background = "rgba(0,0,0,.45)";
        header.style.boxShadow = "none";
    }

});


// =========================
// Scroll Animation
// =========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

sections.forEach((section) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all .8s ease";

    observer.observe(section);

});


// =========================
// Active Navbar
// =========================

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// =========================
// Typing Effect
// =========================

const typingTexts = [
    "Software Engineer",
    "Python Developer",
    "Data Analyst",
    "Power BI Enthusiast"
];

const typingElement = document.querySelector(".left h2");

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentText = typingTexts[textIndex];

    if (!deleting) {

        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            textIndex++;

            if (textIndex === typingTexts.length) {
                textIndex = 0;
            }
        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();