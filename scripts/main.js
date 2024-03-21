// hamburger menu
const closeButton = document.querySelector('.js-hamburger-close-btn');
const openButton = document.querySelector('.js-hamburger-open-btn');
const nav = document.querySelector('.js-nav');
const navLinks = document.querySelectorAll('.js-nav-link');

function toggleNavClass() {
    nav.classList.toggle('openHamburgerMenu')
};

openButton.addEventListener('click', toggleNavClass);
closeButton.addEventListener('click', toggleNavClass);

navLinks.forEach((link) => {
    link.addEventListener('click', toggleNavClass);
});


// logó színének változtatása

// kép kiválasztása
const logoImage = document.querySelector('.js-main-logo');

// Az elérési útak
const whiteColorSrc = './assets/img/Logo_Thomas_light.png';
const mainColorSrc = './assets/img/Logo_Thomas_main_color.svg';

// Eseménykezelő hozzáadása a hover eseményhez
logoImage.addEventListener('mouseenter', () => {
    logoImage.src = mainColorSrc;
});

// Eseménykezelő hozzáadása a hover esemény vége eseményhez
logoImage.addEventListener('mouseleave', () => {
    logoImage.src = whiteColorSrc;
});




/*  gallery swiper script  */
const gallery = new Swiper(".gallery_slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    allowTouchMove: true,
    navigation: {
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
    },
    pagination: {
        el: ".gallery_slider-pagination",
        clickable: true,
    },

});
