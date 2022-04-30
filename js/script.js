const words = ["Hi", "I'm", "img", "Front-end", "Developer"]

let cursor = gsap.to('.cursor', {opacity: 0, ease: "power2.inOut", repeat: -1})

let botTl = gsap.timeline()

botTl.to('.box', {duaration:1, width: "6.2vw", delay:0.5, ease:"power4.inOut"}).
from('.hi', {duaration:1, y:"7vw", ease:"power3.out"})
.to('.box')