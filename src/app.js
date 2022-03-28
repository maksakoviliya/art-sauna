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
    element.addEventListener('click', itemClick);
});

const swiper = new Swiper('.swiper_team', {
    loop: false,

    spaceBetween: 40
});
const swiper_merch = new Swiper('.swiper_merch', {
    loop: false,
    spaceBetween: 40
});
const swiper_portfolio = new Swiper('.swiper_portfolio', {
    loop: false,
    navigation: {
        prevEl: '.swiper_portfolio_prev',
        nextEl: '.swiper_portfolio_next',
    },
    pagination: {
        el: '.swiper-portfolio-pagination',
        renderBullet: function (index, className) {
            return `<span class="${ className } w-4 h-4 bg-neutral-750 rounded-full"></span>`;
        },
    },
    spaceBetween: 40
});

let types = document.querySelectorAll(".type_pagination");

function typePaginationClick() {
    Array.from(types).forEach(function (element) {
        element.classList.remove('active')
    });
    this.classList.add('active')
    swiper.slideTo(Array.from(types).indexOf(this), 75)
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

let types_prev = document.querySelectorAll(".types_prev");
Array.from(types_prev).forEach(function (element) {
    element.addEventListener('click', function () {
        swiper.slidePrev()
    });
});
let types_next = document.querySelectorAll(".types_next");
Array.from(types_next).forEach(function (element) {
    element.addEventListener('click', function () {
        swiper.slideNext()
    });
});

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
            console.log('portfolio_element.dataset.type', portfolio_element.dataset.type)
            console.log('element.dataset.target', element.dataset.target)
            if (portfolio_element.dataset.type == element.dataset.target) {
                console.log('portfolio_element', portfolio_element)
                console.log('remove')
                portfolio_element.classList.remove('hidden')
            } else {
                console.log('portfolio_element', portfolio_element)
                console.log('add')
                portfolio_element.classList.add('hidden')
            }
        });

        console.log('target', element.dataset['target'])
    });
});

let portfolio_items = document.querySelectorAll(".portfolio-item")
let portfolio_btn = document.getElementById('showOtherItems')
portfolio_btn.addEventListener('click', function () {
    Array.from(portfolio_items).forEach(function (element) {
        element.classList.remove('hidden')
    });
    portfolio_btn.classList.remove('flex-centered')
    portfolio_btn.classList.add('hidden')
})

let portfolio_thumb = document.querySelectorAll(".portfolio-thumbs")
let portfolio_thumbs = []
Array.from(portfolio_thumb).forEach(function (element, i) {
    portfolio_thumbs.push(new Swiper(element, {
        spaceBetween: 20,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".portfolio-next",
            prevEl: ".portfolio-prev",
        },
    }));
});

let portfolio_screen = document.querySelectorAll(".portfolio-screen")
let swiper_screens = []
Array.from(portfolio_screen).forEach(function (element, i) {
    swiper_screens.push(new Swiper(element, {
        spaceBetween: 20,
        navigation: {
            nextEl: ".portfolio-next",
            prevEl: ".portfolio-prev",
        },
        thumbs: {
            swiper: portfolio_thumbs[i],
        },

    }));
});


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
