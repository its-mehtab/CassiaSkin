// Fixed navbar
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $("header").addClass("fixed-nav");
  } else {
    $("header").removeClass("fixed-nav");
  }
});
// Fixed navbar End

// const navItem = document.querySelectorAll(".nav-link");

// navItem.forEach((currNav) => {
//   currNav.addEventListener("mouseover", function () {
//     // console.log(currNav);
//     currNav.classList.add("position-relative");
//   });
// });

// ===============================================================================

// Scroll Top navbar
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $(".scroll-top").addClass("scroll-top-show");
  } else {
    $(".scroll-top").removeClass("scroll-top-show");
  }
});
// Scroll Top End

// ======================================================================================
// $(".owl-carousel").owlCarousel({
//   loop: true,
//   autoPlay: true,
//   autoplayTimeout: 500,
//   margin: 20,
//   nav: false,
//   dots: false,
//   // smartSpeed: 250000,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 3,
//     },
//     1000: {
//       items: 7,
//     },
//   },
// });

new Swiper(".marquee", {
  slidesPerView: 7,
  spaceBetween: 30,
  // freeMode: true,
  loop: true,
  // autoplay: {
  //   delay: 500,
  //   disableOnInteraction: false,
  // },
});

new Swiper(".skin-care-slider", {
  slidesPerView: 5,
  spaceBetween: 20,
});
