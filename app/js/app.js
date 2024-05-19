// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {
	var discountsSwiper = new Swiper(".discounts ", {
    loop: true,
    slidesPerView:  1,
    effect: "fade",
    // effect: "autoplay",
    spaceBetween: 10 ,
    // effect: "fade",
    pagination: {
        el: ".gallery2-pagination",
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

var discounts2Swiper = new Swiper(".discounts2 ", {
    loop: true,
    slidesPerView:  1,
    effect: "fade",
    // effect: "autoplay",
    spaceBetween: 10 ,
    // effect: "fade",
    pagination: {
        el: ".gallery2-pagination",
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

var news_itemsSwiper = new Swiper(".news_items ", {
    loop: true,
    slidesPerView:  1,
    // effect: "autoplay",
    spaceBetween: 10 ,
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
click.forEach((valu , index)=>{
    valu.addEventListener('click',function(e){
        e.preventDefault();
   this.nextElementSibling.classList.toggle('active')
   })
})
// click.addEventListener('click',function(e){
//    
//     learn_more.classList.toggle('active')
//     console.log(learn_more);
// })





})
