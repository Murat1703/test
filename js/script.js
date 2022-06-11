let burger = document.querySelector('.menu-burger');
let menu = document.querySelector('.menu-mobile');
let bodyLck = document.querySelector('body');
burger.addEventListener('click', function()
	{
		burger.classList.toggle('active');
		menu.classList.toggle('active');
		bodyLck.classList.toggle('lock');
	})
$(document).ready(function()
{
 AOS.init();

	$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
	$('.scrollup').fadeIn();
	} else {
	$('.scrollup').fadeOut();
	}
	});
	 
	$('.scrollup').click(function(){
	$("html, body").animate({ scrollTop: 0 }, 600);
	return false;
	});

	 $("a").on('click', function(event) {

    // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
    if (this.hash !== "") {
      // Запретить поведение щелчка якоря по умолчанию
      event.preventDefault();

      // Хранить хэш
      var hash = this.hash;

      // Использование метода animate() jQuery для добавления плавной прокрутки страницы
      // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
        window.location.hash = hash;
      });
    } // Конец, если
  });
 
});

