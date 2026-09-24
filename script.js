console.log("Fit Gym JavaScript Connected!");

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

if (menuBtn && mainNav) {

    menuBtn.addEventListener("click", () => {
        mainNav.classList.toggle("active");
        menuBtn.classList.toggle("active");
    });

    mainNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            mainNav.classList.remove("active");
            menuBtn.classList.remove("active");
        });

    });

}


const header = document.querySelector(".main-header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


const revealElements = document.querySelectorAll(
    ".about-image, .about-content, .feature-card, .gallery-content, .gallery-image, .equipment-card, .price-card, .contact-box, .contact-form"
);

const revealObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


const counters = document.querySelectorAll(".stat-box h3");

const counterObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = parseInt(counter.innerText);

        let current = 0;
        const duration = 1500;
        const step = target / (duration / 20);

        function updateCounter() {

            current += step;

            if (current < target) {

                counter.innerText = Math.floor(current) + "+";

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target + "+";

            }

        }

        updateCounter();

        observer.unobserve(counter);

    });

}, {
    threshold: 0.7
});


counters.forEach(counter => {
    counterObserver.observe(counter);
});


const cards = document.querySelectorAll(
    ".feature-card, .price-card, .contact-box"
);

cards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;

        card.style.transform =
            `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


const topButton = document.createElement("button");

topButton.className = "top-button";

topButton.innerHTML =
    '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topButton);


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        topButton.classList.add("show-top");
    } else {
        topButton.classList.remove("show-top");
    }

});


topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


const getStarted = document.querySelector(".get");

if (getStarted) {

    getStarted.addEventListener("click", () => {

        document.querySelector("#pricing").scrollIntoView({
            behavior: "smooth"
        });

    });

}


const aboutButton = document.querySelector(".about-btn");

if (aboutButton) {

    aboutButton.addEventListener("click", () => {

        document.querySelector("#gallery").scrollIntoView({
            behavior: "smooth"
        });

    });

}


const galleryButton = document.querySelector(".gallery-btn");

if (galleryButton) {

    galleryButton.addEventListener("click", () => {

        document.querySelector("#equipment").scrollIntoView({
            behavior: "smooth"
        });

    });

}


const joinButton = document.querySelector(".join-btn");

if (joinButton) {

    joinButton.addEventListener("click", () => {

        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth"
        });

    });

}


const priceButtons = document.querySelectorAll(".price-btn");

priceButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".price-card");
        const plan = card.querySelector("h3").innerText;

        document.querySelectorAll(".price-card").forEach(card => {
            card.classList.remove("active");
        });

        card.classList.add("active");

        alert(
            `You selected ${plan}. Please contact us to continue.`
        );

    });

});


const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", event => {

        event.preventDefault();

        const name = contactForm.querySelector(
            'input[placeholder="Your Name"]'
        );

        const email = contactForm.querySelector(
            'input[placeholder="Your Email"]'
        );

        const subject = contactForm.querySelector(
            'input[placeholder="Subject"]'
        );

        const message = contactForm.querySelector("textarea");

        if (
            name.value.trim() === "" ||
            email.value.trim() === "" ||
            subject.value.trim() === "" ||
            message.value.trim() === ""
        ) {

            alert("Please fill all the fields.");

            return;

        }

        if (!email.value.includes("@")) {

            alert("Please enter a valid email.");

            return;

        }

        alert(
            `Thank you ${name.value}! Your message has been submitted successfully.`
        );

        contactForm.reset();

    });

}


const buttons = document.querySelectorAll(
    ".get, .about-btn, .gallery-btn, .join-btn, .price-btn, .send-btn"
);

buttons.forEach(button => {

    button.addEventListener("mousedown", () => {

        button.style.transform = "scale(.94)";

    });

    button.addEventListener("mouseup", () => {

        button.style.transform = "";

    });

});
