//landing page text animation

const tl = gsap.timeline({
    defaults: {
        duration: 0.75,
        ease: "power3.out"
    }
});

tl.fromTo(
    ".hero-img", {
    scale: 1.3,
    borderRadius: "0rem"
}, {
    scale: 1,
    borderRadius: "2rem",
    delay: 0.35,
    duration: 2.5,
    ease: "elastic.out(1.5,1)",
}
);

tl.fromTo(
    ".cta-1", {
    x: "100%",
    opacity: 0.5,
}, {
    x: 0,
    opacity: 1,
},
    "<20%"
);

tl.fromTo(
    ".cta-3", {
    x: "-100%",
    opacity: 0.5,
}, {
    x: 0,
    opacity: 1,
},
    "<20%"
);

tl.fromTo(
    ".cta-2", {
    y: "100%",
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
},
    "<20%"
);

tl.fromTo(
    ".cta-4", {
    x: "100%",
    opacity: 0.5,
}, {
    x: 0,
    opacity: 1,
},
    "<20%"
);

tl.fromTo(
    ".cta-5", {
    y: "100%",
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
},
    "<20%"
);

tl.fromTo(
    ".cta-6", {
    x: "-100%",
    opacity: 0.5,
}, {
    x: 0,
    opacity: 1,
},
    "<20%"
);

tl.fromTo(".cta-btn", {
    y: 20, opacity: 0
}, { y: 0, opacity: 1 }, "<"
)

// logo animation - Split text plugin alternative

const logo = document.querySelector(".logo");
const letters = logo.textContent.split("");
logo.textContent = "";

letters.forEach(letter => {
    logo.innerHTML += `<span class="letter">${letter}</span>`;
})


gsap.set(".letter", { display: "inline-block" });
gsap.fromTo(".letter", { y: 100 }, { y: 0, delay: 2, stagger: 0.05, ease: 'back.out(2)' })