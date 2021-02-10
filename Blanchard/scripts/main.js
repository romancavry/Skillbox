// Header
$('.header-nav__link').on('click', function (e) {
	$('<div class="cursorLightGray">')
		.css({
			top: e.clientY,
			left: e.clientX
		})
		.appendTo($(document.body))
		.on('animationend webkitAnimationEnd', function (e) {
			$(this).remove();
		});
});

$('.header-enter').on('click', function (e) {
	$('<div class="cursorLightGray">')
		.css({
			top: e.clientY,
			left: e.clientX
		})
		.appendTo($(document.body))
		.on('animationend webkitAnimationEnd', function (e) {
			$(this).remove();
		});
});

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

$('.widget-list__title').on('click', function (e) {
	$('<div class="cursorLightGray">')
		.css({
			top: e.clientY,
			left: e.clientX
		})
		.appendTo($(document.body))
		.on('animationend webkitAnimationEnd', function (e) {
			$(this).remove();
		});
});

$('.widget-list__item').on('click', function() {
  let itemTarget = $(this).children().slideToggle();
  $(itemTarget).addClass('item-wrapper-clicked');
})

$('.widget-list__item').on('click', function (e) {
	$('<div class="cursorLightGray">')
		.css({
			top: e.clientY,
			left: e.clientX
		})
		.appendTo($(document.body))
		.on('animationend webkitAnimationEnd', function (e) {
			$(this).remove();
		});
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

$('.hero').on('click', function (e) {
	$('<div class="cursorLightGray">')
		.css({
			top: e.clientY,
			left: e.clientX
		})
		.appendTo($(document.body))
		.on('animationend webkitAnimationEnd', function (e) {
			$(this).remove();
		});
});

// Gallery
const element = document.getElementById('gallery__select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
});

$('.gallery__swiper-item').on('click', function (e) {
	$('<div class="cursorDarkGray">')
		.css({
			top: e.clientY,
			left: e.clientX
		})
		.appendTo($(document.body))
		.on('animationend webkitAnimationEnd', function (e) {
			$(this).remove();
		});
});

$('.gallery__swiper-item').on('click', function () {
  let target = $(this).children().slideToggle();
  $(target).removeClass('not-active');
  $(target).addClass('active');
  setTimeout(function(){
    $('.gallery__swiper-item--after').addClass('not-active');
  }, 1000);
});

$('.swiper-button-next').on('click', function (e) {
	$('<div class="cursorDarkGray">')
		.css({
			top: e.clientY,
			left: e.clientX
		})
		.appendTo($(document.body))
		.on('animationend webkitAnimationEnd', function (e) {
			$(this).remove();
		});
});

$('.swiper-button-prev').on('click', function (e) {
	$('<div class="cursorDarkGray">')
		.css({
			top: e.clientY,
			left: e.clientX
		})
		.appendTo($(document.body))
		.on('animationend webkitAnimationEnd', function (e) {
			$(this).remove();
		});
});

// Gallery swiper
var mySwiper = new Swiper('.gallery__rightside-container', {
  loop: true,
  nested: true,
  spaceBetween: 50,
  slidesPerView: 6,

  // breakpoints: {
  //   // when window width is >= 1920px
  //   1919: {
  //     slidesPerView: 4,
  //   },
  // },

  pagination: {
    el: '.gallery__swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.gallery__swiper-button-next',
    prevEl: '.gallery__swiper-button-prev',
  },
})

$('.gallery__select-suptitle > a').on('click', function (e) {
	$('<div class="cursorDarkGray">')
		.css({
			top: e.clientY,
			left: e.clientX
		})
		.appendTo($(document.body))
		.on('animationend webkitAnimationEnd', function (e) {
			$(this).remove();
		});
});


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

$('.tabs-content__link').on('click', function (e) {
	$('<div class="cursorDarkGray">')
		.css({
			top: e.clientY,
			left: e.clientX
		})
		.appendTo($(document.body))
		.on('animationend webkitAnimationEnd', function (e) {
			$(this).remove();
		});
});

$('.tabs__link').on('click', function (e) {
	$('<div class="cursorDarkGray">')
		.css({
			top: e.clientY,
			left: e.clientX
		})
		.appendTo($(document.body))
		.on('animationend webkitAnimationEnd', function (e) {
			$(this).remove();
		});
});

$('.tabs-content__title').on('click', function (e) {
	$('<div class="cursorDarkGray">')
		.css({
			top: e.clientY,
			left: e.clientX
		})
		.appendTo($(document.body))
		.on('animationend webkitAnimationEnd', function (e) {
			$(this).remove();
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

$('.events__item-link').on('click', function (e) {
	$('<div class="cursorDarkGray">')
		.css({
			top: e.clientY,
			left: e.clientX
		})
		.appendTo($(document.body))
		.on('animationend webkitAnimationEnd', function (e) {
			$(this).remove();
		});
});

// Books
var mySwiper = new Swiper('.books__rightside-container', {
  loop: true,
  nested: true,

  pagination: {
    el: '.books__swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.books__swiper-button-next',
    prevEl: '.books__swiper-button-prev',
  },
})

$('.swiper-item__btn').on('click', function (e) {
	$('<div class="cursorLightGray">')
		.css({
			top: e.clientY,
			left: e.clientX
		})
		.appendTo($(document.body))
		.on('animationend webkitAnimationEnd', function (e) {
			$(this).remove();
		});
});

// Projects
$('.projects__text > a').on('click', function (e) {
	$('<div class="cursorDarkGray">')
		.css({
			top: e.clientY,
			left: e.clientX
		})
		.appendTo($(document.body))
		.on('animationend webkitAnimationEnd', function (e) {
			$(this).remove();
		});
});

// Partners
var mySwiper = new Swiper('.partners__swiper-container', {
  loop: true,
  nested: true,
  spaceBetween: 100,

  navigation: {
    nextEl: '.partners__swiper-button-next',
    prevEl: '.partners__swiper-button-prev',
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

$('.contacts-form__btn').on('click', function (e) {
	$('<div class="cursorDarkGray">')
		.css({
			top: e.clientY,
			left: e.clientX
		})
		.appendTo($(document.body))
		.on('animationend webkitAnimationEnd', function (e) {
			$(this).remove();
		});
});

$('a').click(function(e) {
  e.preventDefault();
});
