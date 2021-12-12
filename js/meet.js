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


if (plusBtn) {
   plusBtn.onclick = function (e) {
      plusBtn.classList.toggle('__active');
   };
}