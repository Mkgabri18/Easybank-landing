import style from './styles/index.scss';
import './assets/logo.svg';
import './assets/logo-white.svg';

console.log("Hello World, time to init")
/*let template = require("./templates/components/users.pug");

let locals = {
    users: [
        "user1",
        "user2",
        "user3",
        "user4",
        "user5"
    ]
};
<F3>
document.querySelector("main").innetHTML = template(locals);
*/

const menuHamburger = document.querySelector('#btnHambuger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');


menuHamburger.addEventListener('click', () => {
    console.log('open menu');
    // Open/Close Hamburger
    if(header.classList.contains('open')) {
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    } else {
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});
