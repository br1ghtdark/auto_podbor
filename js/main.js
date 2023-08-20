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