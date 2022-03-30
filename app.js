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
  element.addEventListener('mouseover', itemClick);
});
var swiper = new Swiper('.swiper_team', {
  loop: false,
  effect: "fade",
  simulateTouch: false,
  spaceBetween: 40
});
var swiper_merch = new Swiper('.swiper_merch', {
  loop: false,
  effect: "fade",
  spaceBetween: 40
});
var swiper_portfolio = new Swiper('.swiper_portfolio', {
  loop: false,
  navigation: {
    prevEl: '.swiper_portfolio_prev',
    nextEl: '.swiper_portfolio_next'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  // pagination: {
  //     el: '.swiper-portfolio-pagination',
  //     // renderBullet: function (index, className) {
  //     //     return `<span class="${ className } w-4 h-4 bg-neutral-750 rounded-full"></span>`;
  //     // },
  // },
  spaceBetween: 40,
  slideToClickedSlide: true // preventClicks: false,
  // preventClicksPropagation: false

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
var portfolio_tab = document.querySelectorAll(".portfolio-tab");
var portfolio_panels = document.querySelectorAll('.portfolio-by-type');
Array.from(portfolio_tab).forEach(function (element) {
  element.addEventListener('click', function () {
    Array.from(portfolio_tab).forEach(function (element) {
      element.classList.remove('active');
    });
    element.classList.add('active');
    Array.from(portfolio_panels).forEach(function (portfolio_element) {
      if (portfolio_element.dataset.type == element.dataset.target) {
        portfolio_element.classList.remove('hidden');
      } else {
        portfolio_element.classList.add('hidden');
      }
    });
  });
});
var portfolio_items = document.querySelectorAll(".portfolio-item");
var portfolio_btn = document.getElementById('showOtherItems');
portfolio_btn.addEventListener('click', function () {
  Array.from(portfolio_items).forEach(function (element) {
    element.classList.remove('hidden');
  });
  portfolio_btn.classList.remove('flex-centered');
  portfolio_btn.classList.add('hidden');
});
var portfolio_screen = document.querySelectorAll(".portfolio-screen");
var swiper_screens = [];
Array.from(portfolio_screen).forEach(function (element, i) {
  swiper_screens.push(new Swiper(element, {
    spaceBetween: 20,
    effect: "fade",
    simulateTouch: false,
    navigation: {
      nextEl: ".portfolio-next",
      prevEl: ".portfolio-prev"
    }
  }));
  Array.from(element.nextElementSibling.querySelectorAll(".portfolio-thumb")).forEach(function (item, idx) {
    item.addEventListener('click', function () {
      console.log('elem i', i);
      console.log('elem', idx);
      swiper_screens[i].slideTo(idx + 1);
    });
  });
}); // function createComparison(element) {
//     element.addEventListener('mousemove', (evt) => {
//         console.log(evt);
//         let layer = element.querySelector('.compare:nth-child(2)');
//         let width = evt.offsetX, height = parseInt(getComputedStyle(layer).height);
//         layer.style.clip = `rect(0px ${width}px ${height}px 0px)`;
//     }, false);
// }
//
// createComparison(document.querySelector('#comparison'));
// let swiper2 = new Swiper(".mySwiper2", {
// spaceBetween: 20,
// slidesPerView: 4,
// freeMode: true,
// watchSlidesProgress: true,
// navigation: {
//     nextEl: ".portfolio-next",
//     prevEl: ".portfolio-prev",
// },
// });

MicroModal.init();
var scroll = new SmoothScroll('a[href*="#"]');
var selector = document.querySelectorAll(".phone-input");
var im = new Inputmask("+7 999 999 99 99");
im.mask(selector);
Array.from(document.querySelectorAll(".video-preview")).forEach(function (element) {
  element.addEventListener('click', function () {
    element.classList.add('hidden-important');
  });
});
/******/ })()
;