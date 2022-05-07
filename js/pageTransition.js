//page in buttom to up
//pageTl.to(".slider", {y:"-220%", duration:1, opacity:.8})
//pageTl.to(".card", {y:"0%", duration:1.2, opacity:1}, "-=1")

// Landing Page with fede-in in About
const pageTl = gsap.timeline({defaults: {ease:"power2.out"}})
pageTl.fromTo(".card", {opacity: 0}, {opacity:1, duration:1})
pageTl.fromTo(".main-title", {opacity: 0}, {opacity:1, duration:1.2})
//pageTl.fromTo(".project", {opacity: 0}, {opacity:1, duration:.2})

// Landing Page with smooth scroll in Work
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed:800
});

gsap.registerPlugin(ScrollTrigger)
gsap.defaults({
    duration: 1.5,
    opacity: 0,
})

let timeline01 = gsap.timeline({
    ScrollTrigger: {
        trigger: '#box1',
        toggleAction:'restart pause none none',
        start: 'top center',
        markers:true
    },
})
timeline01.from("#image01", {x: -150})
timeline01.from("#text01", {y: 150}, "-=1")

let timeline02 = gsap.timeline({
    ScrollTrigger: {
        trigger: "#box2",
        start: 'top center'
    },
})
timeline02.from('#image02', {x: 150})
timeline02.from('#text02', {y: 150}, '-=1')

let timeline03 = gsap.timeline({
    ScrollTrigger: {
        trigger: "#box3",
        start: 'top center'
    },
})

timeline03.from('#image03', {x: -150})
timeline03.from('#text03', {y: 150}, '-=1')