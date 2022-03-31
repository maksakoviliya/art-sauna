new Accordion('.accordion-container-first', {
    duration: 75,
    openOnInit: [0]
});
new Accordion('.accordion-container-second', {
    duration: 75,
    openOnInit: [0]
});

let items = document.querySelectorAll(".item");

function itemClick() {
    Array.from(items).forEach(function (element) {
        element.classList.remove('active')
    });
    this.classList.add('active')
    document.getElementById('items-screen').src = this.getAttribute("data-image");
}

Array.from(items).forEach(function (element) {
    element.addEventListener('mouseover', itemClick);
});

const swiper = new Swiper('.swiper_team', {
    loop: false,
    effect: "fade",
    simulateTouch: false,
    spaceBetween: 40,
    navigation: {
        prevEl: '.swiper_team_prev',
        nextEl: '.swiper_team_next',
    },
});
const swiper_merch = new Swiper('.swiper_merch', {
    loop: false,
    effect: "fade",
    spaceBetween: 40
});
const swiper_portfolio = new Swiper('.swiper_portfolio', {
    loop: false,
    navigation: {
        prevEl: '.swiper_portfolio_prev',
        nextEl: '.swiper_portfolio_next',
    },
    // simulateTouch: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    spaceBetween: 40,
    slideToClickedSlide: true,
    preventClicks: false,
    // preventClicksPropagation: false
});

document.querySelectorAll('.portfolio-item').forEach(n => {
    const slider = new Swiper(n.querySelector('.swiper_portfolio_mobile'), {
        navigation: {
            nextEl: n.querySelector('.portfolio_mobile_prev'),
            prevEl: n.querySelector('.portfolio_mobile_next'),
        },
        autoHeight: true,
        effect: "fade",
        spaceBetween: 20,
    });
});


let types = document.querySelectorAll(".type_pagination");

function typePaginationClick() {
    Array.from(types).forEach(function (element) {
        element.classList.remove('active')
    });
    this.classList.add('active')
    swiper.slideTo(Array.from(types).indexOf(this))
}

Array.from(types).forEach(function (element) {
    element.addEventListener('click', typePaginationClick);
});

swiper.on('slideChange', function (sw) {
    Array.from(types).forEach(function (element) {
        element.classList.remove('active')
    });

    types[sw.activeIndex].classList.add('active')
});

// let types_prev = document.querySelectorAll(".types_prev");
// Array.from(types_prev).forEach(function (element) {
//     element.addEventListener('click', function () {
//         swiper.slidePrev()
//     });
// });
// let types_next = document.querySelectorAll(".types_next");
// Array.from(types_next).forEach(function (element) {
//     element.addEventListener('click', function () {
//         swiper.slideNext()
//     });
// });

let merch_prev = document.querySelectorAll(".merch_prev");
Array.from(merch_prev).forEach(function (element) {
    element.addEventListener('click', function () {
        swiper_merch.slidePrev()
    });
});
let merch_next = document.querySelectorAll(".merch_next");
Array.from(merch_next).forEach(function (element) {
    element.addEventListener('click', function () {
        swiper_merch.slideNext()
    });
});

let portfolio_tab = document.querySelectorAll(".portfolio-tab")
let portfolio_panels = document.querySelectorAll('.portfolio-by-type')
Array.from(portfolio_tab).forEach(function (element) {
    element.addEventListener('click', function () {
        Array.from(portfolio_tab).forEach(function (element) {
            element.classList.remove('active')
        });

        element.classList.add('active')

        Array.from(portfolio_panels).forEach(function (portfolio_element) {
            if (portfolio_element.dataset.type == element.dataset.target) {
                portfolio_element.classList.remove('hidden')
            } else {
                portfolio_element.classList.add('hidden')
            }
        });
    });
});

let portfolio_items = document.querySelectorAll(".portfolio-item")
let portfolio_btn = document.getElementById('showOtherItems')
portfolio_btn.addEventListener('click', function () {
    if (!portfolio_btn.classList.contains('opened')) {
        Array.from(portfolio_items).forEach(function (element) {
            element.classList.remove('hidden')
        });
        portfolio_btn.textContent = 'Скрыть'
        portfolio_btn.classList.add('opened')
    } else {
        Array.from(portfolio_items).forEach(function (element, i) {
            if (i > 2) {
                element.classList.add('hidden')
            }
        });
        portfolio_btn.textContent = 'Показать еще'
        portfolio_btn.classList.remove('opened')
    }
})

MicroModal.init();

let swiper_screens_modal = []
document.querySelectorAll('.gallery-container').forEach(n => {
    swiper_screens_modal.push(new Swiper(n.querySelector('.portfolio-screen-modal'), {
        navigation: {
            nextEl: n.querySelector('.modal_next'),
            prevEl: n.querySelector('.modal_prev'),
        },
        autoHeight: true,
        spaceBetween: 20,
    }));
});

let portfolio_screen = document.querySelectorAll(".portfolio-screen")
let swiper_screens = []
Array.from(portfolio_screen).forEach(function (element, i) {

    swiper_screens.push(new Swiper(element, {
        spaceBetween: 20,
        effect: "fade",
        simulateTouch: false,
        navigation: {
            nextEl: ".portfolio-next",
            prevEl: ".portfolio-prev",
        },
    }));

    Array.from(element.nextElementSibling.querySelectorAll(".portfolio-thumb")).forEach(function (item, idx) {
        item.addEventListener('click', function () {
            swiper_screens[i].slideTo(idx)
        })
    })
    element.addEventListener('click', function () {
        console.log('cliced', swiper_screens[i].activeIndex, element.dataset.target)
        swiper_screens_modal[i].slideTo(swiper_screens[i].activeIndex)
        MicroModal.show(element.dataset.target);
    })
});

// function createComparison(element) {
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


let scroll = new SmoothScroll('a[href*="#"]');

let selector = document.querySelectorAll(".phone-input");

let im = new Inputmask("+7 999 999 99 99");
im.mask(selector);

Array.from(document.querySelectorAll(".video-preview")).forEach(function (element) {
    element.addEventListener('click', function () {
        element.classList.add('hidden-important')
    })
})
