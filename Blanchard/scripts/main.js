$('a').on('click', function() {
  $('a').removeClass('not-outlined');
  $(this).addClass('not-outlined');
})

$('*').on('touchstart touchend', function(e) {
  $(this).removeClass('hover_effect');
});

$('button').mouseup(function() { this.blur() })

// Header
$('.header-nav__link').click(function() {
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top + "px"
  }, {
    duration: 750,
    easing: "swing"
  });
  return false;
});

// Menu
$(".widget-list__title").on('click', function(){
  let iconTarget = $(this).children();
  let allIcons = $(".widget-list__title").children();

  $(".widget-list__title").removeClass('widget__for-icon-darkPurple');
  $(allIcons).removeClass('widget__for-icon-click');

  $(this).toggleClass('widget__for-icon-darkPurple');
  $('.widget-list__title').addClass('widget__for-icon-white');
  $(iconTarget).toggleClass('widget__for-icon-click');

  $('.widget-list__wrapper').hide(500);
  let menuTarget = $(this).next('div').slideToggle();
  $(menuTarget).toggleClass('not-active');
})

$(document).on("click", function (e) {
  let allIcons2 = $(".widget-list__title").children();
  if ($(e.target).is(".widget-list__title") === false) {
    $(".widget-list__wrapper").addClass("not-active");
    $(allIcons2).removeClass('widget__for-icon-click');
    $('.widget-list__title').removeClass('widget__for-icon-darkPurple');
  }
});

$('.widget__search-input').on('focus', function() {
  $('.widget__search-icon').addClass('widget__search-icon--hover');
  setTimeout(function(){
    $('.widget__search-icon').removeClass('widget__search-icon--hover');
  }, 4000);
});

// Hero
var mySwiper = new Swiper('.hero__swiper-container', {
  loop: true,
  allowTouchMove: false,
  centeredSlides: true,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
})

$('.hero__btn').click(function() {
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top + "px"
  }, {
    duration: 750,
    easing: "swing"
  });
  return false;
});

// Gallery
const element = document.getElementById('gallery__select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
});

$('.choices').attr('aria-label', 'Меню фильтр');

$('.gallery__swiper-slide').on('click', function () {
  let target = $(this).children().slideToggle();
  $(target).removeClass('not-active');
  $(target).addClass('active');
  setTimeout(function(){
    $('.gallery__swiper-slide--clicked').addClass('not-active');
  }, 1000);
});

// Gallery swiper
var mySwiper = new Swiper('.gallery__swiper-container', {

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerColumn: 1,
    },

    768: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
    },

    1024: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
    },

    1919: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 50,
    },
  },

  pagination: {
    el: '.gallery-numbers',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.gallery-next',
    prevEl: '.gallery-prev',
  },
})

// Catalogue
$( function() {
  $( ".js-tabs-content-wrapper" ).accordion({
    collapsible: true,
    heightStyle: "content",
  });
} );

$('.js-tabs-link').on('click', function(e) {
  e.preventDefault();

  $('.js-tabs-link').removeClass('active');
  $(this).addClass('active');

  let href = $(this).attr('href');
  $('.tabs-content__wrapper.active').removeClass('active').removeClass('in')
  $(href).addClass('active');

  setTimeout(function() {
    $(href).addClass('in');
  }, 200);
})

const authorEl = document.querySelectorAll('.tabs-content__link');
const authorDesc = document.querySelectorAll('.bio__wrapper');

authorEl.forEach((authorBtn) => {
  authorBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const authorPath = e.currentTarget.dataset.path;
    const cardTarget = document.querySelector(`[data-target=${authorPath}]`);

    authorEl.forEach((el) => {
      if (el.classList.contains('tabs-content__link--active')) {
        el.classList.remove('tabs-content__link--active')
      }
    });

    authorDesc.forEach((card) => {
      card.classList.remove('card-active');
    });

    authorBtn.classList.add('tabs-content__link--active');

    if (authorBtn.classList.contains('tabs-content__link--active')) {
      cardTarget.classList.add('card-active');
    }
  });
});

// Events
$('.events__btn').on('click', function() {
  $('.events__btn').addClass('not-active');
  $('.events__item3').addClass('active');
  $('.events__item').removeClass('not-active');
})

$('.checkbox-label__input').click(function(){
  if($(this).is(':checked')){
    $(this).parent().addClass('purple-color');
  }else{
    $(this).parent().removeClass('purple-color');
  }
});

if ($('.js-max-width-767').is(':visible')) {
  $('.books__checkbox').addClass('books__mobile-container');
  $('.books__mobile-container').removeClass('books__checkbox');
  $('.books__mobile-btn').removeClass('not-active');
  $('.checkbox-label').addClass('mobile__checkbox-label');
}

$( ".checkbox-label__input" ).focus(function() {
  let target = $(this).parent();
  $(target).addClass('checkbox-label--focus');
});

$( ".checkbox-label__input" ).focusout(function() {
  let target = $(this).parent();
  $(target).removeClass('checkbox-label--focus');
});

var mySwiper = new Swiper('.events__swiper', {
  loop: true,
  slidesPerView: 1,

  pagination: {
    el: '.events__dots',
    type: 'bullets',
  },
})

// Books
var mySwiper = new Swiper('.books__swiper', {
  loop: true,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesOffsetBefore: 55,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },

    1919: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },

  pagination: {
    el: '.books-numbers',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.books-next',
    prevEl: '.books-prev',
  },
})

$('.books__mobile-btn').on('click', function() {
  $('.mobile-btn__icon').toggleClass('mobile-btn__icon--clicked');
  $('.mobile__checkbox-label').toggleClass('not-active');

  let labelTarget = $('label[class*="purple-color"]');
  $(labelTarget).removeClass('not-active');

  $(labelTarget).on('click', function() {
    $(this).addClass('not-active');
  })
})

// Partners
var mySwiper = new Swiper('.partners__swiper-container', {
  loop: true,
  spaceBetween: 50,
  slidesPerView: 3,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    1024: {
      slidesPerView: 2,
    },

    1919: {
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: '.partners-next',
    prevEl: '.partners-prev',
  },
})

ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
      center: [55.758332997776776,37.60265127448263],
      zoom: 15
  });
  var myPlacemark = new ymaps.Placemark([55.758332997776776,37.60265127448263], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/icon-formaps.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -42]
  });
  myMap.geoObjects.add(myPlacemark);
}

let selector = document.querySelector("input[type='tel']");
let im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

new JustValidate('.js-contacts-form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
    email: {
      required: false,
      email: true
    },
  },
});

$('.pagination-arrows__prev').attr('aria-label', 'Предыдущий слайд');
$('.pagination-arrows__next').attr('aria-label', 'Следующий слайд');
