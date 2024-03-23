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
const infoBoxes = document.querySelectorAll('.info-title');

infoBoxes.forEach((box) => {
    const icon = box.querySelector('.title-icon'); // Az adott boxhoz tartozó ikon
    const content = box.nextElementSibling; // Az adott boxhoz tartozó content
    
    box.addEventListener('click', function () {
        const isDisplayBlock = content.classList.contains('displayBlock');
        
        // Az összes content elrejtése
        document.querySelectorAll('.info-content').forEach(item => item.classList.remove('displayBlock'));
        // Az összes ikon átállítása arrow-down-ra
        document.querySelectorAll('.title-icon').forEach(item => item.classList.replace('fa-circle-arrow-up', 'fa-circle-arrow-down'));
        
        // Az aktuális content megjelenítése és az ikon beállítása
        content.classList.toggle('displayBlock', !isDisplayBlock);
        icon.classList.toggle('fa-circle-arrow-up', !isDisplayBlock);
        icon.classList.toggle('fa-circle-arrow-down', isDisplayBlock);
    });
});






// dark theme
// const themeBtn = document.querySelector('.js-dark-theme-btn');
// const html = document.documentElement;
// const wave = document.querySelector('.js-wave')

// if (localStorage.getItem('theme') === 'light') {
//     html.classList.add('light');
//     wave.src = './assets/img/wave-white.svg';

// }

// themeBtn.addEventListener('click', function () {
//     html.classList.toggle('light');

//     if (html.classList.contains('light')) {
//         wave.src = './assets/img/wave-white.svg';
//         localStorage.setItem('theme', 'light');
//     } else {
//         wave.src = './assets/img/wave.svg';
//         localStorage.setItem('theme', 'dark');
//     }
// });



// // dark light téma megörzése újratöltés esetén is
// document.addEventListener('DOMContentLoaded', function () {
//     const html = document.documentElement;
//     const theme = localStorage.getItem('theme');

//     // Ha nincs tárolt téma, vagy ha az üres, akkor az alapértelmezett téma beállítása
//     if (!theme || (theme !== 'light' && theme !== 'dark')) {

//         localStorage.setItem('theme', 'dark'); // Tároljuk az alapértelmezett témát
//         return; // Kilépünk a függvényből, mivel nem kell tovább futtatni
//     }

//     // Ellenkező esetben beállítjuk a tárolt téma alapján
//     html.classList.add(theme);
// });





const modalViews = document.querySelectorAll(".portfolio-popup"),
    modalBtns = document.querySelectorAll(".btn-portfolio"),
    modalCloses = document.querySelectorAll(".close-btn");



/*  modal függvény létrehozása */
let modal = function (modalClick) {
    // a mmodalClickben kapott  indexű elemhez jozzáadja az active-modal osztályt ami ccs-ben a megjelenésért felelős
    modalViews[modalClick].classList.add("active");

    modalViews[modalClick].addEventListener("click", function (e) {
        // Ellenőrizzük, hogy a kattintás a modal tartalmán belül vagy kívül történt
        if (e.target === this) {
            closeModal(modalClick);
        }
    });
};
/* a closeModal függvény létrehozása */
let closeModal = function (modalClick) {
    modalViews[modalClick].classList.remove("active");
}




// végig megy a gombokon és futtat egy egy függvényt
modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    })
})




modalCloses.forEach((modalClose, i) => {
    modalClose.addEventListener("click", () => {
        closeModal(i);
    });
});


