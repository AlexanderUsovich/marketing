$(function(){

	const mixer = mixitup('.portfolio__content');

	Fancybox.bind();

	$('.slider-blog__inner').slick({
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow-left.svg" alt="arrow-left"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow-right.svg" alt="arrow-right"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false
				}
			}
		]
	});

	$(".menu a, .footer__up").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});



});


window.addEventListener('DOMContentLoaded', function() {
	const menuBtn = document.querySelector('.menu__btn'),
		  menuList = document.querySelector('.menu__list'),
		  logo = document.querySelector('.logo'),
		  menuItem = document.querySelectorAll('.menu__item');

	menuBtn.addEventListener('click', function() {
		menuList.classList.toggle('menu__list--active');
		logo.classList.toggle('logo--active');
		menuBtn.classList.toggle('menu__btn--active');
	});
	
	menuItem.forEach(btn => {
		btn.addEventListener('click', function(){
			menuList.classList.toggle('menu__list--active');
			logo.classList.toggle('logo--active');
			menuBtn.classList.toggle('menu__btn--active');
		})
	});
})
