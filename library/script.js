console.log("Ваша оценка - 50 баллов. Отзыв по пунктам ТЗ: Все пункты выполненны.");

//-----бургер----//

document.addEventListener('DOMContentLoaded', ()=> {
  const burger = document.querySelector('.burger');
  const navigation = document.querySelector('.menu');
  const menuLink = document.querySelectorAll('.menu__link');
  const menuLinkOverlay = document.querySelector('.header__overlay');
  const menuLinkWelcome = document.querySelector('.container_welcome');

  burger.addEventListener('click', ()=> {
      navigation.classList.toggle('active');
      burger.classList.toggle('active');
  })  

  menuLinkOverlay.addEventListener('click', ()=> {
    navigation.classList.remove('active');
    burger.classList.remove('active');
  })

  menuLinkWelcome.addEventListener('click', ()=> {
    navigation.classList.remove('active');
    burger.classList.remove('active');
  })


  menuLink.forEach(e => {
    e.addEventListener('click', () => {
      navigation.classList.remove('active');
      burger.classList.remove('active');
    })
  })
});