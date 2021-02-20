// Menu
$(".widget-list__title").on('click', function(){
  let iconTarget = $(this).children();
  let allIcons = $(".widget-list__title").children();

  $(".widget-list__title").css({ 'outline' : 'none' });

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
var mySwiper = new Swiper('.swiper-container', {
  loop: true,
})

// Gallery
const element = document.getElementById('gallery__select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
});

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
  loop: true,

  breakpoints: {
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
  $( "#accordion-france" ).accordion({
    collapsible: true,
    heightStyle: "content",
  });
} );

$( function() {
  $( "#accordion-germany" ).accordion({
    collapsible: true,
    heightStyle: "content",
  });
} );

$( function() {
  $( "#accordion-italy" ).accordion({
    collapsible: true,
    heightStyle: "content",
  });
} );

$( function() {
  $( "#accordion-russia" ).accordion({
    collapsible: true,
    heightStyle: "content",
  });
} );

$( function() {
  $( "#accordion-belgium" ).accordion({
    collapsible: true,
    heightStyle: "content",
  });
} );

$('.catalogue__tabs-nav a').on('click', function(e) {
  e.preventDefault();

  $('.catalogue__tabs-nav a').removeClass('active');
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
    $(authorBtn).css({ 'outline' : 'none' });
    const authorPath = e.currentTarget.dataset.path;
    const cardTarget = document.querySelector(`[data-target=${authorPath}]`);

    authorEl.forEach((el) => {
      if (el.classList.contains('active')) {
        el.classList.remove('active')
      }
    });

    authorDesc.forEach((card) => {
      card.classList.remove('card-active');
    });

    authorBtn.classList.add('active');

    if (authorBtn.classList.contains('active')) {
      cardTarget.classList.add('card-active');
    }
  });
});

// Events
$('.events__btn').on('click', function() {
  $('.events__btn').addClass('not-active');
  $('.events__item').removeClass('not-active');
})

$('.checkbox-label__input').click(function(){
  if($(this).is(':checked')){
    $(this).parent().addClass('purple-color');
  }else{
    $(this).parent().removeClass('purple-color');
  }
});

// Books
var mySwiper = new Swiper('.books__swiper', {
  loop: true,

  breakpoints: {
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

// Partners
var mySwiper = new Swiper('.partners__swiper-container', {
  loop: true,
  spaceBetween: 50,
  slidesPerView: 3,

  breakpoints: {
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

$('a').click(function(e) {
  e.preventDefault();
});
