const TL = gsap.timeline()

TL
    .fromTo(".nav-container a", { autoAlpha: 0, y: "-50px" }, { autoAlpha: 1, y: "0px", duration: .75 })
    .fromTo(".home-content h1", { autoAlpha: 0, y: "-50px" }, { autoAlpha: 1, y: "0px", duration: .75 }, ">")
    .to(".middle-line", { height: "100px" })
    .fromTo(".home-content img", { y: "-20px" }, { y: "0px", autoAlpha: 1, duration: .75 }, ">")
    .to(".home-content button", { autoAlpha: 1 })
