// Fixed navbar
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $("header").addClass("fixed-nav");
  } else {
    $("header").removeClass("fixed-nav");
  }
});
// Fixed navbar End

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

// new Swiper(".marquee", {
//   slidesPerView: "auto",
//   freeMode: true,
//   loop: true,
//   speed: 6500,
//   autoplay: {
//     delay: 0,
//     disableOnInteraction: false,
//   },
// });

new Swiper(".skin-care-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
  },
});

new Swiper(".products-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

const skinItemBtn = document.querySelectorAll(".skin-item");
const sliderItem = document.querySelectorAll(".skin-care-slider .swiper-slide");

skinItemBtn.forEach((currBtn) => {
  currBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const sliderBox = e.target.closest(".swiper-slide");

    sliderItem.forEach((currSlider) => {
      currSlider.classList.remove("skin-care-active");
    });

    sliderBox.classList.add("skin-care-active");
  });
});

if (window.innerWidth < 1200) {
  sliderItem.forEach((currSlider) => {
    currSlider.classList.add("skin-care-active");
  });
}

// ======================================================================================
const texts = document.querySelectorAll(".play-btn .text");
const radius = window.innerWidth > 400 ? 90 : 70;
console.log(radius);

texts.forEach((text) => {
  const chars = text.innerText.split("");
  const angleStep = 360 / chars.length;

  text.innerHTML = chars
    .map(
      (char, i) =>
        `<span style="transform: rotate(${
          i * angleStep
        }deg) translateY(-${radius}px);">${char}</span>`
    )
    .join("");
});

// ======================================================================================
const marqueeList = document.querySelector(".marquee-list");
marqueeList.innerHTML += marqueeList.innerHTML;
