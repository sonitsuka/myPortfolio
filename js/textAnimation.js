gsap.registerPlugin(TextPlugin);


let cursor = gsap.to('.cursor', {opacity: 0, ease: "power2.inOut", repeat: -1})


let botTl = gsap.timeline()
botTl.to('.box', {duaration:1, width: "6.2vw", delay:0.5, ease:"power4.inOut"}).
from('.hi', {duaration:1, y:"7vw", ease:"none"})
.to('.box', {duaration: 1, height: "7vw", ease: "none"})



const tl = gsap.timeline({repeat:0});
tl.to('.text1', {duration: 0.3, text:"Hi, I'm Oni"})
    .to(".text2", {duration: 1, text:"Front-end Developer"})

/*
let masterTl= gsap.timeline()
word1.forEach(word => {
    let tl = gsap.timeline({repeat:0})
    tl.to('.text1', {duration: 0.7, text:word})
    masterTl.add(tl)
})

word2.forEach(word => {
    let tl = gsap.timeline({repeat:0})
    tl.to('.text2', {duration: 1.3, text:word})
    masterTl.add(tl)
})
*/

