const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', ()=>{
  menuList.classList.toggle('menu__list-open');
  overlay.classList.toggle('menu__open');
});

menuClose.addEventListener('click', ()=>{
  menuList.classList.remove('menu__list-open');
  overlay.classList.toggle('menu__open');
});