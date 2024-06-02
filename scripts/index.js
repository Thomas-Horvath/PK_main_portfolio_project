import { cardRender } from "./cardRender.js";
import projects from "../data/projects.js";
import { initializeModals, initializeNavLinks } from './projectModal.js';
const mainPageCardWrapper = document.querySelector('.js-card-wrapper');

function render() {
    const threeCard = projects.slice(0, 3);
    cardRender(threeCard, mainPageCardWrapper);
}

render();


document.addEventListener('DOMContentLoaded', () => {
    initializeModals();
    initializeNavLinks();
});

