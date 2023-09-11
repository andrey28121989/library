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
    profile.classList.remove('active');
    login.classList.remove('active');
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

//------ограниченная карусель------//

const sliderElement = document.querySelectorAll(".about_img");
const imgSlider = document.querySelector(".img__slider");
const scrollRight = document.querySelector(".slider__arrow_right");
const scrollLeft = document.querySelector(".slider__arrow_left");
const paginationBtns = document.querySelectorAll(".about__button");

let currentSlide = 0;
let sliderWidth;

function init() {
    sliderWidth = document.querySelector(".about_img_slider").offsetWidth;
    imgSlider.style.width = sliderWidth * sliderElement.length + 'px';
    sliderElement.forEach(item => {
        item.style.width = sliderWidth + 'px';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

scrollRight.addEventListener('click', function () {
  currentSlide++;
    if (currentSlide >= sliderElement.length) {
      currentSlide = 0;
    }
  rollSlider();
  updateSlider();
})

scrollLeft.addEventListener('click', function () {
  currentSlide--;
    if (currentSlide < 0) {
      currentSlide = sliderElement.length - 1;
    }
  rollSlider();
  updateSlider();
})

function rollSlider() {
  imgSlider.style.transform = 'translateX(-' + currentSlide * sliderWidth + 'px)';
}

updateSlider();

paginationBtns.forEach((button, index) => {
	button.addEventListener("click", () => {
		currentSlide = index;

		updateSlider();
    rollSlider();
	});
});

function updateSlider() {
  paginationBtns.forEach((button, index) => {
		button.classList.remove("about__button_active");

		if (index === currentSlide) {
			button.classList.add("about__button_active");
		}
	})

  if (currentSlide === 0) {
    scrollLeft.style = 'display: none;'
	} else {
		scrollLeft.style = 'display: inline-block;'
	}
	if (currentSlide === sliderElement.length - 1) {
    scrollRight.style = 'display: none;'
	} else {
    scrollRight.style = 'display: inline-block;'
	}
}

//--------модальное окно Profile--------//

const iconImg = document.querySelector('.icon__img');
const profile = document.querySelector('.profile');
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.menu');
const overlay = document.querySelector('.header__overlay');

iconImg.addEventListener('click', () => {
  profile.classList.toggle('active');
  burger.classList.remove('active');
  navigation.classList.remove('active');
  overlay.classList.toggle('active');
})

overlay.addEventListener('click', () => {
  profile.classList.remove('active');
  overlay.classList.remove('active');
})

//--------модальное окно Log In--------//

const profileLogin = document.querySelector('.profile__log-in');
const login = document.querySelector('.login');
const loginImg = document.querySelector('.login__img');
const getBtnLogin = document.querySelector('.get__btn_login');

profileLogin.addEventListener('click', () => {
  login.classList.toggle('active');
  profile.classList.remove('active');
  // overlay.classList.toggle('active');
})

getBtnLogin.addEventListener('click', () => {
  login.classList.toggle('active');
  overlay.classList.toggle('active');
})

overlay.addEventListener('click', () => {
  login.classList.remove('active');
  overlay.classList.remove('active');
})

loginImg.addEventListener('click', () => {
  login.classList.remove('active');
  overlay.classList.remove('active');
})


	

