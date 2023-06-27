$(function(){

    const mixer = mixitup('.portfolio__content');

    Fancybox.bind();

    $('.slider-blog__inner').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow-right.svg" alt="arrow-right"></button>'
      });

})

