/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
new Accordion('.accordion-container-first', {
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
/******/ })()
;