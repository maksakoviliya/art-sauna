/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

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
  spaceBetween: 40,
  navigation: {
    prevEl: '.swiper_team_prev',
    nextEl: '.swiper_team_next'
  }
});
var swiper_merch = new Swiper('.swiper_merch', {
  loop: true,
  effect: "fade",
  spaceBetween: 40
});
var swiper_portfolio = new Swiper('.swiper_portfolio', {
  loop: false,
  navigation: {
    prevEl: '.swiper_portfolio_prev',
    nextEl: '.swiper_portfolio_next'
  },
  mousewheel: {
    forceToAxis: true
  },
  // simulateTouch: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  spaceBetween: 40,
  slideToClickedSlide: true,
  preventClicks: false // preventClicksPropagation: false

});
document.querySelectorAll('.portfolio-item').forEach(function (n) {
  var slider = new Swiper(n.querySelector('.swiper_portfolio_mobile'), {
    navigation: {
      nextEl: n.querySelector('.portfolio_mobile_prev'),
      prevEl: n.querySelector('.portfolio_mobile_next')
    },
    autoHeight: true,
    effect: "fade",
    spaceBetween: 20
  });
});
var types = document.querySelectorAll(".type_pagination");

function typePaginationClick() {
  Array.from(types).forEach(function (element) {
    element.classList.remove('active');
  });
  this.classList.add('active');
  swiper.slideTo(Array.from(types).indexOf(this));
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
  if (!portfolio_btn.classList.contains('opened')) {
    Array.from(portfolio_items).forEach(function (element) {
      element.classList.remove('hidden');
    });
    portfolio_btn.textContent = 'Скрыть';
    portfolio_btn.classList.add('opened');
  } else {
    Array.from(portfolio_items).forEach(function (element, j) {
      if (j > 2) {
        element.classList.add('hidden');
      }
    });
    portfolio_btn.textContent = 'Показать еще';
    portfolio_btn.classList.remove('opened');
  } // if (!portfolio_btn.classList.contains('opened')) {
  //     let i = 0;
  //     Array.from(portfolio_items).forEach(function (element) {
  //         if (element.classList.contains('hidden')) {
  //
  //             if (i < 3) {
  //                 element.classList.remove('hidden')
  //                 i++
  //             }
  //         }
  //     });
  //     if (!document.querySelectorAll(".portfolio-item.hidden").length) {
  //         portfolio_btn.textContent = 'Скрыть'
  //         portfolio_btn.classList.add('opened')
  //     }
  // } else {
  //     Array.from(portfolio_items).forEach(function (element, j) {
  //         if (j > 1) {
  //             element.classList.add('hidden')
  //         }
  //     });
  //     portfolio_btn.textContent = 'Показать еще'
  //     portfolio_btn.classList.remove('opened')
  // }

});
MicroModal.init({
  onClose: function onClose(modal) {
    modal.querySelectorAll('iframe').forEach(function (iframe) {
      iframe.setAttribute('src', iframe.getAttribute('src'));
    });
  }
});
var swiper_screens_modal = [];
document.querySelectorAll('.gallery-container').forEach(function (n) {
  swiper_screens_modal.push(new Swiper(n.querySelector('.portfolio-screen-modal'), {
    navigation: {
      nextEl: n.querySelector('.modal_next'),
      prevEl: n.querySelector('.modal_prev')
    },
    autoHeight: true,
    spaceBetween: 20
  }));
});
var portfolio_screen = document.querySelectorAll(".portfolio-screen");
var swiper_screens = [];
Array.from(portfolio_screen).forEach(function (element, i) {
  swiper_screens.push(new Swiper(element, {
    spaceBetween: 20,
    effect: "fade",
    autoplay: {
      delay: 2000
    },
    simulateTouch: false,
    navigation: {
      nextEl: ".portfolio-next",
      prevEl: ".portfolio-prev"
    }
  }));
  Array.from(element.nextElementSibling.querySelectorAll(".portfolio-thumb")).forEach(function (item, idx) {
    item.addEventListener('click', function () {
      swiper_screens[i].slideTo(idx);
    });
  });
  Array.from(element.querySelectorAll('.gallery-toggler')).forEach(function (tooggler) {
    tooggler.addEventListener('click', function () {
      console.log('clicked', swiper_screens[i].activeIndex, element.dataset.target);
      swiper_screens_modal[i].slideTo(swiper_screens[i].activeIndex);
      MicroModal.show(element.dataset.target);
    });
  });
});
var selector = document.querySelectorAll(".phone-input");
var im = new Inputmask("+7 999 999 99 99");
im.mask(selector);
Array.from(document.querySelectorAll(".video-preview")).forEach(function (element) {
  element.addEventListener('click', function () {
    element.classList.add('hidden-important');
  });
});

function handleSubmit(e) {
  e.preventDefault();
  var phone = Inputmask.unmask(e.target.elements.phone.value, {
    mask: "+7 999 999 99 99"
  });

  if (phone.length < 10) {
    e.target.elements.phone.classList.add('bg-red-200');
  } else {
    e.target.elements.phone.classList.remove('bg-red-200');
    $.ajax({
      type: "POST",
      url: "email.php",
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
        phone: phone,
        id: e.target.dataset.form
      }),
      success: function success() {
        console.log('asd');
        ym(87730208, 'reachGoal', 'formsend');
        window.location.href = "https://catalog.art-sauna.com/thankyou";
      }
    });
    ym(87730208, 'reachGoal', 'formsend');
    window.location.href = "https://catalog.art-sauna.com/thankyou";
  }
}

function handleSubmitQuestion(e) {
  e.preventDefault();

  if (!e.target.elements.name.value) {
    e.target.elements.name.classList.add('bg-red-200');
    return;
  } else {
    e.target.elements.name.classList.remove('bg-red-200');
  }

  if (!e.target.elements.text.value) {
    e.target.elements.text.classList.add('bg-red-200');
    return;
  } else {
    e.target.elements.text.classList.remove('bg-red-200');
  }

  var phone = Inputmask.unmask(e.target.elements.phone.value, {
    mask: "+7 999 999 99 99"
  });

  if (phone.length < 10) {
    e.target.elements.phone.classList.add('bg-red-200');
  } else {
    e.target.elements.phone.classList.remove('bg-red-200');
    $.ajax({
      type: "POST",
      url: "email.php",
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
        phone: phone,
        name: e.target.elements.name.value,
        text: e.target.elements.text.value,
        id: e.target.dataset.form
      }),
      success: function success() {
        ym(87730208, 'reachGoal', 'formsend');
        window.location.href = "https://catalog.art-sauna.com/thankyou";
      }
    });
    ym(87730208, 'reachGoal', 'formsend');
    window.location.href = "https://catalog.art-sauna.com/thankyou";
  }
}

$(document).ready(function () {
  $('#apply-main').on('submit', function (e) {
    handleSubmit(e);
  });
  $('#back-call').on('submit', function (e) {
    handleSubmit(e);
  });
  $('#contacts').on('submit', function (e) {
    handleSubmit(e);
  });
  $('#contacts-2').on('submit', function (e) {
    handleSubmit(e);
  });
  $('#question').on('submit', function (e) {
    handleSubmitQuestion(e);
  });
  $('#modal-online-form').on('submit', function (e) {
    handleSubmit(e);
  });
});

/***/ }),

/***/ "./src/app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/css-loader/dist/cjs.js):\nError: Can't resolve './fonts/PPObjectSans-Heavy.eot' in '/Users/mmm/work/art-sauna/src'\n    at finishWithoutResolve (/Users/mmm/work/art-sauna/node_modules/enhanced-resolve/lib/Resolver.js:309:18)\n    at /Users/mmm/work/art-sauna/node_modules/enhanced-resolve/lib/Resolver.js:386:15\n    at /Users/mmm/work/art-sauna/node_modules/enhanced-resolve/lib/Resolver.js:435:5\n    at eval (eval at create (/Users/mmm/work/art-sauna/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at /Users/mmm/work/art-sauna/node_modules/enhanced-resolve/lib/Resolver.js:435:5\n    at eval (eval at create (/Users/mmm/work/art-sauna/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)\n    at /Users/mmm/work/art-sauna/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:87:43\n    at /Users/mmm/work/art-sauna/node_modules/enhanced-resolve/lib/Resolver.js:435:5\n    at eval (eval at create (/Users/mmm/work/art-sauna/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at /Users/mmm/work/art-sauna/node_modules/enhanced-resolve/lib/Resolver.js:435:5\n    at processResult (/Users/mmm/work/art-sauna/node_modules/webpack/lib/NormalModule.js:758:19)\n    at /Users/mmm/work/art-sauna/node_modules/webpack/lib/NormalModule.js:860:5\n    at /Users/mmm/work/art-sauna/node_modules/loader-runner/lib/LoaderRunner.js:399:11\n    at /Users/mmm/work/art-sauna/node_modules/loader-runner/lib/LoaderRunner.js:251:18\n    at context.callback (/Users/mmm/work/art-sauna/node_modules/loader-runner/lib/LoaderRunner.js:124:13)\n    at Object.loader (/Users/mmm/work/art-sauna/node_modules/css-loader/dist/index.js:155:5)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.css"]();
/******/ 	
/******/ })()
;