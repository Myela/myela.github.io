// initialization of slider revolution
var tpj = jQuery,
  revapi26;

tpj(document).ready(function () {
  if (tpj("#story-slider").revolution == undefined) {
    revslider_showDoubleJqueryError("#story-slider");
  } else {
    revapi26 = tpj("#story-slider").show().revolution({
      sliderType: "standard",
      jsFileLocation: "revolution/js/",
      sliderLayout: "fullscreen",
      dottedOverlay: "none",
      delay: 9000,
      navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        mouseScrollReverse: "default",
        onHoverStop: "off",
        touch: {
          touchenabled: "on",
          touchOnDesktop: "off",
          swipe_threshold: 75,
          swipe_min_touches: 1,
          swipe_direction: "horizontal",
          drag_block_vertical: false
        },
        arrows: {
          style: "uranus",
          enable: true,
          hide_onmobile: true,
          hide_under: 778,
          hide_onleave: false,
          tmp: '',
          left: {
            h_align: "left",
            v_align: "center",
            h_offset: 15,
            v_offset: 0
          },
          right: {
            h_align: "right",
            v_align: "center",
            h_offset: 15,
            v_offset: 0
          }
        },
        bullets: {
          enable: true,
          hide_onmobile: false,
          style: "bullet-bar",
          hide_onleave: false,
          direction: "horizontal",
          h_align: "center",
          v_align: "bottom",
          h_offset: 0,
          v_offset: 30,
          space: 5,
          tmp: ''
        }
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1240, 1024, 778, 480],
      gridheight: [868, 768, 960, 720],
      lazyType: "none",
      parallax: {
        type: "scroll",
        origo: "slidercenter",
        speed: 2000,
        levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55]
      },
      shadow: 0,
      spinner: "off",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      fullScreenAutoWidth: "off",
      fullScreenAlignForce: "off",
      fullScreenOffsetContainer: "",
      fullScreenOffset: "60px",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: false
      }
    });
  }
});



var revapi1150,
tpj = jQuery;

tpj(document).ready(function () {
  revapi1150 = tpj("#welcome").show().revolution({
    sliderType: "standard",
    jsFileLocation: "revolution/js/",
    sliderLayout: "fullwidth",
    dottedOverlay: "none",
    delay: 9000,
    navigation: {
      onHoverStop: "off"
    },
    responsiveLevels: [1240, 1024, 778, 480],
    visibilityLevels: [1240, 1024, 778, 480],
    gridwidth: [1240, 1024, 778, 480],
    gridheight: [1000, 900, 960, 720],
    lazyType: "none",
    parallax: {
      type: "scroll",
      origo: "slidercenter",
      speed: 400,
      levels: [5, 10, 15, 20, 25, 30, 50, 60, -5, -10, -15, -20, -25, -30, -35, 55]
    },
    shadow: 0,
    spinner: "spinner3",
    stopLoop: "on",
    stopAfterLoops: 0,
    stopAtSlide: 1,
    shuffle: "off",
    autoHeight: "off",
    disableProgressBar: "on",
    hideThumbsOnMobile: "off",
    hideSliderAtLimit: 0,
    hideCaptionAtLimit: 0,
    hideAllCaptionAtLilmit: 0,
    debugMode: false,
    fallbacks: {
      simplifyAll: "off",
      nextSlideOnWindowFocus: "off",
      disableFocusListener: false
    }
  });
});

$(document).on('ready', function () {
  // initialization of carousel
  $.HSCore.components.HSCarousel.init('.js-carousel');

  // initialization of tabs
  $.HSCore.components.HSTabs.init('[role="tablist"]');

  // initialization of popups
  $.HSCore.components.HSPopup.init('.js-fancybox');

  // initialization of go to
  $.HSCore.components.HSGoTo.init('.js-go-to');
});

$(window).on('load', function () {
  // initialization of header
  $.HSCore.components.HSHeader.init($('#js-header'));
  $.HSCore.helpers.HSHamburgers.init('.hamburger');

  // initialization of HSMegaMenu component
  $('.js-mega-menu').HSMegaMenu({
    event: 'hover',
    pageContainer: $('.container'),
    breakpoint: 991
  });

  // initialization of masonry
  $('.masonry-grid').imagesLoaded().then(function () {
    $('.masonry-grid').masonry({
      columnWidth: '.masonry-grid-sizer',
      itemSelector: '.masonry-grid-item',
      percentPosition: true
    });
  });
});

$(window).on('resize', function () {
  setTimeout(function () {
    $.HSCore.components.HSTabs.init('[role="tablist"]');
  }, 200);
});

$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper('.swiper-container', {
      loop: true,
      spaceBetween: 50,
      keyboard: true,
      // grabCursor: true,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      speed: 1000,
      effect: 'fade',
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      autoplay: {
          delay: 10000,
          disableOnInteraction: false,
      }
  })

});