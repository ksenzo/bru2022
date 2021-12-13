"use strict";

let closeMenuBtn = document.getElementById('close-menu-btn');
let openMenuBtn = document.getElementById('open-menu-btn');
let body = document.body;
let video = document.getElementById('video');
let circlePlayButton = document.getElementById('video-play-btn');
let mql = window.matchMedia('(max-width: 768px)');
let ourTeamActive = document.querySelectorAll('.our-team__active');
let plusBtn = document.querySelectorAll('.our-team__plus-img');
let teammeatOne = document.getElementById('teammeat-one');
let teammeatTwo = document.getElementById('teammeat-two');
let teammeatThree = document.getElementById('teammeat-three');
let teammeatFour = document.getElementById('teammeat-four');
let teammeatFive = document.getElementById('teammeat-five');
let teammeatSix = document.getElementById('teammeat-six');
let teammeatSeven = document.getElementById('teammeat-seven');
let lastLeftTeam = document.getElementById('last-left-team');
let lastRightTeam = document.getElementById('last-right-team');
let shopBag = document.getElementById('shop-bag-img');
let popUpBody = document.querySelector('.popup__body');
let popUp = document.querySelector('.popup');
let popUpClose = document.querySelector('.popup__img-close');
let shopBagMobile = document.getElementById('shop-bag-img-mobile');


if (shopBag) {
   shopBag.addEventListener('click', function (e) {
      popUpBody.classList.add('__active');
      popUp.style.display = 'block';
      body.classList.add('__noscroll');
   });
}

if (shopBagMobile) {
   shopBagMobile.addEventListener('click', function (e) {
      popUpBody.classList.add('__active');
      popUp.style.display = 'block';
      body.classList.add('__noscroll');
   });
}

if (popUpClose) {
   popUpClose.addEventListener('click', function (e) {
      popUpBody.classList.remove('__active');
      popUp.style.display = 'none';
      body.classList.remove('__noscroll');
   });
}


for (let i = 0; i < plusBtn.length; i++) {
   plusBtn[i].addEventListener("click", function() {
      plusBtn[i].classList.toggle("__active");
      ourTeamActive[i].classList.toggle("__active");
   });
}


window.onscroll = function showHeader() {
   let fixedHeader = document.querySelector('.header-homepage');
   if (window.pageYOffset > 50) {
      fixedHeader.classList.add('header-homepage__fixed');
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

const swiper = new Swiper('.image-slider', {
   slidesPerView: 1,
   spaceBetween: 30,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   }
});

function togglePlay() {
   if (video.paused || video.ended) {
      video.play();
   } else {
      video.pause();
   }
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);

video.addEventListener("play", function () {
   circlePlayButton.style.opacity = 0;
});

video.addEventListener("pause", function () {
   circlePlayButton.style.opacity = 1;
});

const swiperTwo = new Swiper('.pictures__images-slider', {
   slidesPerView: 'auto',
   spaceBetween: 20,
   freeMode: true
});


window.onscroll = function showHeader() {
   let fixedHeader = document.querySelector('.header-homepage');
   if (window.pageYOffset > 50) {
      fixedHeader.classList.add('header-homepage__fixed');
   } else {
      fixedHeader.classList.remove('header-homepage__fixed');
   }
};



