/* Show/Hide Menu */
const navMenu = document.getElementById('nav--menu'),
      navPress = document.getElementById('nav-press'),
      navClose = document.getElementById('nav-close');

/* Show menu */
if (navPress) {
    navPress.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Hide menu */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}
/* remove menu */
const navLink = document.querySelectorAll('nav__link')

const LinkActioin = () =>{
    const navMenu = document.getElementById('nav--menu')
     navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', LinkActioin))

/* blur */
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add ('blur-header')
    : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


/* ps symbol */
const shapesContainer = document.querySelector('.shapes-container');
const shapes = ['◯', '✕', '△', '□'];
const colors = ['#0082fc', '#ff1b1c', '#2dcc6f', '#f0e93c'];

function createShape() {
    const shapeElement = document.createElement('div');
    shapeElement.classList.add('shape');
    shapeElement.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    shapeElement.style.color = colors[Math.floor(Math.random() * colors.length)];

   
    shapeElement.style.left = Math.random() * 100 + 'vw';
    shapeElement.style.top = Math.random() * -20 + 'vh'; 

   
    shapesContainer.appendChild(shapeElement);

    
    shapeElement.addEventListener('animationend', () => {
        shapeElement.remove();
    });
}


setInterval(createShape, 1500);

/* email javascript */
const contactForm = document.getElementById('contact-form')
   contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publickey
    emailjs.sendForm('service_Xyz4409','template_yhssvcj','#contact-form','5gt-9-Ldp6Tl4H_3e')
    .then(() =>{

        //show sent messages
        contactMessage.textContent = 'Message sent succesfully ✅'
        

        //Remove the messages after 5sec
        setTimeout(() =>{
              contactMessage.textContent = '' 
        }, 5000)

        //clear
        contactForm.reset()
    }, () => {

        //error messages
        contactMessage.textContent = 'Message did not sent (error) ❌'
    })

}

contactForm.addEventListener('submit', sendEmail)

/* up scroll */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                          : scrollUp.classList.remove('show-scroll');
}


window.addEventListener('scroll', scrollUp);

/* scroll section */
const sections = document.querySelectorAll('section[id]');

/* scroll release */
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 400 , 
   // reset: true  // animation reset

})
sr.reveal('.home__data, .Education, .skills, .contact__container ')
sr.reveal('.home__img', {delay: 600})
sr.reveal('.blogs__card, .hobbies__card', {interval: 100})
sr.reveal('.about__content', {origin: 'left' })
sr.reveal('.about__img', {origin: 'right' })



