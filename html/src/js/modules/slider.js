/**
 * Slider
 */
export default function() {
  const $fullslider = $('.slide-full');
  $fullslider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    vertical: true,
    appendDots: $('.slide .dots'),
    arrows: true,
    nextArrow: '.slide .next',
    prevArrow: '.slide .prev',
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0
  });
  const $videoslider = $('.slide-video');
  $videoslider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    //vertical: true,
    appendDots: $('.featured-videos .dots'),
    arrows: true,
    nextArrow: '.featured-videos .next',
    prevArrow: '.featured-videos .prev',
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0,
    asNavFor: '.slide-title'
  });
  const $titleslider = $('.slide-title');
  $titleslider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    vertical: true,
    appendDots: $('.featured-videos .dots'),
    arrows: false,
    nextArrow: '.featured-videos .next',
    prevArrow: '.featured-videos .prev',
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0,
    asNavFor: '.slide-video'
  });

  $('.slide-default').each(function(index) {
    const target = '.' + $(this).data('target');
    const slide = $(target).find('.slide-four');
    console.log(target);
    slide.slick({
      slidesToShow: 4,
      slidesToScroll: 2,
      dots: true,
      appendDots: $(target).find('.dots'),
      arrows: true,
      nextArrow: $(target).find('.next'),
      prevArrow: $(target).find('.prev'),
      centerMode: false,
      focusOnSelect: true,
      adaptiveHeight: true,
      centerPadding: 0
    });
  });
}