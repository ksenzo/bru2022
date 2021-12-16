let ourTeamActive = document.querySelector('.our-team__active');
let plusBtn = document.querySelector('.our-team__plus-img');
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
let body = document.body;



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

if (plusBtn) {
   plusBtn.onclick = function (e) {
      plusBtn.classList.toggle('__active');
   };
}
