/*=====================================================
    BLESSED LABORATORY SERVICES & SUPPLY
    FUTURISTIC WEBSITE
=====================================================*/


/*=========================================
LOADING SCREEN
=========================================*/

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

},1000);

});


/*=========================================
NAVBAR SCROLL EFFECT
=========================================*/

const navbar = document.getElementById("navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY > 80){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});


/*=========================================
BACK TO TOP BUTTON
=========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY > 500){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/*=========================================
SMOOTH SCROLL
=========================================*/

document.querySelectorAll('nav a').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

target.scrollIntoView({

behavior:"smooth"

});

});

});


/*=========================================
MOBILE MENU
=========================================*/

const menu=document.querySelector(".menu");

const navLinks=document.querySelector("nav ul");

menu.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});


/*=========================================
SCROLL REVEAL
=========================================*/

const reveals=document.querySelectorAll(".fade");

function reveal(){

reveals.forEach(item=>{

const windowHeight=window.innerHeight;

const revealTop=item.getBoundingClientRect().top;

const revealPoint=120;

if(revealTop<windowHeight-revealPoint){

item.classList.add("show");

}

});

}

window.addEventListener("scroll",reveal);

reveal();


/*=========================================
ANIMATED COUNTERS
=========================================*/

const counters=document.querySelectorAll(".counter");

let started=false;

function startCounters(){

if(started) return;

const trigger=document.querySelector(".statistics").getBoundingClientRect().top;

if(trigger<window.innerHeight){

started=true;

counters.forEach(counter=>{

const target=+counter.dataset.target;

let current=0;

const speed=Math.ceil(target/120);

const update=()=>{

current+=speed;

if(current<target){

counter.innerText=current;

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

};

update();

});

}

}

window.addEventListener("scroll",startCounters);
startCounters();


/*=========================================
ACTIVE NAVIGATION
=========================================*/

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*=========================================
FUTURISTIC HERO PARALLAX
=========================================*/

const hero = document.querySelector(".hero");
const layer1 = document.querySelector(".layer1");
const layer2 = document.querySelector(".layer2");
const layer3 = document.querySelector(".layer3");
const layer4 = document.querySelector(".layer4");

window.addEventListener("scroll", () => {

const scroll = window.pageYOffset;

if(layer1) layer1.style.transform = `translateY(${scroll * 0.15}px)`;

if(layer2) layer2.style.transform = `translateY(${scroll * 0.30}px)`;

if(layer3) layer3.style.transform = `translateY(${scroll * 0.45}px)`;

if(layer4) layer4.style.transform = `translateY(${scroll * 0.60}px)`;

});


/*=========================================
3D MOUSE EFFECT
=========================================*/

if(hero){

hero.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/35;

const y=(window.innerHeight/2-e.clientY)/35;

hero.style.backgroundPosition=`${x}px ${y}px`;

if(layer1) layer1.style.transform=`translate(${x}px,${y}px)`;

if(layer2) layer2.style.transform=`translate(${x*1.5}px,${y*1.5}px)`;

if(layer3) layer3.style.transform=`translate(${x*2}px,${y*2}px)`;

});

}


/*=========================================
FLOATING ICON MOTION
=========================================*/

const icons=document.querySelectorAll(".floating-icons i");

icons.forEach(icon=>{

const duration=12+Math.random()*12;

const delay=Math.random()*6;

const size=30+Math.random()*35;

icon.style.animationDuration=`${duration}s`;

icon.style.animationDelay=`${delay}s`;

icon.style.fontSize=`${size}px`;

});


/*=========================================
PARTICLE PARALLAX
=========================================*/

const particles=document.querySelectorAll(".particles span");

window.addEventListener("scroll",()=>{

const value=window.scrollY;

particles.forEach((particle,index)=>{

particle.style.transform=`translateY(${value*(0.05+index*0.01)}px)`;

});

});


/*=========================================
GLASS CARD TILT
=========================================*/

const cards=document.querySelectorAll(".glass-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=((y-rect.height/2)/18);

const rotateY=((rect.width/2-x)/18);

card.style.transform=

`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(900px) rotateX(0) rotateY(0)";

});

});


/*=========================================
HERO CONTENT PARALLAX
=========================================*/

const heroContent=document.querySelector(".hero-content");

window.addEventListener("scroll",()=>{

const scroll=window.scrollY;

if(heroContent){

heroContent.style.transform=`translateY(${scroll*0.25}px)`;

heroContent.style.opacity=1-scroll/900;

}

});


/*=========================================
BUTTON GLOW
=========================================*/

const buttons=document.querySelectorAll(".btn,.card-btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow="0 0 35px rgba(93,212,255,.8)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="";

});

});


/*=========================================
SECTION PARALLAX
=========================================*/

const sectionsParallax=document.querySelectorAll(".about,.services,.supplies");

window.addEventListener("scroll",()=>{

const scroll=window.scrollY;

sectionsParallax.forEach(section=>{

section.style.backgroundPositionY=`${scroll*0.05}px`;

});

});


/*=========================================
PERFORMANCE OPTIMIZATION
=========================================*/

let ticking=false;

window.addEventListener("scroll",()=>{

if(!ticking){

window.requestAnimationFrame(()=>{

reveal();

startCounters();

ticking=false;

});

ticking=true;

}

});

/*=========================================
HERO TYPING EFFECT
=========================================*/

const heroTitle = document.querySelector(".hero h2");

const words = [

"Services & Supply",

"Laboratory Diagnostics",

"Medical Equipment",

"Healthcare Solutions"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

if(!heroTitle) return;

const currentWord = words[wordIndex];

if(!deleting){

heroTitle.textContent = currentWord.substring(0,charIndex++);

if(charIndex > currentWord.length){

deleting = true;

setTimeout(typeEffect,1500);

return;

}

}else{

heroTitle.textContent = currentWord.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(typeEffect,deleting ? 60 : 120);

}

typeEffect();


/*=========================================
FLOATING GLOW ORBS
=========================================*/

const body = document.body;

for(let i=0;i<8;i++){

const orb=document.createElement("div");

orb.className="glow-orb";

orb.style.left=Math.random()*100+"%";

orb.style.top=Math.random()*100+"%";

orb.style.animationDuration=(18+Math.random()*12)+"s";

orb.style.animationDelay=Math.random()*5+"s";

body.appendChild(orb);

}


/*=========================================
GALLERY IMAGE ZOOM
=========================================*/

const galleryImages=document.querySelectorAll(".gallery-item img");

galleryImages.forEach(image=>{

image.addEventListener("mouseenter",()=>{

image.style.transform="scale(1.15)";

});

image.addEventListener("mouseleave",()=>{

image.style.transform="scale(1)";

});

});


/*=========================================
WHATSAPP QUICK MESSAGE
=========================================*/

const whatsapp=document.querySelector(".whatsapp");

if(whatsapp){

whatsapp.href="https://wa.me/254713074997?text=Hello%20Blessed%20Laboratory.%20I%20would%20like%20to%20request%20a%20quotation.";

}


/*=========================================
IMAGE FADE IN
=========================================*/

const images=document.querySelectorAll("img");

const imageObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="scale(1)";

}

});

});

images.forEach(img=>{

img.style.opacity="0";

img.style.transform="scale(.95)";

img.style.transition="1s";

imageObserver.observe(img);

});


/*=========================================
SERVICE CARD RIPPLE EFFECT
=========================================*/

cards.forEach(card=>{

card.addEventListener("click",function(e){

const ripple=document.createElement("span");

const size=Math.max(card.clientWidth,card.clientHeight);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.offsetX-size/2+"px";

ripple.style.top=e.offsetY-size/2+"px";

ripple.classList.add("ripple");

card.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});


/*=========================================
RANDOM ICON MOVEMENT
=========================================*/

setInterval(()=>{

icons.forEach(icon=>{

icon.style.transform=

`translate(

${Math.random()*40-20}px,

${Math.random()*40-20}px

) rotate(${Math.random()*360}deg)`;

});

},5000);


/*=========================================
STAT CARD HOVER GLOW
=========================================*/

const stats=document.querySelectorAll(".stat");

stats.forEach(stat=>{

stat.addEventListener("mouseenter",()=>{

stat.style.boxShadow="0 0 40px rgba(57,168,255,.8)";

});

stat.addEventListener("mouseleave",()=>{

stat.style.boxShadow="";

});

});


/*=========================================
PAGE VISIBILITY
=========================================*/

document.addEventListener("visibilitychange",()=>{

if(document.hidden){

console.log("Website paused");

}else{

console.log("Website resumed");

}

});

/*=========================================
GLOWING CURSOR
=========================================*/

const cursor=document.createElement("div");
cursor.className="cursor-glow";
document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});


/*=========================================
GALLERY LIGHTBOX
=========================================*/

const galleryItems=document.querySelectorAll(".gallery-item img");

const lightbox=document.createElement("div");
lightbox.className="lightbox";

const lightboxImg=document.createElement("img");

lightbox.appendChild(lightboxImg);

document.body.appendChild(lightbox);

galleryItems.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("show");

lightboxImg.src=img.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("show");

});


/*=========================================
TESTIMONIAL AUTO SLIDER
=========================================*/

const testimonials=document.querySelectorAll(".testimonial");

let currentTestimonial=0;

function testimonialSlider(){

if(testimonials.length===0) return;

testimonials.forEach(card=>{

card.style.display="none";

});

testimonials[currentTestimonial].style.display="block";

currentTestimonial++;

if(currentTestimonial>=testimonials.length){

currentTestimonial=0;

}

}

setInterval(testimonialSlider,5000);

testimonialSlider();


/*=========================================
RANDOM CARD FLOAT
=========================================*/

setInterval(()=>{

cards.forEach(card=>{

const y=(Math.random()*8)-4;

card.style.transform=`translateY(${y}px)`;

});

},4000);


/*=========================================
BUTTON RIPPLE FIX
=========================================*/

document.querySelectorAll(".btn,.card-btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.className="btn-ripple";

const diameter=Math.max(button.clientWidth,button.clientHeight);

circle.style.width=diameter+"px";

circle.style.height=diameter+"px";

circle.style.left=e.offsetX-diameter/2+"px";

circle.style.top=e.offsetY-diameter/2+"px";

button.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});


/*=========================================
NAVBAR LINK HOVER GLOW
=========================================*/

navItems.forEach(link=>{

link.addEventListener("mouseenter",()=>{

link.style.textShadow="0 0 15px #39A8FF";

});

link.addEventListener("mouseleave",()=>{

link.style.textShadow="none";

});

});


/*=========================================
SECTION ENTRANCE ANIMATION
=========================================*/

const observer=new IntersectionObserver(entries=>{

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

duration:1000,

fill:"forwards"

});

}

});

});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});


/*=========================================
PERFORMANCE FPS LIMIT
=========================================*/

let lastTime=0;

function animationLoop(timestamp){

if(timestamp-lastTime>16){

lastTime=timestamp;

}

requestAnimationFrame(animationLoop);

}

requestAnimationFrame(animationLoop);


/*=========================================
WELCOME MESSAGE
=========================================*/

setTimeout(()=>{

console.log("Blessed Laboratory Website Loaded Successfully");

},1200);


/*=========================================
END OF SCRIPT
=========================================*/
