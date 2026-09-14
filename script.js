/* ========================================
   MOBILE MENU
======================================== */

function toggleMenu() {

    const nav =
        document.getElementById("navMenu");

    nav.classList.toggle("active");

}


document
    .querySelectorAll("#navMenu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            document
                .getElementById("navMenu")
                .classList.remove("active");

        });

    });


/* ========================================
   YEAR
======================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ========================================
   CUSTOM CURSOR
======================================== */

const cursor =
    document.createElement("div");

cursor.className = "cursor";

document.body.appendChild(cursor);


const ring =
    document.createElement("div");

ring.className = "cursor-ring";

document.body.appendChild(ring);


const glow =
    document.createElement("div");

glow.className = "mouse-glow";

document.body.appendChild(glow);


let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;


document.addEventListener(
    "mousemove",
    (event) => {

        mouseX = event.clientX;
        mouseY = event.clientY;

        cursor.style.left =
            mouseX + "px";

        cursor.style.top =
            mouseY + "px";

        glow.style.left =
            mouseX + "px";

        glow.style.top =
            mouseY + "px";

    }
);


/* Smooth cursor ring */

function animateRing() {

    ringX +=
        (mouseX - ringX) * 0.15;

    ringY +=
        (mouseY - ringY) * 0.15;

    ring.style.left =
        ringX + "px";

    ring.style.top =
        ringY + "px";

    requestAnimationFrame(
        animateRing
    );

}

animateRing();


/* Cursor hover effect */

const interactiveElements =
    document.querySelectorAll(
        "a, button, .project-card, .skill-card"
    );


interactiveElements.forEach(element => {

    element.addEventListener(
        "mouseenter",
        () => {

            cursor.classList.add("active");

            ring.classList.add("active");

        }
    );

    element.addEventListener(
        "mouseleave",
        () => {

            cursor.classList.remove("active");

            ring.classList.remove("active");

        }
    );

});


/* ========================================
   SCROLL REVEAL
======================================== */

const revealElements =
    document.querySelectorAll(
        ".section-title, .about-text, .about-card, " +
        ".skill-card, .project-card, .cert-card, " +
        ".contact-container"
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("visible");

                    revealObserver
                        .unobserve(
                            entry.target
                        );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ========================================
   STAGGERED CARD ANIMATION
======================================== */

document
    .querySelectorAll(
        ".skills-grid .skill-card"
    )
    .forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 0.08}s`;

    });


document
    .querySelectorAll(
        ".projects-grid .project-card"
    )
    .forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 0.12}s`;

    });


document
    .querySelectorAll(
        ".certification-grid .cert-card"
    )
    .forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 0.08}s`;

    });


/* ========================================
   3D PROJECT MOUSE EFFECT
======================================== */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) /
                    centerY) * -5;

            const rotateY =
                ((x - centerX) /
                    centerX) * 5;

            card.style.transform =
                `
                perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.02)
                `;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                `
                perspective(900px)
                rotateX(0deg)
                rotateY(0deg)
                scale(1)
                `;

        }
    );

});


/* ========================================
   ACTIVE NAVIGATION
======================================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");


window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            if (
                window.scrollY >=
                sectionTop
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.style.color = "";

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.style.color =
                    "var(--accent)";

            }

        });

    }
);


/* ========================================
   PARALLAX HERO
======================================== */

const heroContent =
    document.querySelector(
        ".hero-content"
    );


window.addEventListener(
    "mousemove",
    (event) => {

        if (!heroContent) return;

        const x =
            (window.innerWidth / 2 -
                event.clientX) / 60;

        const y =
            (window.innerHeight / 2 -
                event.clientY) / 60;

        heroContent.style.transform =
            `
            translate(${x}px, ${y}px)
            `;

    }
);
