document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger-menu');
    const closeBtn = document.querySelector('.close-mobile-menu');
    const mobileMenu = document.querySelector('.menu-mobile');
    const body = document.body;

    burger.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        body.classList.add('body-no-scroll'); 
    });


    closeBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        body.classList.remove('body-no-scroll');
    });
});


const photoList = [
    '/assets/gallery/air-jordan-1.png',
    '/assets/gallery/air-jordan-2.png',
    '/assets/gallery/air-jordan-3.jpeg',
    '/assets/gallery/air-jordan-4.jpeg',
    '/assets/gallery/air-jordan-5.png',
    '/assets/gallery/air-jordan-6.png',
    '/assets/gallery/air-jordan-7.png'
];

// Referencje do elementów
const thumbnails = document.querySelectorAll('.product-photo-thumbnail img');
const mainPhotoDiv = document.querySelector('.main-product-photo');
const previousArrow = document.querySelector('.main-photo-slide-arrow-previous');
const nextArrow = document.querySelector('.main-photo-slide-arrow-next');

let currentIndex = 0; // Indeks aktualnie wyświetlanego zdjęcia

// Funkcja zmieniająca tło głównego zdjęcia
function changeMainPhoto(index) {
    currentIndex = index;
    mainPhotoDiv.style.backgroundImage = `url(${photoList[currentIndex]})`;
}

// Dodaj event listener na miniatury
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        changeMainPhoto(index);
    });
});

// Funkcja obsługująca naciśnięcie strzałki "następna"
nextArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % photoList.length; // Cykl zdjęć
    changeMainPhoto(currentIndex);
});

// Funkcja obsługująca naciśnięcie strzałki "poprzednia"
previousArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + photoList.length) % photoList.length; // Cykl zdjęć
    changeMainPhoto(currentIndex);
});