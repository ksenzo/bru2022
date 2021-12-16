let openMenuCollectionBtn = document.querySelector('.header-collection__menu-burger');
let closeMenuCollectionBtn = document.getElementById('closeImgCollection');
let body = document.body;
let productImgOne = document.querySelector('.product-beer__kind-image1');
let productImgTwo = document.querySelector('.product-beer__kind-image2');
let productImgThree = document.querySelector('.product-beer__kind-image3');
let productImgFour = document.querySelector('.product-beer__kind-image4');
let imgProductTitle = document.getElementById('img-product-title');
let sourceProductTitle = document.getElementById('source-product-title');
let ingridients = document.querySelectorAll('.what-is-bru-product__ingredients');
let ingridientsActiveText = document.querySelectorAll('.what-is-bru-product__text-active');
let productContainer = document.querySelector('.what-is-bru-product__left');
let brucap = document.getElementById('img-bru-cap');
let plusBtn = document.querySelectorAll('.faq__img');
let ourTeamActive = document.querySelectorAll('.faq__active');
let shopBag = document.getElementById('shop-bag-img');
let popUpBody = document.querySelector('.popup__body');
let popUp = document.querySelector('.popup');
let popUpClose = document.querySelector('.popup__img-close');
let shopBagMobile = document.getElementById('shop-bag-img-mobile');
let productBeerBody = document.querySelector('.product-beer__body');
let productSlider = document.querySelector('.product-beer__slider');
let faqBody = document.querySelector('.faq');
let halfPlusOne = document.querySelectorAll('.half-of-plus');
let halfPlusTwo = document.querySelectorAll('.half-of-plus2');

for (let i = 0; i < ingridients.length; i++) {
   ingridients[i].addEventListener("click", function() {
      ingridientsActiveText[i].classList.toggle("__active");
      halfPlusOne[i].classList.toggle("__active");
      halfPlusTwo[i].classList.toggle("__active");
   });
}



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
   plusBtn[i].addEventListener("click", function() {
      plusBtn[i].classList.toggle("__active");
      ourTeamActive[i].classList.toggle("__active");
   });
}

if (productImgOne) {
   productImgOne.addEventListener('click', function (e) {
      productImgOne.classList.add('__active');
      productImgTwo.classList.remove('__active');
      productImgThree.classList.remove('__active');
      productImgFour.classList.remove('__active');
      imgProductTitle.src = 'img/product/bru.png';
      sourceProductTitle.srcset = 'img/product/bru.webp';
   });
}

if (productImgTwo) {
   productImgTwo.addEventListener('click', function (e) {
      productImgOne.classList.remove('__active');
      productImgTwo.classList.add('__active');
      productImgThree.classList.remove('__active');
      productImgFour.classList.remove('__active');
      imgProductTitle.src = 'img/product/bru2.png';
      sourceProductTitle.srcset = 'img/product/bru2.webp';
   });
}

if (productImgThree) {
   productImgThree.addEventListener('click', function (e) {
      productImgOne.classList.remove('__active');
      productImgTwo.classList.remove('__active');
      productImgThree.classList.add('__active');
      productImgFour.classList.remove('__active');
      imgProductTitle.src = 'img/product/bru3.png';
      sourceProductTitle.srcset = 'img/product/bru3.webp';
   });
}

if (productImgFour) {
   productImgFour.addEventListener('click', function (e) {
      productImgOne.classList.remove('__active');
      productImgTwo.classList.remove('__active');
      productImgThree.classList.remove('__active');
      productImgFour.classList.add('__active');
      imgProductTitle.src = 'img/product/bruu4.png';
      sourceProductTitle.srcset = 'img/product/bruu4.webp';
   });
}



window.onscroll = function showHeaderCollection() {
   let fixedHeaderCollection = document.querySelector('.header-collection');
   if (window.pageYOffset > 0) {
      fixedHeaderCollection.classList.add('__fixed');
      productBeerBody.style.padding = "114px 0 80px 0";
   } else {
      fixedHeaderCollection.classList.remove('__fixed');
      productBeerBody.style.padding = "0 0 0 0";
   }
};


if (openMenuCollectionBtn) {
   const menuActive = document.querySelector('.header-collection__menu-mobile');
   openMenuCollectionBtn.addEventListener('click', function (e) {
      menuActive.classList.add('__active');
   });
}

if (closeMenuCollectionBtn) {
   const menuActive = document.querySelector('.header-collection__menu-mobile');
   closeMenuCollectionBtn.addEventListener('click', function (e) {
      menuActive.classList.remove('__active');
   });
}

if (openMenuCollectionBtn) {
   openMenuCollectionBtn.addEventListener('click', function (e) {
      body.classList.add('__noscroll');
   });
}

if (closeMenuCollectionBtn) {
   closeMenuCollectionBtn.addEventListener('click', function (e) {
      body.classList.remove('__noscroll');
   });
}

const swiperTwo = new Swiper('.product-beer__slider', {
   slidesPerView: 1,
   spaceBetween: 0 ,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   centerSlides: true,
   autoHeight: true
});