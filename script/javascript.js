
// Zet het type attribuut van zoekknop op button
var zoekAttribuut = document.querySelector('header button[type="submit"]');
zoekAttribuut.setAttribute('type', 'button');


// Voegt class toe of verwijdert class voor zoekbalk, navigatieblok en inloglink na klik op zoekknop
var zoekKnop = document.querySelector('header button[type="button"]');
zoekKnop.addEventListener('click', function () {
    var zoekBalk = document.querySelector('input[type="search"]');
    zoekBalk.classList.toggle('zoeken');

    var navigatie = document.querySelector('nav');
    var inlogKnop = document.querySelector('nav a');
    navigatie.classList.toggle('verborgen');
    inlogKnop.classList.toggle('verborgen');
    });


// Zet het jaartal naar huidige tijd
var selecteerJaar = document.querySelector('body > footer p span');
var huidigJaartal = new Date().getFullYear();
selecteerJaar.textContent = huidigJaartal;
