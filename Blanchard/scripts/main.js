// Menu
document.querySelectorAll('.widget-list__title').forEach(function (openTab) {
  openTab.addEventListener('click', function(event) {
    const path = event.currentTarget.dataset.target;
    console.log(event)
    console.log(path)
    console.log(document.querySelector(`[data-target="${path}"]`));
    document.querySelectorAll('.widget-list__wrapper').forEach(function (activateTab) {
      activateTab.classList.toggle('not-active')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('active');
  })
})

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

// Books swiper
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
  spaceBetween: 100,

  navigation: {
    nextEl: '.partners__swiper-button-next',
    prevEl: '.partners__swiper-button-prev',
  },
})

const authorEl = document.querySelectorAll('.js-catalog-author-link');
const authorDesc = document.querySelectorAll('.accordion-card');

authorEl.forEach((authorBtn) => {
  authorBtn.addEventListener('click', (e) => {
    e.preventDefault();
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
    // cardTarget.classList.add('active')

    if (authorBtn.classList.contains('active')) {
      cardTarget.classList.add('card-active');
    }
  });
});

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
