//targeting the mountain image
gsap.to(".home-mountains img", {
    //we want it to translate -100px in Y axis
    y: -100,
    //scroll trigger will be triggered upon entering home-mountains
    scrollTrigger: {
        trigger: "home-mountains",
        scrub: true,
    }
})

gsap.to("h1", {
    y: 500,
    scrollTrigger: {
        trigger: "home-mountains",
        scrub: true
    }
})