export function initializeModals() {
    let modalViews = document.querySelectorAll(".portfolio-popup"),
        modalBtns = document.querySelectorAll(".btn-portfolio"),
        modalCloses = document.querySelectorAll(".close-btn");

    let modal = function (modalClick) {
        modalViews[modalClick].classList.add("activePopUp");
        modalViews[modalClick].addEventListener("click", function (e) {
            if (e.target === this) {
                closeModal(modalClick);
            }
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
}

export function initializeNavLinks() {
    const navLinks = document.querySelectorAll('.js-nav-link');
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            const nav = document.querySelector('.nav'); // Add this line to define the nav element
            nav.classList.remove("openHamburgerMenu");
        });
    });
}
