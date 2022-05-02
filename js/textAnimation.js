gsap.registerPlugin(TextPlugin);

let boxTl = gsap.timeline({repeat:0}).pause()
boxTl.to('.box', {duaration:10, width: "20vw", delay:2, ease:"power4.inOut"}).
from('.hi', {duaration:10, y:"7vw", ease:"power3.out"})
.to('.box', {duaration: 10, height: "7vw", ease: "elastic.out"})


let tl = gsap.timeline({repeat:0})
tl.to('.text1', {duration: 0.2, onComplete: () => boxTl.play(), text:"Hi, I'm"})
tl.to(".text2", {duration: 1.1, text:"Front-end Developer"})

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

let cursor = gsap.to('.cursor', {opacity: 0, ease: "power2.inOut", repeat: -1})

const tlAbout = gsap.timeline();
tlAbout.to('.contact-msg', 
{duration: 1.4, yoyo: true, repeat:2,
repeatDelay:1,
text:"Say hello to me? I'd love to hear from you"})
