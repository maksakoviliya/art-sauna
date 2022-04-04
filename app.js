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
    var i = 0;
    Array.from(portfolio_items).forEach(function (element) {
      if (element.classList.contains('hidden')) {
        if (i < 2) {
          element.classList.remove('hidden');
          i++;
        }
      }
    });

    if (!document.querySelectorAll(".portfolio-item.hidden").length) {
      portfolio_btn.textContent = 'Скрыть';
      portfolio_btn.classList.add('opened');
    }
  } else {
    Array.from(portfolio_items).forEach(function (element, j) {
      if (j > 1) {
        element.classList.add('hidden');
      }
    });
    portfolio_btn.textContent = 'Показать еще';
    portfolio_btn.classList.remove('opened');
  }
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
}); // async function handleSubmit(e) {
//     e.preventDefault()
//
//     let phone = Inputmask.unmask(e.target.elements.phone.value, {mask: "+7 999 999 99 99"})
//     if (phone.length < 10) {
//         e.target.elements.phone.classList.add('bg-red-200')
//     } else {
//         e.target.elements.phone.classList.remove('bg-red-200')
//         fetch('email.php', {
//             method: 'POST',
//             body: JSON.stringify({
//                 name: 'no-reply@art-sauna.ru',
//                 email: 'no-reply@art-sauna.ru',
//                 subject: 'subject',
//                 message: 'I am message',
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//             .then((response) => {
//                 console.log('res', response)
//             })
//             .catch((error) => {
//                 console.error(error)
//                 e.target.elements.phone.classList.add('bg-red-200')
//             });
//     }
// }
//
// function handleSubmitQuestion(e) {
//     e.preventDefault()
//
//     let phone = Inputmask.unmask(e.target.elements.phone.value, {mask: "+7 999 999 99 99"})
//     if (phone.length < 10) {
//         e.target.elements.phone.classList.add('bg-red-200')
//     } else {
//         e.target.elements.phone.classList.remove('bg-red-200')
//     }
// }
//
// document.getElementById('apply-main').addEventListener("submit", handleSubmit)
// document.getElementById('back-call').addEventListener("submit", handleSubmit)
// document.getElementById('contacts').addEventListener("submit", handleSubmit)
// document.getElementById('contacts-2').addEventListener("submit", handleSubmit)
// document.getElementById('question').addEventListener("submit", handleSubmitQuestion)

$(document).ready(function () {
  $('#apply-main').on('submit', function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "email.php"
    }).done(function (data) {
      console.log('data', data);
    });
  });
});
/******/ })()
;