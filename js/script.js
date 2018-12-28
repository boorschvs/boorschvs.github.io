$(function(){
     $(".page__btn").click(function(){
       $('#exampleModal').arcticmodal({
          closeOnEsc: false,
          closeOnOverlayClick: false,
           overlay: {
           css: {
            backgroundColor: '#fff',
            backgroundImage: 'url(images/overlay.png)',
            backgroundRepeat: 'repeat',
            backgroundPosition: '50% 0',
            opacity: .75
            }
          }
       });
     }) 
});

// SKILLS

$('.property__btn').click (function() {
    progressBar(95, $("#progressBar"));
    progressBar(90, $("#progressBarCSS"));
    progressBar(40, $("#progressBarJS"));
    progressBar(70, $("#progressBarjQ"));
    progressBar(85, $("#progressBarBoot"));
    progressBar(80, $("#progressBarSass"));
});

function progressBar(percent, $element){
  var progressBarWidth = percent * $element.width() / 100;
  $element.find("div").animate({
    width: progressBarWidth
  }, 2000).html(percent + "%&nbsp;");

};

// SLIDER

    $(document).ready(function(){
  $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
         {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
           {
            breakpoint: 960,
            dots: false,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 600,
            dots: false,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            dots: false,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
});
//animated-css
$('.slick-dots').addClass('animated fadeInUp');
$('.slider__content').addClass('animated fadeInUp');
// $('.slider__page__nofile').addClass('animated fadeInDown');