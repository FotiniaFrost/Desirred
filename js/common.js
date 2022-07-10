

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:4,
    loop:true,
    margin:0,
    nav:true,
    navText:"",
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
      768:{
        items:4,
        nav:true
      },
      480:{
        items:3,
        nav:true
      },
      280:{
        items:2,
        nav:true
      }
    }   
  });
});