// Hero swiper
var mySwiper = new Swiper('.swiper-container', {
  loop: true,
})

// Gallery select
const element = document.getElementById('gallery__select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
});

// Gallery swiper
var mySwiper = new Swiper('.gallery__rightside-container', {
  loop: true,
  nested: true,

  pagination: {
    el: '.gallery__swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.gallery__swiper-button-next',
    prevEl: '.gallery__swiper-button-prev',
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

// $('#girlandao').on('click', function(e) {
//   e.preventDefault();

//   $('.domenico-girlandao').addClass('active');
// })

// брать из data-path значение, искать его в bio

$('.events__btn').on('click', function() {
  $('.events__btn').addClass('not-active');
  $('.events__item').removeClass('not-active');
})

// Gallery swiper
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

// Partners swiper
var mySwiper = new Swiper('.partners__swiper-container', {
  loop: true,
  nested: true,

  navigation: {
    nextEl: '.partners__swiper-button-next',
    prevEl: '.partners__swiper-button-prev',
  },
})


