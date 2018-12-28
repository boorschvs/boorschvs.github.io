$(document).ready(function(){
    $(".header__arrow, .arrows__one, .arrows__two, .form__span__btn").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

 $(document).ready(function(){
      $('.slider').slick({
        dots: true,
        autoplay: true,
  		autoplaySpeed: 3000,
      });
    });

 $(function(){
 	$('.btn__click').click(function(){
 		$('#exampleModal').arcticmodal();
 	})
});



$(window).scroll(function(){
  $('.block__animated').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $ (window).scrollTop();
      if (imagePos < topOfWindow+600){
        $(this).addClass("fadeInDown");
      }
  });
});
$(window).scroll(function(){
  $('.block__animated__up').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $ (window).scrollTop();
      if (imagePos < topOfWindow+600){
        $(this).addClass("fadeInUp");
      }
  });
});

$(window).scroll(function(){
  $('.block__animated__right').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $ (window).scrollTop();
      if (imagePos < topOfWindow+600){
        $(this).addClass("fadeInRight");
      }
  });
});

$(window).scroll(function(){
  $('.block__animated__left').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $ (window).scrollTop();
      if (imagePos < topOfWindow+600){
        $(this).addClass("fadeInLeft");
      }
  });
});