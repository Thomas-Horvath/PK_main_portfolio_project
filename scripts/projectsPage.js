import { cardRender } from "./cardRender.js";
import projects from "../data/projects.js";
import { initializeModals, initializeNavLinks } from './projectModal.js';
const projectPageCardWrapper = document.querySelector('.js-projectPage-card-wrapper');
const selectBtns = document.querySelectorAll('.js-project-btn');
const paginationBtns = document.querySelector('.js-pagination');


const ITEMS_PER_PAGE = 6;

function filterProducts(projects, category) {
    if (category === 'All' || category === '') {
        return projects;
    } else {
        return projects.filter(project => project.type === category);
    }
};

function renderPaginationButtons(totalItems) {
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    let buttonsHtml = '';
    for (let i = 1; i <= totalPages; i++) {
        buttonsHtml += `<button class="pagination-btn btn" data-page="${i}">${i}</button>`;
    }
    paginationBtns.innerHTML = buttonsHtml;

};

function handlePagination(projects, container, page = 1) {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedProjects = projects.slice(startIndex, endIndex);
    cardRender(paginatedProjects, container);
    initializeModals();
    initializeNavLinks();
};

function setActiveButton(buttons, selectedBtn, activeClass) {
    buttons.forEach(btn => btn.classList.remove(activeClass));
    selectedBtn.classList.add(activeClass);
};



function selectProjects(projects, container) {
    selectBtns.forEach(btn => {

        btn.addEventListener('click', () => {
            setActiveButton(selectBtns, btn, 'select-active');
            const category = btn.getAttribute('data-category');
            const selectedProjects = filterProducts(projects, category);
            console.log(selectedProjects.length)

            renderPaginationButtons(selectedProjects.length)
            handlePagination(selectedProjects, container);

            const firstPaginationBtn = paginationBtns.querySelector('.pagination-btn');
            if (firstPaginationBtn) {
                setActiveButton(paginationBtns.querySelectorAll('.pagination-btn'), firstPaginationBtn, 'select-active');
            }
        });
    });

    renderPaginationButtons(projects.length);
    handlePagination(projects, container);

    const firstPaginationBtn = paginationBtns.querySelector('.pagination-btn');
    if (firstPaginationBtn) {
        setActiveButton(paginationBtns.querySelectorAll('.pagination-btn'), firstPaginationBtn, 'select-active');
    }

    paginationBtns.addEventListener('click', (event) => {

        if (event.target.classList.contains('pagination-btn')) {


            const page = parseInt(event.target.getAttribute('data-page'), 10);
            const category = document.querySelector('.js-project-btn.select-active')?.getAttribute('data-category') || 'All';
            const selectedProjects = filterProducts(projects, category);
            handlePagination(selectedProjects, container, page);
            setActiveButton(paginationBtns.querySelectorAll('.pagination-btn'), event.target, 'select-active');
        }
    });

    initializeModals();
    initializeNavLinks();
}

selectProjects(projects, projectPageCardWrapper);


