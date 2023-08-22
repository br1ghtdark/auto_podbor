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
