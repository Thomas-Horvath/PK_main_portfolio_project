import hunText from "../data/hun.js";
import enText from "../data/en.js";
import initializeEventListeners from './main.js';
import projects from "../data/projects.js";
import projectsEnglish from "../data/projectsEnglish.js";

const currentPage = window.location.pathname;

const button = document.querySelector(".js-lang-selector");
//const navContent = document.querySelector(".nav-links");
const homeContent = document.querySelector(".home");
const aboutHeaderContent = document.querySelector(".about-main-heading");
const aboutSectionContent = document.querySelector(".about-section");
const aboutInfoGroup = document.querySelector(".info-group-wrapper");
const aboutBtnGroup = document.querySelector(".btn-group");
const quoteContainer = document.querySelector(".quote-container");
const mainPageCardWrapper = document.querySelector('.js-card-wrapper');
const projectPageCardWrapper = document.querySelector('.js-projectPage-card-wrapper');



let lang = "hun";

const render = (data) => {
    // if (currentPage === '/PK_main_portfolio_project/index.html' || currentPage === '/index.html' || currentPage === '/PK_main_portfolio_project/') {
    //     navContent.innerHTML = `
    // <li><a class="nav-link js-nav-link active" href="#home">${data.nav.link1}</a></li>
    // <li><a class="nav-link js-nav-link" href="#about">${data.nav.link2}</a></li>
    // <li><a class="nav-link js-nav-link" href="#skills">${data.nav.link3}</a></li>
    // <li><a class="nav-link js-nav-link" href="#portfolio">${data.nav.link4}</a></li>
    // <li><a class="nav-link js-nav-link" href="#blog">${data.nav.link5}</a></li>
    // <li><a class="nav-link js-nav-link" href="#contact">${data.nav.link6}</a></li>
    // `
    // } else {
    //     navContent.innerHTML = `
    // <li><a class="nav-link js-nav-link active" href="../index.html">${data.nav.link1}</a></li>
    // <li><a class="nav-link js-nav-link" href="../index.html/#about">${data.nav.link2}</a></li>
    // <li><a class="nav-link js-nav-link" href="../index.html/#skills">${data.nav.link3}</a></li>
    // <li><a class="nav-link js-nav-link" href="../index.html/#portfolio">${data.nav.link4}</a></li>
    // <li><a class="nav-link js-nav-link" href="../index.html/#blog">${data.nav.link5}</a></li>
    // <li><a class="nav-link js-nav-link" href="../index.html/#contact">${data.nav.link6}</a></li>
    // `
    // }

    homeContent.innerHTML = `
    <h1>${data.home.name}</h1>
    <div class="content-container">
        <p>${data.home.profession1}</p>
        <p>${data.home.profession2}</p>
    </div>
    <h3>${data.home.subTitle}</h3>

    <a href="#contact" class="btn home-btn"><i class="fa-solid fa-paper-plane"></i>${data.home.buttonText}</a>

    <div class="home-social-media">
        <a class="soc-icon" href="https://www.facebook.com/ThomasHorvath86" target="_blank">
            <i class="bi bi-facebook"></i></a>
        <a class="soc-icon" href="https://www.linkedin.com/in/thomas-horvath-8886b2273/" target="_blank">
            <i class="bi bi-linkedin"></i></a>
        <a class="soc-icon" href="https://github.com/Thomas-Horvath" target="_blank">
            <i class="bi bi-github"></i></a>
    </div>
    `

    aboutHeaderContent.innerHTML = `
                <h2>${data.about.headingTitle}</h2>
                <span>${data.about.headingSpan}</span>
    `

    aboutSectionContent.innerHTML = `
                <h3>${data.about.mainTitle}</h3>
                <p>${data.about.firstParagraph}</p>
                <p>${data.about.secundParagraph}</p>
                <p>${data.about.thirdParagraph}</p>
                <p>${data.about.forthParagraph}</p>
                <p>${data.about.fifthParagraph}</p>

    `

    aboutInfoGroup.innerHTML = `
                <h2>${data.aboutInfo.title}</h2>
                <div class="info-group">
                    <div class="info-title">
                        <h3>${data.aboutInfo.firstInfoTitle}</h3>
                        <i class="fa-solid fa-circle-arrow-down title-icon"></i>
                    </div>
                    <div class="info-content">${data.aboutInfo.firstInfoContent}</div>
                </div>
                <div class="info-group">
                    <div class="info-title">
                        <h3>${data.aboutInfo.secundInfoTitle}</h3>
                        <i class="fa-solid fa-circle-arrow-down title-icon"></i>
                    </div>
                    <div class="info-content">${data.aboutInfo.secundInfoContent}</div>
                </div>
                <div class="info-group">
                    <div class="info-title">
                        <h3>${data.aboutInfo.thirdInfoTitle}</h3>
                        <i class="fa-solid fa-circle-arrow-down title-icon"></i>
                    </div>
                    <div class="info-content">${data.aboutInfo.thirdInfoContent}</div>
                </div>
                <div class="info-group">
                    <div class="info-title">
                        <h3>${data.aboutInfo.forthInfoTitle}</h3>
                        <i class="fa-solid fa-circle-arrow-down title-icon"></i>
                    </div>
                    <div class="info-content">${data.aboutInfo.forthInfoContent}</div>
                </div>
                <div class="info-group">
                    <div class="info-title">
                        <h3>${data.aboutInfo.fifthInfoTitle}</h3>
                        <i class="fa-solid fa-circle-arrow-down title-icon"></i>
                    </div>
                    <div class="info-content">${data.aboutInfo.fifthInfoContent}</div>
                </div>
    `



    aboutBtnGroup.innerHTML = `
                <a href="#contact" class="btn about-btn">${data.about.contactButton}<i
                class="fa-solid fa-arrow-right"></i></a>
                <a download target="_blank" href="./assets/download/CV_2023hu.pdf" class="btn-secund">
                <i class="fa-solid fa-file-arrow-down"></i>${data.about.cvButton}</a>
    `
    quoteContainer.innerHTML = `
                <p>${data.quote}</p>
                <p>- Dale Carnegie</p>
    `
};


function cardRender(obj, page, numberOfItems = obj.length) {
    const projectsEntries = Object.entries(obj).slice(0, numberOfItems);

    for (const [_, data] of projectsEntries) {

        const content = `
        
    <div class="portfolio-card">
    <img src=${data.imageSrc} alt=${data.imageAlt} class="portolio-img">
    <h2 class="portfolio-card-title">${data.title}</h2>

    <div class="portfolio-content">
        <p class="portfolio-description">${data.cardDescription}</p>
        <h4 class="portfolio-details">${data.technologies.join('-')}</h4>
        <div class="btn btn-portfolio"> ${data.buttonContent}<i class="fa-solid fa-up-right-from-square"></i>
        </div>
    </div>

    <div class="portfolio-popup">
        <i class="fa-regular fa-circle-xmark close-btn"></i>
        <h2 class="portfolio-popup-header">${data.title}</h2>
        <div class="portfolio-popup-content-container">

            <img src=${data.imageSrc} alt=${data.imageAlt}>
            <div class="content-container">
                <div class="portfolio-popup-content-description">
                <h3>${data.popupDescriptionTitle}</h3>
                    <p>${data.popupDescription}</p>
                    <h3>${data.popupTehnologies}</h3>
                    <ul>
                    ${data.technologies.map(tech => `<li>${tech}</li>`).join('')}
                    </ul>
                    <h3>${data.popupProjectType}</h3>
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
        page.innerHTML += content;
    }
};


// if (currentPage === '/PK_main_portfolio_project/index.html' || currentPage === '/index.html' || currentPage === '/PK_main_portfolio_project/') {
//     button.addEventListener('click', () => {
//         if (lang === "hun") {
//             lang = "en";
//         } else {
//             lang = "hun"
//         }
//         mainPageCardWrapper.innerHTML = "";
//         if (lang === "hun") {
//             render(hunText);
//             cardRender(projects, mainPageCardWrapper, 3);
//             button.src = "./assets/img/great-britain-flag.png";
//         } else if (lang === "en") {
//             render(enText);
//             cardRender(projectsEnglish, mainPageCardWrapper, 3);
//             button.src = "./assets/img/hungarian-flag.png";
//         }
//         console.log(lang);
//         initializeEventListeners();
//     });

//     render(hunText);
//     cardRender(projects, mainPageCardWrapper, 3);
//     initializeEventListeners();

// } else {
//     button.addEventListener('click', () => {
//         if (lang === "hun") {
//             lang = "en";
//         } else {
//             lang = "hun"
//         }

//         projectPageCardWrapper.innerHTML = "";
//         if (lang === "hun") {
//             render(hunText);
//             cardRender(projects, projectPageCardWrapper);
//             button.src = "./assets/img/great-britain-flag.png";
//         } else if (lang === "en") {
//             render(enText);
//             cardRender(projectsEnglish, projectPageCardWrapper);
//             button.src = "./assets/img/hungarian-flag.png";
//         }
//         console.log(lang);
//         initializeEventListeners();
//     });
//     render(hunText);
//     cardRender(projectsEnglish, projectPageCardWrapper);
//     initializeEventListeners();
// }

if (currentPage === '/PK_main_portfolio_project/index.html' || currentPage === '/index.html' || currentPage === '/PK_main_portfolio_project/' || currentPage === '/') {
    render(hunText);
    cardRender(projects, mainPageCardWrapper, 3);
    initializeEventListeners();
} else  {
    cardRender(projects, projectPageCardWrapper);
    initializeEventListeners();
}

