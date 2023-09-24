window.addEventListener('DOMContentLoaded', function() {
	const menuBtn   = document.querySelector('.menu__btn'),
		  menuList  = document.querySelector('.menu__list'),
		  logo 		= document.querySelector('.logo'),
		  menuItem  = document.querySelectorAll('.menu__item');
	
	menuBtn.addEventListener('click', function() {
		menuList.classList.toggle('menu__list--active');
		logo.classList.toggle('logo--active');
		menuBtn.classList.toggle('menu__btn--active');
	});
	menuItem.forEach(btn => {
		btn.addEventListener('click', function(){
			menuList.classList.remove('menu__list--active');
			menuBtn.classList.remove('menu__btn--active');
			logo.classList.remove('logo--active');
		})
	});

})


$(function(){

	const mixer = mixitup('.portfolio__content');

	Fancybox.bind()

	$('.slider-blog__inner').slick({
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><svg width="35" height="35"><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg width="35" height="35"><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false
				}
			}
		]
	});
			
	//Плавный скролл

	$(".logo, .menu a, .footer__up").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор блока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});


});



