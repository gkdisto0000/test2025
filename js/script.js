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

      // 🔥 이거 두 개가 핵심
      touchStartPreventDefault: false,
      preventClicks: false,
      preventClicksPropagation: false,
    });
  });


  $('.scroller').simplyScroll({
      speed: 2,
  });


// 모바일 햄버거 네비게이션 바 (iOS 안정형)
const $ham = $('.hamberger');
const $nav = $('.navi-sec .flex nav');

$ham.on('click', function (e) {
  e.preventDefault();

  $ham.toggleClass('is-open');
  if ($ham.hasClass('is-open')) {
    $nav.stop(true, true).slideDown(250);
  } else {
    $nav.stop(true, true).slideUp(250);
  }
});

// 메뉴 항목 클릭하면 자동 닫기(모바일)
$('nav a').on('click', function (e) {
  e.preventDefault();

  const targetClass = $(this).data('target');
  const $target = $('.' + targetClass);
  const headerH = $('.navi-sec').outerHeight();
  if (!$target.length) return;

  const targetTop = $target.offset().top - headerH;

  $('html, body').stop().animate({ scrollTop: targetTop }, 400);

  // ✅ 모바일이면 메뉴 닫기
  if (window.innerWidth <= 1023) {
    $ham.removeClass('is-open');
    $nav.stop(true, true).slideUp(0);
  }
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

