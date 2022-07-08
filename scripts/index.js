const headerLogoActive = document.querySelector('.header__logo-img');
const headerMenuText = document.querySelectorAll('.header__menu-text');
const introButton = document.querySelector('.intro__button');
const diagramLink = document.querySelector('.diagram__link');
const sliderPrev = document.querySelectorAll('.slider__prev');
const sliderNext = document.querySelectorAll('.slider__next');
const contactsLink = document.querySelectorAll('.contacts__link');
const footerNav = document.querySelectorAll('.footer__nav-logo');
const footerText = document.querySelector('.footer__about-text');
const footerAboutImg = document.querySelector('.footer__about-img');
const footerLogo = document.querySelector('.footer__logo');

footerLogo.addEventListener('click', () => {
    footerLogo.src = 'images/logofooter.svg'
    footerLogo.style.opacity = '0.3'
    footerLogo.style.transition = '0.3s'
})

footerText.addEventListener('click', () => {
    footerAboutImg.src = "images/htmlacademyColor.svg";
    footerAboutImg.style.opacity = '0.3';
    footerAboutImg.style.transition = '0.3s'
})

footerAboutImg.addEventListener('click', () => {
    footerAboutImg.src = "images/htmlacademyColor.svg";
    footerAboutImg.style.opacity = '0.3';
    footerAboutImg.style.transition = '0.3s'
})

introButton.addEventListener('focus', () => {
    introButton.style.background = '#fff'
})

footerNav.forEach(function(nav) {
    nav.addEventListener('click', () => {
        nav.style.opacity = '0.1'
    })
})

headerLogoActive.addEventListener('click', () => {
    headerLogoActive.style.opacity = '0.3';
    headerLogoActive.style.transition = '-0.3s'
})

headerMenuText.forEach(function(hov) {
    hov.addEventListener('focus', () => {
        hov.style.borderBottom = '2px #FFF solid'
        hov.style.paddingBottom = '9px'
        hov.style.transition = '-0.3s'
        hov.style.opacity = '1'
    })
    })


headerMenuText.forEach(function(hov) {
hov.addEventListener('blur', () => {
    hov.style.opacity = '0.3'
    hov.style.transition = '-0.3s'
    hov.style.border = 'none'
})
})

introButton.addEventListener('click', () => {
    introButton.style.color = 'rgba(210, 40, 86, 0.3)'
})

diagramLink.addEventListener('click', () => {
    diagramLink.style.opacity = '0.3'
    diagramLink.style.color = '#283645'
})

contactsLink.forEach(function(contact) {
contact.addEventListener('click', () => {
    contact.style.opacity = '0.3';
    contact.style.color ='#283645'
})
})



/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider__item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

sliderNext.forEach(function(slideNext){
    slideNext.addEventListener('click', () => {
  plusSlide()
})
})

sliderPrev.forEach(function(slidePrev) {
    slidePrev.addEventListener('click', () =>{
        minusSlide()
    })
})
