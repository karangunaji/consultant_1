let navbar = document.querySelector('.header .navbar');
let contactInfo = document.querySelector('.contact-info');


document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   navbar.classList.remove('active');
}


// add a shadow on scroll  
window.addEventListener("scroll", () => {
   document.querySelector('header').classList.toggle('shadow', window.scrollY > 0);
 })



// home slider

var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
 });
 