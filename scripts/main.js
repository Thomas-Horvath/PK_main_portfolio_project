import loginData from "../data/emailjs_data.js"; // emailjs' login data

// hamburger menu 
const closeButton = document.querySelector('.js-hamburger-close-btn');
const openButton = document.querySelector('.js-hamburger-open-btn');
const nav = document.querySelector('.js-nav');
const currentPage = window.location.pathname;
console.log(currentPage);


function toggleNavClass() {
    nav.classList.toggle('openHamburgerMenu');
};
openButton.addEventListener('click', toggleNavClass);
closeButton.addEventListener('click', toggleNavClass);


// menu links hover

if (currentPage === '/PK_main_portfolio_project/index.html' || currentPage === '/index.html' || currentPage === '/PK_main_portfolio_project/') {
    const sections = document.querySelectorAll(".section-link");

    window.addEventListener('scroll', () => {
        const top = window.scrollY + 150;

        sections.forEach(section => {
            const id = section.getAttribute("id");

            const link = document.querySelector(`.nav-links a[href="#${id}"]`);

            if (section.offsetTop <= top && section.offsetTop + section.offsetHeight > top) {

                link.classList.add('active');
            } else {

                link.classList.remove('active');
            }
        });
    });


    const header = document.querySelector('.header');
    function changeNavBg() {
        const scrollY = window.scrollY;
        const windowWidth = window.innerWidth;

        header.style.transition = "all 0.3s ease";
        logoImage.style.transition = "all 0.3s ease";

        if (scrollY > 0 || windowWidth <= 992) {
            header.style.background = "#191919";
            header.style.height = "70px";
            header.style.borderBottom = "1px solid #f5b32f8c";
            logoImage.style.width = "45px";
            logoImage.style.height = "45px";
        }

        else {
            header.style.height = "80px";
            header.style.background = "transparent";
            header.style.borderBottom = "0";
            logoImage.style.width = "55px";
            logoImage.style.height = "55px";
        }
    }

    window.addEventListener("scroll", changeNavBg);
    window.addEventListener("load", changeNavBg);
    window.addEventListener("resize", changeNavBg);
};







// Main logo color change
//I can't change the color of the svg image with css when dragging the mouse over it. 
//I could only solve it with javascript.

const logoImage = document.querySelector('.js-main-logo');

let whiteColorSrc = './assets/img/Logo_Thomas_light.png';
let mainColorSrc = './assets/img/Logo_Thomas_main_color.svg';

logoImage.addEventListener('mouseenter', () => {
    logoImage.src = mainColorSrc;
});
logoImage.addEventListener('mouseleave', () => {
    logoImage.src = whiteColorSrc;
});






// blog swiper script  
if (currentPage === '/PK_main_portfolio_project/index.html' || currentPage === '/index.html' || currentPage === '/PK_main_portfolio_project/') {

    const blog = new Swiper(".blog_slider", {

        slidesPerView: getInitialSlidesPerView(),
        spaceBetween: 20,
        loop: true,
        allowTouchMove: true,
        navigation: {
            nextEl: ".swiper-button-prev",
            prevEl: ".swiper-button-next",
        },
        autoplay: {
            delay: 5000,

        },
        pagination: {
            el: ".blog_slider-pagination",
            clickable: true,
        },

    });


    function getInitialSlidesPerView() {
        return window.innerWidth > 992 ? 2 : 1;
    }

    window.addEventListener('resize', function () {
        blog.params.slidesPerView = getInitialSlidesPerView();
        blog.update();
    });

};







// Contact Section 

//label 
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

/* ============== Send Email By EmailJS ============== */

const contactForm = document.getElementById("contact-form");
const statusBox = document.querySelector(".form-status-box p");

// emailjs login datas
const serviceID = loginData[0].serviceID;
const templateID = loginData[0].templateID;
const templateParams = contactForm;
const publicKey = loginData[0].publicKey;


function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, templateParams, publicKey).then(response => {
        console.log(response.status, response.text);
        statusBox.textContent = "Az üzenetet sikeresen elküldtük! ✅"
        setTimeout(() => {
            statusBox.textContent = ""
        }, 4000);
        contactForm.reset();
        const labels = contactForm.querySelectorAll('.form-label');
        labels.forEach(label => {
            label.classList.remove('focus');
        });
    },
        (error) => {
            console.log(error);
            statusBox.textContent = "Az üzenetet nem sikerült elküldeni! ❌"
            setTimeout(() => {
                statusBox.textContent = ""
            }, 4000);
        }
    );
}
if (currentPage === '/PK_main_portfolio_project/index.html' || currentPage === '/index.html' || currentPage === '/PK_main_portfolio_project/') {
    contactForm.addEventListener("submit", sendEmail);
};






// About info 
function initializeEventListeners() {
    const infoBoxes = document.querySelectorAll('.info-title');

    infoBoxes.forEach((box) => {

        const icon = box.querySelector('.title-icon');
        const content = box.nextElementSibling;

        box.addEventListener('click', function () {

            const isDisplayBlock = content.classList.contains('displayBlock');

            document.querySelectorAll('.info-content').forEach(item => item.classList.remove('displayBlock'));

            document.querySelectorAll('.title-icon').forEach(item => item.classList.replace('fa-circle-arrow-up', 'fa-circle-arrow-down'));


            content.classList.toggle('displayBlock', !isDisplayBlock);
            icon.classList.toggle('fa-circle-arrow-up', !isDisplayBlock);
            icon.classList.toggle('fa-circle-arrow-down', isDisplayBlock);
        });
    });

    const navLinks = document.querySelectorAll('.js-nav-link');
    navLinks.forEach((link) => {
        link.addEventListener('click', toggleNavClass);
    });

    //portfolio  popup window

    let modalViews = document.querySelectorAll(".portfolio-popup"),
        modalBtns = document.querySelectorAll(".btn-portfolio"),
        modalCloses = document.querySelectorAll(".close-btn");


    let modal = function (modalClick) {
        modalViews[modalClick].classList.add("activePopUp");
        modalViews[modalClick].addEventListener("click", function (e) {
            if (e.target === this) {
                closeModal(modalClick);
            };
        });
    };

    let closeModal = function (modalClick) {
        modalViews[modalClick].classList.remove("activePopUp");
    };


    modalBtns.forEach((modalBtn, i) => {
        modalBtn.addEventListener('click', () => {
            modal(i);
        });
    });
    modalCloses.forEach((modalClose, i) => {
        modalClose.addEventListener("click", () => {
            closeModal(i);
        });
    });

};

export default initializeEventListeners;







