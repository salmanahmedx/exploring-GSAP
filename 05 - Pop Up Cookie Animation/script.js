const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power2.out" } })

//the animation flows serially

tl.fromTo('.cookie-container', { scale: 0 }, { scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5 })

//to sync the next two animation: add "<" in the later animation to sync with the previous one!

tl.fromTo('.cookie', { opacity: 0, x: -50, rotation: '-45deg' }, { opacity: 1, x: 0, rotation: "0deg" }, "<50%")

//sync "<50%" means the later will sync with the prior animation but it will start after the 50% of the prior animation is complete

tl.fromTo('.text', { x: 30, opacity: 0 }, { x: 0, opacity: 1 }, '<')

//cookie and crumb animation

tl.fromTo(".cookie", { y: 0, rotation: '0deg' }, { y: -20, yoyo: true, repeat: -1, rotation: '-10deg' })

tl.fromTo("#crumbs", { y: 0, rotation: '0deg' }, { y: -20, yoyo: true, repeat: -1, rotation: '-10deg' }, "<")

//to use infinity as repeat count add -1
//yoyo effect literally works like yoyo

const button = document.querySelector("button")
button.addEventListener("click", () => {
    gsap.to(".cookie-container", { opacity: 0, y: -100, duration: 0.75, ease: 'power1.out' })
})


//** Animation getting outside or cutting down? Get rid of the clippath from SVG files or try adding overflow: visible in the SVG files in CSS **/
