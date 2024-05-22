// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import Swiper from 'swiper';
import {
  Pagination,
  Keyboard,
  Mousewheel,
  EffectFade,
  Autoplay,
  Scrollbar,
  Navigation,
} from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  // Слайдер колец

  new Swiper('.image-slider', {
    modules: [
      Pagination,
      Keyboard,
      Mousewheel,
      EffectFade,
      Autoplay,
      Scrollbar,
      Navigation,
    ],

    pagination: {
      el: '.swiper-pagination',
      //Буллеты
      clickable: true,
      // Динамические буллеты
      dynamicBullets: true,
    },

    // включение/отключение
    simulateTouch: true,
    // Чувствительность свайпа  0/1 вкл/откл свайпа
    touchRatio: 1,
    // угол срабатывания свайпа/перетаскивания
    touchAngle: 45,
    //Курсор перетаскивания как рука
    // grabCursor: true,
    // переключение при клике на слайд
    slideToClickedSlide: true,

    // управление колесом мыши
    // mousewheel: {
    // Чувствительность колеса мыши
    //   sensitivity: 1,
    // класс обьекта на котором будет срабатывать прокрутка мышью
    //   eventsTarget: '.image-slider',
    // },

    // keyboard: {
    // включить/выключить
    //   enabled: true,
    //включить/выключить только когда слайдер в пределах вьюпорта
    //   onlyInViewport: true,
    // Включить/выключить управление клавишами pageUp/pageDown
    //   pageUpDown: true,
    // },

    // Автовысота
    // autoHeight: true,
    // колличество слайдов для показа
    slidesPerView: 1, // по умолчанию 1 так же можно указать 2.5 от слайда
    // Отключение функционала если сладов меньше чем нужно связанно с slidesPerView
    watchOverflow: true,
    // отступ между слайдами
    spaceBetween: 1,
    // колличество пролистываемых слайдов
    slidesPerGroup: 1,
    // Активный слайд по центру
    centeredSlides: true,
    // Можно менять стартовый слайд
    // initialSlide: 1,
    // бесконечный слайдер если slidesPerView: auto, то нужно добавить loopedSlides: 3
    loop: false,
    loopedSlides: 0,
    // свободный режим
    freeMode: true,
    // скорость переключения слайдов
    speed: 800,
    //  вертикальный слайдер  direction: 'vertical',
    direction: 'horizontal',
    // эффекты переключения слайдов
    // листание effect: 'slide'по умолчанию
    //смена прозрачности
    effect: 'fade',
  });

	const mySelectWrapper = new SelectWrapper("select", {
		onChange: (text, value) => {
				console.log(`Selected text: ${text}, value: ${value}`);
		}
});

  // accardion

  const accordionItems = document.querySelectorAll('.accordion__item');

  accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion__header');
    const body = item.querySelector('.accordion__body');

    header.addEventListener('click', function () {
      const isActive = item.classList.contains('accordion__item_show');

      accordionItems.forEach((accItem) => {
        accItem.classList.remove('accordion__item_show');
      });

      if (!isActive) {
        item.classList.add('accordion__item_show');
      }
    });
  });

  //================================================================

  var discountsSwiper = new Swiper('.discounts ', {
    loop: true,
    slidesPerView: 1,
    effect: 'fade',
    // effect: "autoplay",
    spaceBetween: 10,
    // effect: "fade",
    pagination: {
      el: '.gallery2-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.slider_elements',
    },

    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
  });

  var discounts2Swiper = new Swiper('.discounts2 ', {
    loop: true,
    slidesPerView: 1,
    effect: 'fade',
    // effect: "autoplay",
    spaceBetween: 10,
    // effect: "fade",
    pagination: {
      el: '.gallery2-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.discount2-next',
      prevEl: '.discount2-prev',
    },

    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
  });

  var news_itemsSwiper = new Swiper('.news_items ', {
    loop: true,
    slidesPerView: 1,
    // effect: "autoplay",
    spaceBetween: 10,
    // effect: "fade",

    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
  });
  // var mobile_swiper = new Swiper(".mobile_swiper ", {
  //     loop: true,
  //     slidesPerView:  1,
  //     // effect: "autoplay",
  //     spaceBetween: 10 ,
  //     // effect: "fade",

  //     // autoplay: {
  //     //     delay: 3000,
  //     //     disableOnInteraction: false,
  //     // },
  //     navigation: {
  //         nextEl: '.arrow',
  //         prevEl: '.arrow1',
  //     },
  // });

  let click = document.querySelectorAll('.main_content');
  // let learn_more = document.querySelectorAll('.learn_more')
  click.forEach((valu, index) => {
    valu.addEventListener('click', function (e) {
      e.preventDefault();
      this.nextElementSibling.classList.toggle('active');
    });
  });
  // click.addEventListener('click',function(e){
  //
  //     learn_more.classList.toggle('active')
  //     console.log(learn_more);
  // })
});
