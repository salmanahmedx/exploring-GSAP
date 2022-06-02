const sections = document.querySelectorAll(".section");

sections.forEach(section => {
    ScrollTrigger.create({
        trigger: section,
        //An element (or selector text for the element) that should be pinned during the time that the ScrollTrigger is active, meaning it will appear to "stick" in its starting position while the rest of the content continues scrolling underneath it. Only one pinned element is allowed, but it can contain as many elements as you want. Setting pin: true will cause it to pin the trigger element.
        pin: section,
        start: "top top",
        //By default, padding will be added to the bottom (or right for horizontal: true) to push other elements down so that when the pinned element gets unpinned, the following content catches up perfectly. Otherwise, things may scroll UNDER the pinned element. You can tell ScrollTrigger not to add any padding by setting pinSpacing: false.
        pinSpacing: false,
        markers: true,
    })
})