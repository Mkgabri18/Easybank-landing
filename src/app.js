import style from './styles/index.scss';
import _hyperscript from 'hyperscript.org';
// Custom npm library
import domToolkit from 'dom-toolkit-js';
const { Selectors } = domToolkit;

import './assets/logo.svg';
import './assets/logo-white.svg';
import './assets/bg-intro-mobile.svg';
import './assets/bg-intro-desktop.svg';
import './assets/image-mockups.png';
import './assets/icon-api.svg';
import './assets/icon-budgeting.svg';
import './assets/icon-onboarding.svg';
import './assets/icon-online.svg';
import './assets/image-confetti.jpg';
import './assets/image-currency.jpg';
import './assets/image-restaurant.jpg';
import './assets/image-plane.jpg';

_hyperscript.browserInit();
const { selectId } = new Selectors()

console.log("Hello World, time to init")

// My npm Library for DOM manipulation
selectId('btnHamburger').onClick(toggleMenu);


function toggleMenu() {
    selectId('header').toggleClass('open');
}

selectId('InviteBtn').onClick((_, target) => {
    console.log("click on invite button", _, target)
    target.inHtml('Inviting...');
    setTimeout(() => target.inHtml('Request sended'), 3000)
})

// JS code for toggle menu
// const menuHamburger = document.getElementById('btnHamburger');
// const header = document.querySelector('.header');
// const fadeElems = document.querySelectorAll('.has-fade');


// menuHamburger.addEventListener('click', () => {
//     if(header.classList.contains('open')) {
//         fadeElems.forEach(function(element) {
//             element.classList.remove('fade-in');
//             element.classList.add('fade-out');
//         });
//     } else {
//         fadeElems.forEach(function(element) {
//             element.classList.remove('fade-out');
//             element.classList.add('fade-in');
//         });
//     }
// });
