//if scrolling more than 20 units, apply sticky class to the navbar, else remove it. Gives cool transition effect

$(document).ready(function(){
 $(window).scroll(function(){
  if(this.scrollY > 20){
   $('.navbar').addClass("sticky");
  }else{
   $('.navbar').removeClass("sticky");
  }
  if(this.scrollY > 500){
    $('.scroll-up-btn').addClass("show");
  }else{
    $('.scroll-up-btn').removeClass("show");
  }
 });

  //slide up
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop:0});
    $('html').css("scrollBehavior", "auto");
  });

 //toggle menu/navbar script
 $('.menu-btn').click(function(){
  $('.navbar .menu').toggleClass("active");
  $('.menu-btn i').toggleClass("active");
 });

 //typing animation
 var typed = new Typed(".typing", {
   strings: ["Game Designer" , "Developer", "Musician"],
   typeSpeed: 100,
   backSpeed: 60,
   loop: true
 });

 var typed = new Typed(".typing-2", {
   strings: ["Game Designer" , "Developer", "Musician"],
   typeSpeed: 100,
   backSpeed: 60,
   loop: true
 });
 //owl carousel script
 $('.carousel').owlCarousel({
   margin: 20,
   loop: false,
   autoplay: true,
   autoplayTimeOut: 2000,
   autoplayHoverPause: true,
   responsive:{
    0:{
     items:1,
     nav: false
    },
    600:{
     items:2,
     nav: false
    },
    1000:{
     items:3,
     nav: false
    }
   }
 });
});
