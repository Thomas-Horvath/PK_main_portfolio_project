export function cardRender(projects, container) {

    const cards = projects.map(data => `  
    <div class="portfolio-card">
    <img src="${data.imageSrc}" alt="${data.imageAlt}" class="portolio-img">
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

            <img src="${data.imageSrc}" alt=${data.imageAlt}>
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
                    <a href="${data.githubLink}"
                        target="_blank" class="btn popup-btn">
                        <i class="fa-brands fa-github"></i>
                        Code</a>
                    <a href="${data.githubPagesLink}"
                        target="_blank" class="btn popup-btn">
                        <i class="fa-solid fa-desktop"></i>Demo</a>
                </div>

            </div>
        </div>
    </div>

</div>`).join("");

    container.innerHTML = cards;
};
