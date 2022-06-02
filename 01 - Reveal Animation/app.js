const TL = gsap.timeline()

TL.fromTo(".nav-container a", { autoAlpha: 0, y: "-50px" }, { autoAlpha: 1, y: "0px", duration: .7 })
