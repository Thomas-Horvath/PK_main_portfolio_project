import projects from "../datas/projects.js";


// hamburger menu - nyitás csukás
const closeButton = document.querySelector('.js-hamburger-close-btn');
const openButton = document.querySelector('.js-hamburger-open-btn');
const nav = document.querySelector('.js-nav');
const navLinks = document.querySelectorAll('.js-nav-link');
const currentPage = window.location.pathname;
console.log(currentPage);

function toggleNavClass() {
    nav.classList.toggle('openHamburgerMenu');
};
openButton.addEventListener('click', toggleNavClass);
closeButton.addEventListener('click', toggleNavClass);
navLinks.forEach((link) => {
    link.addEventListener('click', toggleNavClass);
});





/* A menü hoverjének változása görgetésre */

if (currentPage === '/index.html') {
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
};







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
const formInputs = document.querySelectorAll(".form-input");

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




// project cads render

const mainPageCardWrapper = document.querySelector('.js-card-wrapper');
const projectPageCardWrapper = document.querySelector('.js-projectPage-card-wrapper');
const paginationWrapper = document.querySelector('.js-pagination');



// const cardsPerPage = 6;
// let Page = 1;

function cardRender(page, data) {
    page.innerHTML += `
    <div class="portfolio-card">
    <img src=${data.imageSrc} alt=${data.imageAlt} class="portolio-img">
    <h2 class="portfolio-card-title">${data.title}</h2>

    <div class="portfolio-content">
        <p class="portfolio-description">${data.cardDescription}</p>
        <h4 class="portfolio-details">${data.technolgies}</h4>
        <div class="btn btn-portfolio">Részletek <i class="fa-solid fa-up-right-from-square"></i>
        </div>
    </div>

    <div class="portfolio-popup">
        <i class="fa-regular fa-circle-xmark close-btn"></i>
        <h2 class="portfolio-popup-header">${data.title}</h2>
        <div class="portfolio-popup-content-container">

            <img src=${data.imageSrc} alt=${data.imageAlt}>
            <div class="content-container">
                <div class="portfolio-popup-content-description">
                    <p>${data.popupDescription}</p>
                    <ul>
                       ${data.listItem1}
                       ${data.listItem2}
                       ${data.listItem3}
                       ${data.listItem4}
                       ${data.listItem5}
                       ${data.listItem6}
                    </ul>
                </div>
                <div class="portfolio-popup-btn-group">
                    <a href=${data.githubLink}
                        target="_blank" class="btn popup-btn">
                        <i class="fa-brands fa-github"></i>
                        Github</a>
                    <a href=${data.githubPagesLink}
                        target="_blank" class="btn popup-btn">
                        <i class="fa-solid fa-desktop"></i>Nézd meg</a>
                </div>

            </div>
        </div>
    </div>

</div>

`
};


// function renderCards(data) {
//     const startIndex = (Page - 1) * cardsPerPage;
//     const endIndex = Math.min(startIndex + cardsPerPage, data.length);

//     projectPageCardWrapper.innerHTML = ''; 


//     for (let i = startIndex; i < endIndex; i++) {
//         const card = data[i];
//         cardRender(projectPageCardWrapper, card);

//     }
// }

// function renderPagination(data) {
//     const totalPages = Math.ceil(data.length / cardsPerPage);
//     paginationWrapper.innerHTML = '';

//     for (let i = 1; i <= totalPages; i++) {
//         const button = document.createElement('button');
//         button.textContent = i;
//         button.classList.add('pagination-btn','btn');
//         button.addEventListener('click', () => {
//             Page = i;
//             renderCards(data);
//             updatePaginationButtons();
//         });
//         paginationWrapper.appendChild(button);
//     }

//     updatePaginationButtons();
// }

// function updatePaginationButtons() {
//     const buttons = document.querySelectorAll('.pagination-btn');
//     buttons.forEach(button => {
//         if (parseInt(button.textContent) === Page) {
//             button.classList.add('activeBtn');
//         } else {
//             button.classList.remove('activeBtn');
//         }
//     });
// }



// rendering cards
if (currentPage === '/index.html') {
    projects.slice(0, 3).forEach(data => {
        cardRender(mainPageCardWrapper, data);
    })
} else if (currentPage === '/projects.html') {
    projects.forEach(data => {
        cardRender(projectPageCardWrapper, data);
        //renderCards(products)
        // renderPagination(products)
    })
};







//portfólió popup ablak

let modalViews = document.querySelectorAll(".portfolio-popup"),
    modalBtns = document.querySelectorAll(".btn-portfolio"),
    modalCloses = document.querySelectorAll(".close-btn");

/*  modal függvény létrehozása */
let modal = function (modalClick) {
    // a mmodalClickben kapott  indexű elemhez jozzáadja az active-modal osztályt ami ccs-ben a megjelenésért felelős
    modalViews[modalClick].classList.add("activePopUp");

    modalViews[modalClick].addEventListener("click", function (e) {
        // Ellenőrizzük, hogy a kattintás a modal tartalmán belül vagy kívül történt
        if (e.target === this) {
            closeModal(modalClick);
        }
    });
};
/* a closeModal függvény létrehozása */
let closeModal = function (modalClick) {
    modalViews[modalClick].classList.remove("activePopUp");
}

//végig megy a gombokon és futtat egy egy függvényt
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

