/*==================== Navbar MENU SHOW Y HIDDEN ====================*/
const toggleBtn = document.getElementById('toggle-btn')
const navList = document.querySelector('.nav__list')

toggleBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
})

const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
 

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*==================== REMOVE MENU MOBILE ====================*/


/*====================  HOME TEXT ANIMATION ====================*/
gsap.registerPlugin(TextPlugin);

let boxTl = gsap.timeline({repeat:0}).pause()
boxTl.to('.box', {duaration:10, width: "20vw", delay:2, ease:"power4.inOut"}).
from('.hi', {duaration:10, y:"7vw", ease:"power3.out"})
.to('.box', {duaration: 10, height: "7vw", ease: "elastic.out"})


let tl = gsap.timeline({repeat:0})
tl.to('.text1', {duration: 0.2, onComplete: () => boxTl.play(), text:"Hi, I'm"})
tl.to(".text2", {duration: 1.1, text:"Front-end Developer"})

/*==================== HOME PAGE TRANSITION ====================*/
const mainTitle = document.querySelector('#main-title')
const slider = document.querySelector('.slider')
const header = document.querySelector('#header')
const sub = document.querySelector('#sub-content')
const footer = document.querySelector('#footer')
const bg = document.querySelector('.bg-layer')

const tlHome = new TimelineMax()

tlHome.fromTo(mainTitle, 1, {width: '100%'}, {height: '100%', ease: Power2.easeInOut}
).fromTo(sub, 1.2, {opacity:0, x:-30}, {opacity:1, x:0}, '-=.1'
).fromTo(header, 1.2, {opacity:0, x:30}, {opacity:1, x:0}, '-=1.2'
).fromTo(footer, 1, {opacity:0, x:-50}, {opacity:1, x:0}, '-=1') 



/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper (".work__container", {
    cssMode:true,
    loop:true,

    pagination: {
      el: ".swiper-pagination",
      clicable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});



/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('#')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=" + sectionId + "]').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=" + sectionId + "]').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*==================== CONTACT TYPEWRITER TEXT ANIMATIOn ====================*/ 
let cursor = gsap.to('.cursor', {opacity: 0, ease: "power2.inOut", repeat: -1})

const tlAbout = gsap.timeline();
tlAbout.to('.contact-msg', 
{duration: 1.4, yoyo: true, repeat:2,
repeatDelay:1,
text:"Say hello to me? I'd love to hear from you"})

/*==================== CHANGE LANGUAGES ====================*/ 


/*==================== SCROLL PAGE ANIMATION ====================*/
const scroll = new SmoothScroll('.nav a[href*="#"]', {
  speed:800
});