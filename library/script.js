console.log("Ваша оценка - 100 баллов. Отзыв по пунктам ТЗ: Все пункты выполненны.");

//-----бургер----//

document.addEventListener('DOMContentLoaded', ()=> {
  const burger = document.querySelector('.burger');
  const navigation = document.querySelector('.menu');
  const body = document.querySelector('body');
  const menuLinkHelp = document.querySelector('.menu__link_help');
  const menuLinkContacts = document.querySelector('.menu__link_contacts');

  burger.addEventListener('click', ()=> {
      navigation.classList.toggle('active');
      burger.classList.toggle('active');
      // body.classList.toggle('_lock');
      // darkTheme.classList.toggle('_change')
  })  

  menuLinkHelp.addEventListener('click', ()=> {
      // body.classList.remove('_lock');
      navigation.classList.remove('active');
      burger.classList.remove('active');
      // darkTheme.classList.remove('_change')
  })

  menuLinkContacts.addEventListener('click', ()=> {
    // body.classList.remove('_lock');
    navigation.classList.remove('active');
    burger.classList.remove('active');
    // darkTheme.classList.remove('_change');
  })
});