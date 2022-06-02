const TL = gsap.timeline()

TL
    .to(".images-container", {
        height: "100%", duration: .95, ease: "Power-4.easeOut"
    })
    .to(".bloc-txt", {
        height: "100px", duration: .45, y: 0, ease: "Power-4.easeOut"
    }, " <= 0.100")
    .to(".bloc-txt h2", { y: 10, duration: .5 }, ">")
    .to(".f2", { y: 0, duration: 0.6 })
    .to(".flip-img1", { display: "none", duration: 0.7 }, "<=0.98")
    .to(".f2", { y: "-100%", duration: 0.5 })
    .to(".load-container", { autoAlpha: 0, duration: 0.6 })
    .add(() => {
        document.querySelector("video").play()
    })