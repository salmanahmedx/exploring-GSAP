const src = [
  "resources/spartan.svg",
  "resources/castle.svg",
  "resources/da-vinci.svg",
  "resources/airplane.svg",
];

const dates = [
  "-3300 | 476",
  "476 | 1492",
  "1492 | 1792",
  "1792 | AJD",
]

ScrollTrigger.create({
  trigger: ".sections",
  pin: ".tooltip",
  start: "top 40%",
  end: "bottom center",
  // markers: true
})

const sections = document.querySelectorAll(".section");

sections.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top 40%",
    end: "bottom center",
    markers: true,
    onEnter: () => {
      gsap.set(".tooltip-img", { attr: { src: src[index] } })
      gsap.set(".tooltip p", { innerText: dates[index] })
    },
    onEnterBack: () => {
      gsap.set(".tooltip-img", { attr: { src: src[index] } })
      gsap.set(".tooltip p", { innerText: dates[index] })
    }
  })
})


