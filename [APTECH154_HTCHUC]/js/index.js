$(document).ready(function() {
    // carousel
    $('.list-product').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll:2,
        autoplay: true,
        arrows: true

    }) //end carousel
    $('.slide-customer').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll:1,
        autoplay: true,
        dots: true

    }) //end carousel

});