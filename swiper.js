"use strict";

const swiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
});

const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});