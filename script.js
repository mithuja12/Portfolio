// ==========================
// PORTFOLIO JAVASCRIPT
// ==========================

// Typing Effect

const text = [
    "Aspiring AI Engineer",
    "CSE Student",
    "Python Developer",
    "Web Developer",
    "Problem Solver"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    const typingElement = document.querySelector(".hero h3");

    if (typingElement) {
        typingElement.textContent = letter;
    }

    if (letter.length === currentText.length) {

        setTimeout(() => {
            index = 0;
            count++;
            type();
        }, 1500);

    } else {

        setTimeout(type, 100);
    }

})();


// ==========================
// Navbar Shadow On Scroll
// ==========================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 4px 20px rgba(0,0,0,0.4)";

    } else {

        navbar.style.boxShadow = "none";
    }
});


// ==========================
// Active Navigation Link
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            .includes(current)
        ) {
            link.classList.add("active");
        }
    });
});


// ==========================
// Scroll Reveal Animation
// ==========================

const revealElements =
    document.querySelectorAll(
        ".about, .skills, .projects, .education, .certifications, .contact"
    );

function reveal() {

    revealElements.forEach(element => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.style.opacity = "1";
            element.style.transform =
                "translateY(0px)";

        }
    });
}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform =
        "translateY(50px)";
    element.style.transition =
        "all 0.8s ease";
});

window.addEventListener("scroll", reveal);

reveal();


// ==========================
// Back To Top Button
// ==========================

const topButton =
document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.cursor = "pointer";
topButton.style.fontSize = "20px";
topButton.style.background = "#38bdf8";
topButton.style.color = "#0f172a";
topButton.style.display = "none";
topButton.style.fontWeight = "bold";
topButton.style.zIndex = "1000";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ==========================
// Welcome Message
// ==========================

window.addEventListener("load", () => {

    console.log(
        "Portfolio Loaded Successfully 🚀"
    );
});