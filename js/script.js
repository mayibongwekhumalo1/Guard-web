// header carousel

$( document ).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    autoPlay:true,
    autoPlayTimeout:5000,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
});



// sliding menu

const hamburger =document.querySelector(".hamburger");
const navMenu =document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});


// client review slider


$( document ).ready(function() {
    $('.owl-carousel2').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      navSpeed:5000,
      items:1,
      autoPlay:true,
      autoPlayTimeout:5000,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })
  });