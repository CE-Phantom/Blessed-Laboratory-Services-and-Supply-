/*====================================================
BLESSED LABORATORY SERVICES & SUPPLY V3
SCRIPT.JS
PART 1
====================================================*/

/*==========================
LOADER
==========================*/

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});


/*==========================
NAVBAR SCROLL
==========================*/

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/*==========================
MOBILE MENU
==========================*/

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/*==========================
SMOOTH SCROLL
==========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

        navLinks.classList.remove("active");

    });

});


/*==========================
BACK TO TOP BUTTON
==========================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*==========================
ACTIVE NAV LINK
==========================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*==========================
FADE-IN ON SCROLL
==========================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(

".about-content,.about-image,.why-card,.service-card,.supply-card,.stat-card,.gallery-item,.testimonial-card,.contact-container"

).forEach(el => {

    observer.observe(el);

});


/*==========================
END OF PART 1
==========================*/
```
/*====================================================
BLESSED LABORATORY SERVICES & SUPPLY V3
SCRIPT.JS
PART 2
====================================================*/


/*==========================
STATISTICS COUNTER
==========================*/

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function runCounters() {

    const stats = document.querySelector(".statistics");

    if (!stats) return;

    const trigger = stats.getBoundingClientRect().top;

    if (trigger < window.innerHeight && !counterStarted) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = Number(counter.getAttribute("data-target"));

            let count = 0;

            const speed = Math.ceil(target / 120);

            function updateCounter() {

                count += speed;

                if (count < target) {

                    counter.innerHTML = count;

                    requestAnimationFrame(updateCounter);

                } else {

                    if (target === 99) {

                        counter.innerHTML = target + "%";

                    }

                    else if (target === 24) {

                        counter.innerHTML = target + "/7";

                    }

                    else {

                        counter.innerHTML = target + "+";

                    }

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll", runCounters);

runCounters();


/*==========================
PARALLAX HERO
==========================*/

const layer1 = document.querySelector(".layer1");
const layer2 = document.querySelector(".layer2");
const layer3 = document.querySelector(".layer3");

window.addEventListener("scroll", function () {

    const scroll = window.pageYOffset;

    if(layer1){

        layer1.style.transform =
        `translateY(${scroll*0.15}px)`;

    }

    if(layer2){

        layer2.style.transform =
        `translateY(${scroll*0.30}px)`;

    }

    if(layer3){

        layer3.style.transform =
        `translateY(${scroll*0.45}px)`;

    }

});


/*==========================
HERO MOUSE EFFECT
==========================*/

const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", function(e){

    const x =
    (window.innerWidth/2-e.clientX)/40;

    const y =
    (window.innerHeight/2-e.clientY)/40;

    if(layer1){

        layer1.style.transform =
        `translate(${x}px,${y}px)`;

    }

    if(layer2){

        layer2.style.transform =
        `translate(${x*1.5}px,${y*1.5}px)`;

    }

    if(layer3){

        layer3.style.transform =
        `translate(${x*2}px,${y*2}px)`;

    }

});


/*==========================
FLOATING ICON MOVEMENT
==========================*/

const icons =
document.querySelectorAll(".floating-icons i");

setInterval(function(){

icons.forEach(icon=>{

const x=Math.random()*30-15;

const y=Math.random()*30-15;

icon.style.transform=
`translate(${x}px,${y}px) rotate(${Math.random()*360}deg)`;

});

},4000);


/*==========================
IMAGE HOVER ZOOM
==========================*/

const images =
document.querySelectorAll(".gallery-item img");

images.forEach(image=>{

image.addEventListener("mouseenter",function(){

this.style.transform="scale(1.12)";

});

image.addEventListener("mouseleave",function(){

this.style.transform="scale(1)";

});

});


/*==========================
END OF PART 2
==========================*/

/*====================================================
BLESSED LABORATORY SERVICES & SUPPLY V3
SCRIPT.JS
PART 3
====================================================*/


/*==========================
GALLERY LIGHTBOX
==========================*/

const galleryItems = document.querySelectorAll(".gallery-item img");

const lightbox = document.createElement("div");

lightbox.className = "lightbox";

const lightboxImg = document.createElement("img");

lightbox.appendChild(lightboxImg);

document.body.appendChild(lightbox);

galleryItems.forEach(image => {

image.addEventListener("click", function(){

lightbox.classList.add("show");

lightboxImg.src = this.src;

});

});

lightbox.addEventListener("click", function(){

lightbox.classList.remove("show");

});


/*==========================
SCROLL INDICATOR
==========================*/

const scrollArrow = document.querySelector(".scroll-down");

window.addEventListener("scroll", function(){

if(window.scrollY > 150){

scrollArrow.style.opacity = "0";

}else{

scrollArrow.style.opacity = "1";

}

});


/*==========================
SERVICE CARD EFFECT
==========================*/

const serviceCards =
document.querySelectorAll(".service-card");

serviceCards.forEach(card=>{

card.addEventListener("mouseenter",function(){

this.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",function(){

this.style.transform="translateY(0) scale(1)";

});

});


/*==========================
SUPPLY CARD EFFECT
==========================*/

const supplyCards =
document.querySelectorAll(".supply-card");

supplyCards.forEach(card=>{

card.addEventListener("mouseenter",function(){

this.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",function(){

this.style.transform="translateY(0)";

});

});


/*==========================
WHATSAPP BUTTON PULSE
==========================*/

const whatsapp =
document.querySelector(".whatsapp");

setInterval(function(){

whatsapp.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.15)"

},

{

transform:"scale(1)"

}

],{

duration:1200

});

},3500);


/*==========================
TYPEWRITER EFFECT
==========================*/

const subtitle =
document.querySelector(".hero-content h2");

const words = [

"Services & Supply",

"Medical Equipment",

"Laboratory Diagnostics",

"Healthcare Solutions"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typingEffect(){

const currentWord = words[wordIndex];

if(!deleting){

subtitle.textContent =
currentWord.substring(0,charIndex++);

if(charIndex > currentWord.length){

deleting = true;

setTimeout(typingEffect,1800);

return;

}

}else{

subtitle.textContent =
currentWord.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(typingEffect,deleting?60:120);

}

typingEffect();


/*==========================
PARALLAX PARTICLES
==========================*/

const particles =
document.querySelectorAll(".particles span");

window.addEventListener("scroll",()=>{

const scroll = window.scrollY;

particles.forEach((particle,index)=>{

particle.style.transform=

`translateY(${scroll*(0.05+index*0.01)}px)`;

});

});


/*==========================
END OF PART 3
==========================*/

/*====================================================
BLESSED LABORATORY SERVICES & SUPPLY V3
SCRIPT.JS
PART 4
====================================================*/


/*==========================
TESTIMONIAL SLIDER
==========================*/

const testimonials =
document.querySelectorAll(".testimonial-card");

let testimonialIndex = 0;

function testimonialSlider(){

if(testimonials.length === 0) return;

testimonials.forEach(card=>{

card.style.display="none";

});

testimonials[testimonialIndex].style.display="block";

testimonialIndex++;

if(testimonialIndex>=testimonials.length){

testimonialIndex=0;

}

}

setInterval(testimonialSlider,5000);

testimonialSlider();


/*==========================
REVEAL ANIMATION
==========================*/

const revealElements =
document.querySelectorAll(

".why-card,.service-card,.supply-card,.gallery-item,.testimonial-card,.contact-container,.stat-card"

);

const revealObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(60px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:900,

fill:"forwards"

});

}

});

},{

threshold:0.15

});

revealElements.forEach(item=>{

revealObserver.observe(item);

});


/*==========================
FLOATING BUTTON ANIMATION
==========================*/

const floatingButtons =
document.querySelectorAll(".btn");

floatingButtons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.animate([

{

transform:"translateY(0)"

},

{

transform:"translateY(-8px)"

}

],{

duration:250,

fill:"forwards"

});

});

button.addEventListener("mouseleave",()=>{

button.animate([

{

transform:"translateY(-8px)"

},

{

transform:"translateY(0)"

}

],{

duration:250,

fill:"forwards"

});

});

});


/*==========================
PAGE FADE-IN
==========================*/

document.body.animate([

{

opacity:0

},

{

opacity:1

}

],{

duration:1000,

fill:"forwards"

});


/*==========================
LIGHTBOX STYLES
==========================*/

const style = document.createElement("style");

style.innerHTML = `

.lightbox{

position:fixed;

top:0;

left:0;

width:100%;

height:100%;

background:rgba(0,0,0,.92);

display:flex;

justify-content:center;

align-items:center;

opacity:0;

visibility:hidden;

transition:.4s;

z-index:999999;

}

.lightbox.show{

opacity:1;

visibility:visible;

}

.lightbox img{

max-width:90%;

max-height:90%;

border-radius:15px;

box-shadow:0 0 35px rgba(93,212,255,.5);

}

.active{

color:#6bd7ff !important;

}

.show{

opacity:1 !important;

transform:translateY(0) !important;

}

`;

document.head.appendChild(style);


/*==========================
INITIAL FADE STATE
==========================*/

document.querySelectorAll(

".about-content,.about-image,.why-card,.service-card,.supply-card,.gallery-item,.testimonial-card,.contact-container,.stat-card"

).forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(60px)";

item.style.transition=".8s";

});


/*==========================
LOADER SAFETY
==========================*/

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.display="none";

},1800);

});


/*==========================
END OF SCRIPT
==========================*/

console.log(

"Blessed Laboratory Services & Supply V3 Loaded Successfully."

);
