$(function() {
  if($(window).scrollTop() > 150) {
      $(".header").addClass("scroll-active");
      $("#mobileLogo").addClass("visible");
  } else {
      //remove the background property so it comes transparent again (defined in your css)
    $(".header").removeClass("scroll-active");
    $("#mobileLogo").removeClass("visible");
  }
});

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 150) {
            $(".header").addClass("scroll-active");
            $("#mobileLogo").addClass("visible");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("scroll-active");
           $("#mobileLogo").removeClass("visible");
        }
    });
});

var swiper = new Swiper(".product-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    // autoplay: {
    //     delay: 7000,
    //     disableOnInteraction: false,
    //   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});

$(document).ready(function(){
  $("#btnScrollUp").click(function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});

$("#btnMobileHeader").click(function(){
  $("#mobileDisplay").toggleClass("active");
  // $("#mobileLogo").toggleClass("visible");
});

$(".hide-click").click(function(){
  $("#mobileDisplay").toggleClass("active");
  // $("#mobileLogo").toggleClass("visible");
});