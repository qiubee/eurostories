document.querySelector('main > article > div p:first-of-type span:first-child').addEventListener('click', function () {
    document.querySelector('main > article > div p:first-of-type span:first-child').classList.toggle('open');
});

document.querySelector('main > article > div p:first-of-type span:last-child').addEventListener('click', function () {
    document.querySelector('main > article > div p:first-of-type span:last-child').classList.toggle('open');
});

document.querySelector('main > article > div p:nth-of-type(2) span:first-child').addEventListener('click', function () {
    document.querySelector('main > article > div p:nth-of-type(2) span:first-child').classList.toggle('open');
});

document.querySelector('main > article > div p:nth-of-type(2) span:nth-child(2)').addEventListener('click', function () {
    document.querySelector('main > article > div p:nth-of-type(2) span:nth-child(2)').classList.toggle('open');
});

document.querySelector('main > article > div p:nth-of-type(2) span:nth-child(3)').addEventListener('click', function () {
    document.querySelector('main > article > div p:nth-of-type(2) span:nth-child(3)').classList.toggle('open');
});

document.querySelector('main > article > div p:nth-of-type(2) span:last-child').addEventListener('click', function () {
    document.querySelector('main > article > div p:nth-of-type(2) span:last-child').classList.toggle('open');
});

document.querySelector('main > article > div p:nth-of-type(3) span:first-child').addEventListener('click', function () {
    document.querySelector('main > article > div p:nth-of-type(3) span:first-child').classList.toggle('open');
});

document.querySelector('main > article > div p:nth-of-type(3) span:nth-child(2)').addEventListener('click', function () {
    document.querySelector('main > article > div p:nth-of-type(3) span:nth-child(2)').classList.toggle('open');
});

document.querySelector('main > article > div p:nth-of-type(3) span:nth-child(3)').addEventListener('click', function () {
    document.querySelector('main > article > div p:nth-of-type(3) span:nth-child(3)').classList.toggle('open');
});

document.querySelector('main > article > div p:nth-of-type(3) span:last-child').addEventListener('click', function () {
    document.querySelector('main > article > div p:nth-of-type(3) span:last-child').classList.toggle('open');
});

document.querySelector('main > article > div p:last-of-type span:first-child').addEventListener('click', function () {
    document.querySelector('main > article > div p:last-of-type span:first-child').classList.toggle('open');
});



document.querySelector('section:first-of-type p:first-of-type span:first-of-type svg').addEventListener('click', function () {
    document.querySelector('body > div').classList.add('popup');
});

document.querySelector('section:first-of-type p:first-of-type span:first-of-type svg:nth-of-type(2)').addEventListener('click', function () {
    document.querySelector('body > div').classList.add('popup');
});

document.querySelector('section:first-of-type p:first-of-type span:first-of-type svg:nth-of-type(3)').addEventListener('click', function () {
    document.querySelector('body > div').classList.add('popup');
});

document.querySelector('section:first-of-type p:first-of-type span:first-of-type svg:nth-of-type(4)').addEventListener('click', function () {
    document.querySelector('body > div').classList.add('popup');
});

document.querySelector('section:first-of-type p:first-of-type span:first-of-type svg:last-of-type').addEventListener('click', function () {
    document.querySelector('body > div').classList.add('popup');
});

document.querySelector('body > div > div svg').addEventListener('click', function () {
    document.querySelector('body > div').classList.remove('popup');
});


