/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
new Accordion('.accordion-container-first', {
  duration: 75,
  openOnInit: [0]
});
new Accordion('.accordion-container-second', {
  duration: 75,
  openOnInit: [0]
});
var items = document.querySelectorAll(".item");

function itemClick() {
  Array.from(items).forEach(function (element) {
    element.classList.remove('active');
  });
  this.classList.add('active');
  document.getElementById('items-screen').src = this.getAttribute("data-image");
}

Array.from(items).forEach(function (element) {
  element.addEventListener('click', itemClick);
});
var swiper = new Swiper('.swiper_team', {
  loop: false,
  navigation: {
    nextEl: '#type_next',
    prevEl: '#type_prev'
  },
  spaceBetween: 40
});
var swiper_merch = new Swiper('.swiper_merch', {
  loop: false,
  // navigation: {
  //     nextEl: '#type_next',
  //     prevEl: '#type_prev',
  // },
  spaceBetween: 40
});
var types = document.querySelectorAll(".type_pagination");

function typePaginationClick() {
  Array.from(types).forEach(function (element) {
    element.classList.remove('active');
  });
  this.classList.add('active');
  swiper.slideTo(Array.from(types).indexOf(this), 75);
}

Array.from(types).forEach(function (element) {
  element.addEventListener('click', typePaginationClick);
});
swiper.on('slideChange', function (sw) {
  Array.from(types).forEach(function (element) {
    element.classList.remove('active');
  });
  types[sw.activeIndex].classList.add('active');
});
var types_prev = document.querySelectorAll(".types_prev");
Array.from(types_prev).forEach(function (element) {
  element.addEventListener('click', function () {
    swiper.slidePrev();
  });
});
var types_next = document.querySelectorAll(".types_next");
Array.from(types_next).forEach(function (element) {
  element.addEventListener('click', function () {
    swiper.slideNext();
  });
});
var merch_prev = document.querySelectorAll(".merch_prev");
Array.from(merch_prev).forEach(function (element) {
  element.addEventListener('click', function () {
    swiper_merch.slidePrev();
  });
});
var merch_next = document.querySelectorAll(".merch_next");
Array.from(merch_next).forEach(function (element) {
  element.addEventListener('click', function () {
    swiper_merch.slideNext();
  });
});
/******/ })()
;