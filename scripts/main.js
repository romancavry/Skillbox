document.addEventListener('DOMContentLoaded', function() {
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
    loop: false,

    pagination: {
      el: '.gallery__swiper-pagination',
    },

    navigation: {
      nextEl: '.gallery__swiper-button-next',
      prevEl: '.gallery__swiper-button-prev',
    },
  })




})


