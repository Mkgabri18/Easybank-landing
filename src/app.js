import style from './styles/index.scss';
import _hyperscript from 'hyperscript.org';

import './assets/logo.svg';
import './assets/logo-white.svg';

_hyperscript.browserInit();

console.log("Hello World, time to init")

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
