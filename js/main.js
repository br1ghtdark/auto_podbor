// POPUP 1

let price1popupback = document.querySelector('.consult1__popup'); // Фон попап окна
let price1popup_body = document.querySelector('.consult1__popup-inner'); // Само окно
let price1openPopupBtn = document.querySelectorAll('.btn-popup-show1'); // Кнопки для показа окна
let price1closePopupBtn = document.querySelector('.popup-close1'); // Кнопка для скрытия окна

price1openPopupBtn.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        price1popupback.classList.add('active'); // Добавляем класс 'active' для фона
        price1popup_body.classList.add('active'); // И для самого окна
    })
});

price1closePopupBtn.addEventListener('click',() => { // Вешаем обработчик на крестик
    price1popupback.classList.remove('active'); // Убираем активный класс с фона
    price1popup_body.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === price1popup_body) { // Если цель клика - фот, то:
        price1popupback.classList.remove('active'); // Убираем активный класс с фона
        price1popup_body.classList.remove('active'); // И с окна
    }
});

// POPUP 2

let price2popupback = document.querySelector('.consult2__popup'); // Фон попап окна
let price2popup_body = document.querySelector('.consult2__popup-inner'); // Само окно
let price2openPopupBtn = document.querySelectorAll('.btn-popup-show2'); // Кнопки для показа окна
let price2closePopupBtn = document.querySelector('.popup-close2'); // Кнопка для скрытия окна

price2openPopupBtn.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        price2popupback.classList.add('active'); // Добавляем класс 'active' для фона
        price2popup_body.classList.add('active'); // И для самого окна
    })
});

price2closePopupBtn.addEventListener('click',() => { // Вешаем обработчик на крестик
    price2popupback.classList.remove('active'); // Убираем активный класс с фона
    price2popup_body.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === price2popup_body) { // Если цель клика - фот, то:
        price2popupback.classList.remove('active'); // Убираем активный класс с фона
        price2popup_body.classList.remove('active'); // И с окна
    }
});

// POPUP 3

let price3popupback = document.querySelector('.consult3__popup'); // Фон попап окна
let price3popup_body = document.querySelector('.consult3__popup-inner'); // Само окно
let price3openPopupBtn = document.querySelectorAll('.btn-popup-show3'); // Кнопки для показа окна
let price3closePopupBtn = document.querySelector('.popup-close3'); // Кнопка для скрытия окна

price3openPopupBtn.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        price3popupback.classList.add('active'); // Добавляем класс 'active' для фона
        price3popup_body.classList.add('active'); // И для самого окна
    })
});

price3closePopupBtn.addEventListener('click',() => { // Вешаем обработчик на крестик
    price3popupback.classList.remove('active'); // Убираем активный класс с фона
    price3popup_body.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === price3popup_body) { // Если цель клика - фот, то:
        price3popupback.classList.remove('active'); // Убираем активный класс с фона
        price3popup_body.classList.remove('active'); // И с окна
    }
});



// СЛАЙДЕР ПРИМЕРОВ АВТО

new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    slideClass: "swiper-slide",
    navigation: {
        nextEl: ".example__arrow-right",
        prevEl: ".example__arrow-left"
    },
    speed: 1300,
});

// СЛАЙДЕР ЦЕН
// ПОЯВЛЯЕТСЯ ЕСЛИ VP МЕНЬШ 925PX

if (document.documentElement.clientWidth < 925) {
    let priceSlider = document.querySelector(".price__inner-container");
    priceSlider.classList.add("priceswiper");
} else {
    priceSlider.classList.remove("priceswiper");
};

new Swiper('.price-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    slideClass: "price__content",
    speed: 1300,
});
