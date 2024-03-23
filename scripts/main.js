// hamburger menu - nyitás csukás
const closeButton = document.querySelector('.js-hamburger-close-btn');
const openButton = document.querySelector('.js-hamburger-open-btn');
const nav = document.querySelector('.js-nav');
const navLinks = document.querySelectorAll('.js-nav-link');

function toggleNavClass() {
    nav.classList.toggle('openHamburgerMenu');
};
openButton.addEventListener('click', toggleNavClass);
closeButton.addEventListener('click', toggleNavClass);
navLinks.forEach((link) => {
    link.addEventListener('click', toggleNavClass);
});





/* A menü hoverjének változása görgetésre */
const sections = document.querySelectorAll(".section-link");

window.addEventListener('scroll', () => {
    const top = window.scrollY + 150; // Az eltérés miatt hozzáadunk 150 pixelt

    sections.forEach(section => {
        const id = section.getAttribute("id");

        const link = document.querySelector(`.nav-links a[href="#${id}"]`);

        if (section.offsetTop <= top && section.offsetTop + section.offsetHeight > top) {
            // Ha a szakasz fent látható, hozzáadjuk az "active" osztályt a hozzátartozó linkhez
            link.classList.add('active');
        } else {
            // Ellenkező esetben eltávolítjuk az "active" osztályt a linkről
            link.classList.remove('active');
        }
    });
});


// a header tulajdonságainak változtatása nagyobb képernyőkön
const header = document.querySelector('.header');
function changeNavBg() {
    const scrollY = window.scrollY;
    const windowWidth = window.innerWidth;

    header.style.transition = "all 0.3s ease";
    logoImage.style.transition = "all 0.3s ease";
    /* ha scroll történik akkor ez történik */
    if (scrollY > 0 || windowWidth <= 992) {
        header.style.background = "#191919";
        header.style.height = "70px";
        header.style.borderBottom = "1px solid #f5b32f8c";
        logoImage.style.width = "45px";
        logoImage.style.height = "45px";
    }
    /* ha nem akkor pedig marad ez ami elvileg az eredeti beállítés */
    else {
        header.style.height = "80px";
        header.style.background = "transparent";
        header.style.borderBottom = "0";
        logoImage.style.width = "55px";
        logoImage.style.height = "55px";
    }
}

/* ezzel hívom meg a a renderelő függvényt mikor az oldalon scroll esemény történik */
window.addEventListener("scroll", changeNavBg);
window.addEventListener("load", changeNavBg);
window.addEventListener("resize", changeNavBg);







// logó színének változtatása egér ráhúzásra

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

// const windowWidth = window.innerWidth;
// console.log(windowWidth);
// let initialSlidesPerView = 1;
// if (windowWidth > 992) {
//     initialSlidesPerView = 2;
// }

/*  blog swiper script  */
const gallery = new Swiper(".gallery_slider", {
  
    slidesPerView: getInitialSlidesPerView(),
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



function getInitialSlidesPerView() {
    return window.innerWidth > 992 ? 2 : 1;
}

// Eseményfigyelő az ablak méretének változására
window.addEventListener('resize', function () {
    // Frissítjük a slidesPerView beállítást az aktuális ablakméret alapján
    gallery.params.slidesPerView = getInitialSlidesPerView();
    gallery.update(); // Frissítjük a Swipert
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








//portfólió popup ablak

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


