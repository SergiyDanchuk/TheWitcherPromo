$(function () {

    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next'
        },
        breakpoints: {
            640: {
              slidesPerView: 2,
            },
        },
    });

    $('.burger__menu').on('click', function () {
        $('.header__box').slideToggle();
    });

});