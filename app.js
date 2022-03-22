/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
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