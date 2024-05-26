let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

const sr = ScrollReveal({
    distance: '40px',
    duration: 2500,
    reset: true
});

sr.reveal('.logo',{delay:200, origin: 'left'});
sr.reveal('.navbar',{delay:400, origin: 'top'});
sr.reveal('.menu-btn',{delay:520, origin: 'right'});

sr.reveal('.texto-inicio span',{delay:600, origin: 'top'});
sr.reveal('.texto-inicio h1',{delay:680, origin: 'left'});
sr.reveal('.texto-inicio p',{delay:750, origin: 'right'});

sr.reveal('.btn-cv',{delay:860, origin: 'left'});

sr.reveal('.redes p',{delay:950, origin: 'bottom'});
sr.reveal('.social',{delay:950, origin: 'bottom'});

sr.reveal('.imagen-inicio',{delay:1000, origin: 'right'});
