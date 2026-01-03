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
    $(this).hide();
    $('.hamberger .close').show();
  });

  $('.hamberger .close').on('click', function () {
    $('.navi-sec .flex nav').stop(true, true).slideUp(250);
    $(this).hide();
    $('.hamberger .open').show();
  });


  // 헤더 클릭 시 특정위치로 앵커
  $('nav a').on('click', function (e) {
    e.preventDefault();

    const targetClass = $(this).data('target');
    const $target = $('.' + targetClass);
    const headerH = $('.navi-sec').outerHeight();

    if (!$target.length) return;

    const targetTop = $target.offset().top - headerH;

    $('html, body').stop().animate({
      scrollTop: targetTop
    }, 400);
  });

  // floating banner
  $(window).on('scroll resize', function () {
    const winW = $(window).width();

    if (winW > 1023) return; // PC에서는 실행 안 함

    const scrollTop = $(window).scrollTop();
    const winH = $(window).height();
    const docH = $(document).height();

    const isBottom = scrollTop + winH >= docH - 5; // 오차 보정

    if (isBottom) {
      $('.floating-wrap').stop(true, true).fadeOut(300);
    } else {
      $('.floating-wrap').stop(true, true).fadeIn(300);
    }
  });



});

