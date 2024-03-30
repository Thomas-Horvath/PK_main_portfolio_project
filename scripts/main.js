import projects from "../datas/projects.js";  // portfolio projects' datas
import projectsEnglish from "../datas/projectsEnglish.js";  // portfolio projects' datas
import loginDatas from "../datas/emailjs_datas.js";



// hamburger menu 
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





// menu links hover

if (currentPage === '/PK_main_portfolio_project/index.html' || currentPage === '/index.html' || currentPage === '/PK_main_portfolio_project/'
    || currentPage === '/PK_main_portfolio_project/en/index.html' || currentPage === '/en/index.html' || currentPage === '/en/PK_main_portfolio_project/') {
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







// Logo color change

const logoImage = document.querySelector('.js-main-logo');

if (currentPage === '/PK_main_portfolio_project/index.html' || currentPage === '/index.html' || currentPage === '/PK_main_portfolio_project/' ||
    currentPage === '/PK_main_portfolio_project/projects.html' || currentPage === '/projects.html' ||
    currentPage === '/PK_main_portfolio_project/blog.html' || currentPage === '/blog.html' ||
    currentPage === '/PK_main_portfolio_project/cookies.html' || currentPage === '/cookies.html' ||
    currentPage === '/PK_main_portfolio_project/policy.html' || currentPage === '/policy.html' ||
    currentPage === '/PK_main_portfolio_project/impresszum.html' || currentPage === '/impresszum.html' 
    ) {

    var whiteColorSrc = './assets/img/Logo_Thomas_light.png';
    var mainColorSrc = './assets/img/Logo_Thomas_main_color.svg';

} else if (currentPage === '/PK_main_portfolio_project/en/index.html' || currentPage === '/en/index.html' || currentPage === '/en/PK_main_portfolio_project/') {
    
    whiteColorSrc = '../assets/img/Logo_Thomas_light.png';
    mainColorSrc = '../assets/img/Logo_Thomas_main_color.svg';
}

logoImage.addEventListener('mouseenter', () => {
    logoImage.src = mainColorSrc;
});
logoImage.addEventListener('mouseleave', () => {
    logoImage.src = whiteColorSrc;
});






// blog swiper script  
if (currentPage === '/PK_main_portfolio_project/index.html' || currentPage === '/index.html' || currentPage === '/PK_main_portfolio_project/'
|| currentPage === '/PK_main_portfolio_project/en/index.html' || currentPage === '/en/index.html' || currentPage === '/en/PK_main_portfolio_project/') {

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
            delay: 5000,

        },
        pagination: {
            el: ".gallery_slider-pagination",
            clickable: true,
        },

    });


    function getInitialSlidesPerView() {
        return window.innerWidth > 992 ? 2 : 1;
    }

    window.addEventListener('resize', function () {
        gallery.params.slidesPerView = getInitialSlidesPerView();
        gallery.update();
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
const serviceID = loginDatas[0].serviceID;
const templateID = loginDatas[0].templateID;
const templateParams = contactForm;
const publicKey = loginDatas[0].publicKey;


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
if (currentPage === '/PK_main_portfolio_project/index.html' || currentPage === '/index.html' || currentPage === '/PK_main_portfolio_project/'
    || currentPage === '/PK_main_portfolio_project/en/index.html' || currentPage === '/en/index.html' || currentPage === '/en/PK_main_portfolio_project/') {
    contactForm.addEventListener("submit", sendEmail);
};






// About info 
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




// project cads render

const mainPageCardWrapper = document.querySelector('.js-card-wrapper');
const projectPageCardWrapper = document.querySelector('.js-projectPage-card-wrapper');
const paginationWrapper = document.querySelector('.js-pagination');




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
                <h3>A projekt leírása:</h3>
                    <p>${data.popupDescription}</p>
                    <h3>A felhasznált technikák:</h3>
                    <ul>
                       ${data.listItem1}
                       ${data.listItem2}
                       ${data.listItem3}
                       ${data.listItem4}
                       ${data.listItem5}
                       ${data.listItem6}
                    </ul>
                    <h3>A projekt típusa:</h3>
                    <p>${data.type}</p>
                </div>
                <div class="portfolio-popup-btn-group">
                    <a href=${data.githubLink}
                        target="_blank" class="btn popup-btn">
                        <i class="fa-brands fa-github"></i>
                        Code</a>
                    <a href=${data.githubPagesLink}
                        target="_blank" class="btn popup-btn">
                        <i class="fa-solid fa-desktop"></i>Demo</a>
                </div>

            </div>
        </div>
    </div>

</div>

`
};
function cardRenderEnglish(page, data) {
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
                <h3>A projekt leírása:</h3>
                    <p>${data.popupDescription}</p>
                    <h3>A felhasznált technikák:</h3>
                    <ul>
                       ${data.listItem1}
                       ${data.listItem2}
                       ${data.listItem3}
                       ${data.listItem4}
                       ${data.listItem5}
                       ${data.listItem6}
                    </ul>
                    <h3>A projekt típusa:</h3>
                    <p>${data.type}</p>
                </div>
                <div class="portfolio-popup-btn-group">
                    <a href=${data.githubLink}
                        target="_blank" class="btn popup-btn">
                        <i class="fa-brands fa-github"></i>
                        Code</a>
                    <a href=${data.githubPagesLink}
                        target="_blank" class="btn popup-btn">
                        <i class="fa-solid fa-desktop"></i>Demo</a>
                </div>

            </div>
        </div>
    </div>

</div>

`
};




// rendering cards
if (currentPage === '/PK_main_portfolio_project/index.html' || currentPage === '/index.html' || currentPage === '/PK_main_portfolio_project/') {
    projects.slice(0, 3).forEach(data => {
        cardRender(mainPageCardWrapper, data);
    });
} else if (currentPage === '/PK_main_portfolio_project/projects.html' || currentPage === '/projects.html') {
    projects.forEach(data => {
        cardRender(projectPageCardWrapper, data);
    });
};

if (currentPage === '/PK_main_portfolio_project/en/index.html' || currentPage === '/en/index.html' || currentPage === '/en/PK_main_portfolio_project/') {
    projectsEnglish.slice(0, 3).forEach(data => {
        cardRenderEnglish(mainPageCardWrapper, data);
    });
} else if (currentPage === '/PK_main_portfolio_project/en/projects.html' || currentPage === '/en/projects.html') {
    projectsEnglish.forEach(data => {
        cardRenderEnglish(projectPageCardWrapper, data);
    });
};







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

