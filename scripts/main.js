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




/*  blog swiper script  */
const gallery = new Swiper(".gallery_slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    allowTouchMove: true,
    navigation: {
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
    },
    autoplay: {
        delay: 3000,

    },
    pagination: {
        el: ".gallery_slider-pagination",
        clickable: true,
    },

});



/* ============== Contact Section ============== */
formInputs = document.querySelectorAll(".form-input");

formInputs.forEach(input => {
    input.addEventListener("focus", () => {
        let targetLabel = document.querySelector(`.form-label[for=${input.id}]`);
        targetLabel.classList.add("focus");
    });
    input.addEventListener("blur", () => {
        let targetLabel = document.querySelector(`.form-label[for=${input.id}]`);
        if (input.value.length === 0)
            targetLabel.classList.remove("focus");
    });
});




//  info tartalom megjelenítése

const icons = document.querySelectorAll('.title-icon');

icons.forEach((icon) => {
    icon.addEventListener('click', function () {
        // Az ikon szülőelemének (info-title) kiválasztása
        const parent = this.closest('.info-title');
        // Az adott csoportba tartozó content kiválasztása
        const content = parent.nextElementSibling;

        // A többi content elrejtése és az összes ikon átállítása arrow-down-ra
        const allContents = document.querySelectorAll('.info-content');
        const allIcons = document.querySelectorAll('.title-icon');
        allContents.forEach((item, index) => {
            if (item !== content) {
                item.classList.remove('displayBlock');
                allIcons[index].classList.remove('fa-circle-arrow-up');
                allIcons[index].classList.add('fa-circle-arrow-down');
            }
        });

        // Az aktuális content megjelenítése vagy elrejtése toggle segítségével
        content.classList.toggle('displayBlock');

        // Az ikon állapotának kezelése (arrow-up vagy arrow-down)
        if (content.classList.contains('displayBlock')) {
            icon.classList.remove('fa-circle-arrow-down');
            icon.classList.add('fa-circle-arrow-up');
        } else {
            icon.classList.remove('fa-circle-arrow-up');
            icon.classList.add('fa-circle-arrow-down');
        }
    });
});



// dark thema
const themaBtn = document.querySelector('.js-dark-thema-btn');
const html = document.documentElement; 

themaBtn.addEventListener('click', function () {
   html.classList.toggle('light');
});