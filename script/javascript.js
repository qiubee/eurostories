var zoekBalk = document.querySelector('input[type="search"]');
var navigatieBlok = document.querySelector('nav');
var inlogKnop = document.querySelector('nav a');

var selecteerJaar = document.querySelector('body > footer p span');
var huidigJaartal = new Date().getFullYear();
selecteerJaar.textContent = huidigJaartal;


var zoekAttribuut = document.querySelector('header button[type="submit"]');
zoekAttribuut.setAttribute('type', 'button');


var zoekKnop = document.querySelector('header button[type="button"]');
zoekKnop.addEventListener('click', function () {
    zoekBalk.classList.toggle('zoeken');
    navigatieBlok.classList.toggle('verborgen');
    inlogKnop.classList.toggle('verborgen');
    });


function removeClass() {
    zoekBalk.classList.remove('zoeken');
    navigatieBlok.classList.remove('verborgen');
    inlogKnop.classList.remove('verborgen');
}

if ( document.querySelector('body > article') !== null) {
document.querySelector('body > article').addEventListener('click', removeClass);
}

if (document.querySelector('body > form:first-of-type') !== null) {
document.querySelector('body > form:first-of-type').addEventListener('click', removeClass);
}

if (document.querySelector('body > main') !== null) {
document.querySelector('body > main').addEventListener('click', removeClass);
}

if (document.querySelector('body > footer') !== null) {
document.querySelector('body > footer').addEventListener('click', removeClass);
}

function checkInput() {
var zoekVeldLengte = document.querySelector('input[type="search"]').value.length;

    if (zoekVeldLengte >= 1) {
        zoekAttribuut.setAttribute('type', 'search');
    }

    else {
        zoekAttribuut.setAttribute('type', 'button');
    }
}
zoekBalk.addEventListener('keyup', checkInput);



