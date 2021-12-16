let closeMenuBtn = document.getElementById('close-menu-btn');
let openMenuBtn = document.getElementById('open-menu-btn');
let body = document.body;
let mql = window.matchMedia('(max-width: 768px)');
let ourTeamActive = document.querySelectorAll('.our-team__active');
let plusBtn = document.querySelectorAll('.our-team__plus-img');
let shopBag = document.getElementById('shop-bag-img');
let popUpBody = document.querySelector('.popup__body');
let popUp = document.querySelector('.popup');
let popUpClose = document.querySelector('.popup__img-close');
let shopBagMobile = document.getElementById('shop-bag-img-mobile');
let line6 = document.querySelector('.six-row__text');


if (shopBag) {
   shopBag.addEventListener('click', function (e) {
      popUpBody.classList.add('__active');
      popUp.classList.add('__active');
      body.classList.add('__noscroll');
   });
}

if (shopBagMobile) {
   shopBagMobile.addEventListener('click', function (e) {
      popUpBody.classList.add('__active');
      popUp.classList.add('__active');
      body.classList.add('__noscroll');
   });
}

if (popUpClose) {
   popUpClose.addEventListener('click', function (e) {
      popUpBody.classList.remove('__active');
      popUp.classList.remove('__active');
      body.classList.remove('__noscroll');
   });
}


for (let i = 0; i < plusBtn.length; i++) {
   plusBtn[i].addEventListener("click", function () {
      plusBtn[i].classList.toggle("__active");
      ourTeamActive[i].classList.toggle("__active");
   });
}


window.onscroll = function showHeader() {
   let fixedHeader = document.querySelector('.header-homepage');
   let pos = window.scrollY - 1000;
   let position6 = `${pos}px`;
   if (window.pageYOffset > 0) {
      fixedHeader.classList.add('header-homepage__fixed');
      line6.style.transform = 'translateX(-' + position6 + ')';
   } else {
      fixedHeader.classList.remove('header-homepage__fixed');
   }
};

if (openMenuBtn) {
   const menuActive = document.querySelector('.active-menu');
   openMenuBtn.addEventListener('click', function (e) {
      menuActive.classList.add('__active');
   });
}

if (closeMenuBtn) {
   const menuActive = document.querySelector('.active-menu');
   closeMenuBtn.addEventListener('click', function (e) {
      menuActive.classList.remove('__active');
   });
}

if (openMenuBtn) {
   openMenuBtn.addEventListener('click', function (e) {
      body.classList.add('__noscroll');
   });
}

if (closeMenuBtn) {
   closeMenuBtn.addEventListener('click', function (e) {
      body.classList.remove('__noscroll');
   });
}


const swiperTwo = new Swiper('.pictures__images-slider', {
   slidesPerView: 'auto',
   spaceBetween: 20,
   freeMode: true
});


