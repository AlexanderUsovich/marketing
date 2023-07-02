$(function(){

	const mixer = mixitup('.portfolio__content');

	Fancybox.bind();

	$('.slider-blog__inner').slick({
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow-left.svg" alt="arrow-left"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow-right.svg" alt="arrow-right"></button>'
	});



});


window.addEventListener('DOMContentLoaded', function() {
	const menuBtn = document.querySelector('.menu__btn'),
		  menuList = document.querySelector('.menu__list'),
		  logo = document.querySelector('.logo');

	menuBtn.addEventListener('click', function() {
		menuList.classList.toggle('menu__list--active');
		logo.classList.toggle('logo--active');
		menuBtn.classList.toggle('menu__btn--active');
	});
	
})
