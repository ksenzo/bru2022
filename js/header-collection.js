let openMenuCollectionBtn = document.querySelector('.header-collection__menu-burger');
let closeMenuCollectionBtn = document.getElementById('closeImgCollection');
let body = document.body;
let productImgOne = document.querySelector('.product-beer__kind-image1');
let productImgTwo = document.querySelector('.product-beer__kind-image2');
let productImgThree = document.querySelector('.product-beer__kind-image3');
let productImgFour = document.querySelector('.product-beer__kind-image4');
let imgProductTitle = document.getElementById('img-product-title');
let sourceProductTitle = document.getElementById('source-product-title');
let ingridientsBody = document.querySelector('.what-is-bru-product__ingridients-body');
let storyBody = document.querySelector('.what-is-bru-product__story-body');
let missionBody = document.querySelector('.what-is-bru-product__mission-body');
let textActiveIngr = document.getElementById('ingridients-text');
let textActiveMission = document.getElementById('mission-text');
let textActiveStory = document.getElementById('story-text');
let productContainer = document.querySelector('.what-is-bru-product__left');
let brucap = document.getElementById('img-bru-cap');
let plusBtn = document.querySelectorAll('.faq__img');
let ourTeamActive = document.querySelectorAll('.faq__active');
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



if(productContainer) {
   productContainer.addEventListener('click', function (e) {
      textActiveIngr.style.display = 'none';
      textActiveMission.style.display = 'none';
      textActiveStory.style.display = 'none';
   });
}


if(ingridientsBody) {
   ingridientsBody.addEventListener('click', function (e) {
      textActiveIngr.style.display = 'block';
      textActiveMission.style.display = 'none';
      textActiveStory.style.display = 'none';
   });
}

if(storyBody) {
   storyBody.addEventListener('click', function (e) {
      textActiveIngr.style.display = 'none';
      textActiveMission.style.display = 'none';
      textActiveStory.style.display = 'block';
   });
}

if(missionBody) {
   missionBody.addEventListener('click', function (e) {
      textActiveIngr.style.display = 'none';
      textActiveMission.style.display = 'block';
      textActiveStory.style.display = 'none';
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
   if (window.pageYOffset > 50) {
      fixedHeaderCollection.classList.add('__fixed');
   } else {
      fixedHeaderCollection.classList.remove('__fixed');
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