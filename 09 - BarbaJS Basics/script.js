// we have to initialize barba in order for it to run

barba.init({
    transitions: [
        {
            name: "new transition",
            sync: true, // enter() and leave() transition runs at the same time! By default it runs in a chronological order // lifecycle diagram for sequence
            //we need enter() or leave() hooks to run other hooks - before, after, beforeEnter, etc. Else they won't work

            before() {
                console.log("before")
            },
            after() {
                console.log("after")
            },
            beforeEnter() {
                console.log("before enter")
            },
            enter() {
                console.log("enter")
                console.log(data.next)
            },
            afterLeave() {
                console.log("after leave")
            },

            //once only runs once when page refreshes.
            once() {
                console.log(`once`)
            },
            //beforeOnce() and afterOnce() won't work if we don't use once()
            beforeOnce() {
                console.log(`before once`)

            },
            afterOnce() {
                console.log(`after once`)

            },

            leave(data) {
                console.log(data.current) // consists of five properties - container, namespace, url, html (string representation of that page's html), route (used with barba router)
            }
        }
    ]
});