$(function () {
  // AOS는 "재실행 가능" 세팅
  AOS.init({
    once: true,   // ✔ 딱 한 번만
    duration: 1000,
  });

  $('.js-swiper').each(function () {
    new Swiper(this, {
      effect: 'fade',
      fadeEffect: { crossFade: true },
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  });


  $('.scroller').simplyScroll({
      speed: 2,
  });


  // 모바일 햄버거 네비게이션 바
  $('.hamberger .open').on('click', function () {
    $('.navi-sec .flex nav').stop(true, true).slideDown(250);
  });



});

