const swiperEle = document.getElementById('mitraswiper')
Object.assign(swiperEle, {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 3,
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
    },
});
swiperEle.initialize();