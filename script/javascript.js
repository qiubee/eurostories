// Variabelen
var zoekBalk = document.querySelector('input[type="search"]');
var navigatieBlok = document.querySelector('nav');
var inlogKnop = document.querySelector('nav a');


// Zet het type attribuut van zoekknop op button
var zoekAttribuut = document.querySelector('header button[type="submit"]');
zoekAttribuut.setAttribute('type', 'button');


// Voegt class toe of verwijdert class voor zoekbalk, navigatieblok en inloglink na klik op zoekknop
var zoekKnop = document.querySelector('header button[type="button"]');
zoekKnop.addEventListener('click', function () {
    //var zoekBalk = document.querySelector('input[type="search"]');
    zoekBalk.classList.toggle('zoeken');

    //var navigatieBlok = document.querySelector('nav');
    //var inlogKnop = document.querySelector('nav a');
    navigatieBlok.classList.toggle('verborgen');
    inlogKnop.classList.toggle('verborgen');
    });

// Verwijdert class voor zoekbalk, navigatieblok en inloglink na klik buiten tekstveld
function removeClass() {
    zoekBalk.classList.remove('zoeken');
    navigatieBlok.classList.remove('verborgen');
    inlogKnop.classList.remove('verborgen');
}
document.querySelector('body > article').addEventListener('click', removeClass);
document.querySelector('body > form:first-of-type').addEventListener('click', removeClass);
document.querySelector('body > main').addEventListener('click', removeClass);
document.querySelector('body > footer').addEventListener('click', removeClass);


// Bij meer dan 1 karakter in zoekbalk verandert zoekknop weer terug naar submitknop
function checkInput() {
var zoekVeldLengte = document.querySelector('input[type="search"]').value.length;

    if (zoekVeldLengte >= 1) {
        zoekAttribuut.setAttribute('type', 'search');
    }

    else {
        zoekAttribuut.setAttribute('type', 'button');
    }
} // Waarde checken van zoekveld
zoekBalk.addEventListener('keyup', checkInput);


// Zet het jaartal naar huidige tijd
var selecteerJaar = document.querySelector('body > footer p span');
var huidigJaartal = new Date().getFullYear();
selecteerJaar.textContent = huidigJaartal;
