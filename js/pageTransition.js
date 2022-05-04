const pageTl = gsap.timeline({defaults: {ease:"power2.out"}})

//page in buttom to up
//pageTl.to(".slider", {y:"-220%", duration:1, opacity:.8})
//pageTl.to(".card", {y:"0%", duration:1.2, opacity:1}, "-=1")
pageTl.fromTo(".card", {opacity: 0}, {opacity:1, duration:1})
pageTl.fromTo(".main-title", {opacity: 0}, {opacity:1, duration:2.5})
