let brucap = document.getElementById('img-bru-cap');
let productImgOne = document.querySelector('.product-beer__kind-image1');
let productImgTwo = document.querySelector('.product-beer__kind-image2');
let productImgThree = document.querySelector('.product-beer__kind-image3');
let productImgFour = document.querySelector('.product-beer__kind-image4');
let imgProductTitle = document.getElementById('img-bru-cap');
let sourceProductTitle = document.getElementById('source-product-title');
let shopBag = document.getElementById('shop-bag-img');
let openMenuCollectionBtn = document.querySelector('.header-collection__menu-burger');
let closeMenuCollectionBtn = document.getElementById('closeImgCollection');
let body = document.body;
let popUpBody = document.querySelector('.popup__body');
let popUp = document.querySelector('.popup');
let popUpClose = document.querySelector('.popup__img-close');
let shopBagMobile = document.getElementById('shop-bag-img-mobile');


window.onscroll = function showHeaderCollection() {
   let fixedHeaderCollection = document.querySelector('.header-collection');
   if (window.pageYOffset > 25) {
      fixedHeaderCollection.classList.add('__fixed');
   } else {
      fixedHeaderCollection.classList.remove('__fixed');
   }
};

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



if (productImgOne) {
   productImgOne.addEventListener('click', function (e) {
      productImgOne.classList.add('__active');
      productImgTwo.classList.remove('__active');
      productImgThree.classList.remove('__active');
      productImgFour.classList.remove('__active');
      imgProductTitle.src = 'img/bru-cap/cap1.png';
      sourceProductTitle.srcset = 'img/bru-cap/cap1.webp';
   });
}

if (productImgTwo) {
   productImgTwo.addEventListener('click', function (e) {
      productImgOne.classList.remove('__active');
      productImgTwo.classList.add('__active');
      productImgThree.classList.remove('__active');
      productImgFour.classList.remove('__active');
      imgProductTitle.src = 'img/bru-cap/cap1.png';
      sourceProductTitle.srcset = 'img/bru-cap/cap1.webp';
   });
}

if (productImgThree) {
   productImgThree.addEventListener('click', function (e) {
      productImgOne.classList.remove('__active');
      productImgTwo.classList.remove('__active');
      productImgThree.classList.add('__active');
      productImgFour.classList.remove('__active');
      imgProductTitle.src = 'img/bru-cap/cap1.png';
      sourceProductTitle.srcset = 'img/bru-cap/cap1.webp';
   });
}

if (productImgFour) {
   productImgFour.addEventListener('click', function (e) {
      productImgOne.classList.remove('__active');
      productImgTwo.classList.remove('__active');
      productImgThree.classList.remove('__active');
      productImgFour.classList.add('__active');
      imgProductTitle.src = 'img/bru-cap/cap1.png';
      sourceProductTitle.srcset = 'img/bru-cap/cap1.webp';
   });
}



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
