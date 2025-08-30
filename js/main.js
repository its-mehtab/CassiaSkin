"use strict";

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

document.addEventListener("DOMContentLoaded", function () {
  const wishlistBtn = document.querySelectorAll(".wishlist-btn");

  wishlistBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      console.log("clicked", btn);

      e.preventDefault();
      btn.classList.toggle("active");
    });
  });
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

// Products Functionalities Start
// =======================================================================================

const products = [
  {
    id: 1,
    name: "Firming Night Serum",
    category: "Serums",
    image: "images/product-19.jpg",
    description: "Night serum for firm and toned skin.",
    tags: ["Firming", "Night Serum"],
    sku: "SE006",
    price: {
      original: 79.0,
      offer: 75.0,
      discount_percentage: 5,
      currency: "USD",
      is_offer_active: true,
    },
    quantity_available: 74,
    offers: { description: "5% Off", valid_until: "2025-09-01" },
  },
  {
    id: 2,
    name: "Hydra Serum",
    category: "Serums",
    image: "images/product-30.jpg",
    description: "Ultra-hydrating serum for plump, nourished skin.",
    tags: ["Hydra", "Serum"],
    sku: "SE010",
    price: {
      original: 70.0,
      offer: 63.0,
      discount_percentage: 10,
      currency: "USD",
      is_offer_active: true,
    },
    quantity_available: 86,
    offers: { description: "10% Off", valid_until: "2025-09-04" },
  },
  {
    id: 3,
    name: "Youthful Eyes Cream",
    category: "Moisturizers & Creams",
    image: "images/product-4.jpg",
    description: "Soothing eye cream reducing puffiness and dark circles.",
    tags: ["Soothing", "Eye care"],
    sku: "MC002",
    price: {
      original: 58.0,
      offer: 48.0,
      discount_percentage: 17,
      currency: "USD",
      is_offer_active: true,
    },
    quantity_available: 99,
    offers: { description: "17% Off Limited Time", valid_until: "2025-09-02" },
  },
  {
    id: 4,
    name: "Radiance Day Cream",
    category: "Moisturizers & Creams",
    image: "images/product-8.jpg",
    description: "Radiance cream with SPF for day use.",
    tags: ["SPF", "Radiance"],
    sku: "MC004",
    price: {
      original: 48.0,
      offer: 44.0,
      discount_percentage: 8,
      currency: "USD",
      is_offer_active: true,
    },
    quantity_available: 61,
    offers: { description: "Back to School 8% Off", valid_until: "2025-09-03" },
  },
  {
    id: 5,
    name: "Glow Serum",
    category: "Serums",
    image: "images/product-3.jpg",
    description: "Brightening serum with vitamin C for glowing skin.",
    tags: ["Brightening", "Vitamin C"],
    sku: "SE001",
    price: {
      original: 87.0,
      offer: 72.0,
      discount_percentage: 17,
      currency: "USD",
      is_offer_active: true,
    },
    quantity_available: 84,
    offers: {
      description: "Back to School Sale 17% Off",
      valid_until: "2025-09-07",
    },
  },
  {
    id: 6,
    name: "Gentle Exfoliating Scrub",
    category: "Skin & Face",
    image: "images/product-9.jpg",
    description: "Mild exfoliating scrub for weekly use.",
    tags: ["Exfoliating", "Sensitive Skin"],
    sku: "SF003",
    price: {
      original: 41.0,
      offer: 35.0,
      discount_percentage: 15,
      currency: "USD",
      is_offer_active: true,
    },
    quantity_available: 81,
    offers: {
      description: "15% Off for Memorial Day",
      valid_until: "2025-09-05",
    },
  },
  {
    id: 7,
    name: "Blemish Corrector Serum",
    category: "Serums",
    image: "images/product-7.jpg",
    description: "Serum targeting acne and blemishes for clearer skin.",
    tags: ["Acne", "Blemish Correction"],
    sku: "SE002",
    price: {
      original: 56.0,
      offer: 42.0,
      discount_percentage: 25,
      currency: "USD",
      is_offer_active: true,
    },
    quantity_available: 77,
    offers: {
      description: "25% Off Summer Clearance",
      valid_until: "2025-08-31",
    },
  },
  {
    id: 8,
    name: "Aqua Hydration Cream",
    category: "Moisturizers & Creams",
    image: "images/product-2.jpg",
    description: "Intense hydration moisturizer suitable for daily use.",
    tags: ["Hydrating", "Dermatologist Tested"],
    sku: "MC001",
    price: {
      original: 49.0,
      offer: 49.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 130,
    offers: {},
  },
  {
    id: 9,
    name: "Rejuvenating Night Cream",
    category: "Moisturizers & Creams",
    image: "images/product-6.jpg",
    description: "Night cream with anti-aging ingredients for smooth skin.",
    tags: ["Anti-aging", "Night use"],
    sku: "MC003",
    price: {
      original: 63.0,
      offer: 63.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 113,
    offers: {},
  },
  {
    id: 10,
    name: "Soothing Day Lotion",
    category: "Moisturizers & Creams",
    image: "images/product-31.jpg",
    description: "Light moisturizer for daily skin balance.",
    tags: ["Lightweight", "Daily Use"],
    sku: "MC012",
    price: {
      original: 34.0,
      offer: 34.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 75,
    offers: {},
  },
  {
    id: 11,
    name: "Collagen Boost Serum",
    category: "Serums",
    image: "images/product-27.jpg",
    description: "Collagen boosting serum for firm skin.",
    tags: ["Collagen", "Firming"],
    sku: "SE009",
    price: {
      original: 96.0,
      offer: 96.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 78,
    offers: {},
  },
  {
    id: 12,
    name: "Brightening Peel",
    category: "Skin & Face",
    image: "images/product-15.jpg",
    description: "Gentle peel to brighten dull-looking skin.",
    tags: ["Brightening", "Peel"],
    sku: "SF005",
    price: {
      original: 45.0,
      offer: 45.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 80,
    offers: {},
  },
  {
    id: 13,
    name: "Soothing Aloe Serum",
    category: "Serums",
    image: "images/product-13.jpg",
    description: "Aloe-based serum soothing sensitive and irritated skin.",
    tags: ["Aloe", "Sensitive Skin"],
    sku: "SE004",
    price: {
      original: 62.0,
      offer: 62.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 52,
    offers: {},
  },
  {
    id: 14,
    name: "NutriRich Face Lotion",
    category: "Moisturizers & Creams",
    image: "images/product-23.jpg",
    description: "Nourishing daily lotion for skin nutrition.",
    tags: ["Nutrition", "Lotion"],
    sku: "MC009",
    price: {
      original: 36.0,
      offer: 36.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 81,
    offers: {},
  },
  {
    id: 15,
    name: "Charcoal Detox Mask",
    category: "Skin & Face",
    image: "images/product-21.jpg",
    description: "Charcoal mask detoxifying impurities from skin.",
    tags: ["Charcoal", "Detox"],
    sku: "SF007",
    price: {
      original: 43.0,
      offer: 43.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 60,
    offers: {},
  },
  {
    id: 16,
    name: "Deep Moisture Cream",
    category: "Moisturizers & Creams",
    image: "images/product-14.jpg",
    description: "Cream with deep-penetrating moisture for dry skin.",
    tags: ["Dry Skin", "Moisturizing"],
    sku: "MC006",
    price: {
      original: 47.0,
      offer: 47.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 73,
    offers: {},
  },
  {
    id: 17,
    name: "Blemish Corrector Serum",
    category: "Serums",
    image: "images/product-7.jpg",
    description: "Serum targeting acne and blemishes for clearer skin.",
    tags: ["Acne", "Blemish Correction"],
    sku: "SE002",
    price: {
      original: 56.0,
      offer: 56.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 77,
    offers: {},
  },
  {
    id: 18,
    name: "Vitamin E Serum",
    category: "Serums",
    image: "images/product-10.jpg",
    description: "Moisturizing serum rich in vitamin E for skin repair.",
    tags: ["Vitamin E", "Moisturizing"],
    sku: "SE003",
    price: {
      original: 49.99,
      offer: 49.99,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 117,
    offers: {},
  },
  {
    id: 19,
    name: "Anti-Pollution Day Cream",
    category: "Moisturizers & Creams",
    image: "images/product-20.jpg",
    description: "Day cream protecting against pollution exposure.",
    tags: ["Pollution", "Day Cream"],
    sku: "MC008",
    price: {
      original: 53.0,
      offer: 53.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 71,
    offers: {},
  },
  {
    id: 20,
    name: "Smoothing Face Serum",
    category: "Serums",
    image: "images/product-24.jpg",
    description: "Advanced serum for smooth and soft skin.",
    tags: ["Smoothing", "Soft Skin"],
    sku: "SE008",
    price: {
      original: 85.0,
      offer: 85.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 62,
    offers: {},
  },
  {
    id: 21,
    name: "Cleansing Facial Foam",
    category: "Skin & Face",
    image: "images/product-29.jpg",
    description: "Foaming cleanser for gentle daily washing.",
    tags: ["Cleansing", "Foam"],
    sku: "SF009",
    price: {
      original: 32.0,
      offer: 32.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 101,
    offers: {},
  },
  {
    id: 22,
    name: "NutriRich Face Lotion",
    category: "Moisturizers & Creams",
    image: "images/product-23.jpg",
    description: "Nourishing daily lotion for skin nutrition.",
    tags: ["Nutrition", "Lotion"],
    sku: "MC009",
    price: {
      original: 36.0,
      offer: 36.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 81,
    offers: {},
  },
  {
    id: 23,
    name: "Refreshing Day Gel",
    category: "Moisturizers & Creams",
    image: "images/product-12.jpg",
    description: "Light gel for refreshed morning skin.",
    tags: ["Refreshing", "Morning Care"],
    sku: "MC005",
    price: {
      original: 38.0,
      offer: 38.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 94,
    offers: {},
  },
  {
    id: 24,
    name: "Detoxifying Night Cream",
    category: "Moisturizers & Creams",
    image: "images/product-25.jpg",
    description: "Night cream for detox and skin renewal.",
    tags: ["Detox", "Night Cream"],
    sku: "MC010",
    price: {
      original: 67.0,
      offer: 67.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 92,
    offers: {},
  },
  {
    id: 25,
    name: "NutriRich Face Lotion",
    category: "Moisturizers & Creams",
    image: "images/product-23.jpg",
    description: "Nourishing daily lotion for skin nutrition.",
    tags: ["Nutrition", "Lotion"],
    sku: "MC009",
    price: {
      original: 36.0,
      offer: 36.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 81,
    offers: {},
  },
  {
    id: 26,
    name: "NutriRich Face Lotion",
    category: "Moisturizers & Creams",
    image: "images/product-23.jpg",
    description: "Nourishing daily lotion for skin nutrition.",
    tags: ["Nutrition", "Lotion"],
    sku: "MC009",
    price: {
      original: 36.0,
      offer: 36.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 81,
    offers: {},
  },
  {
    id: 27,
    name: "NutriRich Face Lotion",
    category: "Moisturizers & Creams",
    image: "images/product-23.jpg",
    description: "Nourishing daily lotion for skin nutrition.",
    tags: ["Nutrition", "Lotion"],
    sku: "MC009",
    price: {
      original: 36.0,
      offer: 36.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 81,
    offers: {},
  },
  {
    id: 28,
    name: "NutriRich Face Lotion",
    category: "Moisturizers & Creams",
    image: "images/product-23.jpg",
    description: "Nourishing daily lotion for skin nutrition.",
    tags: ["Nutrition", "Lotion"],
    sku: "MC009",
    price: {
      original: 36.0,
      offer: 36.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 81,
    offers: {},
  },
  {
    id: 29,
    name: "NutriRich Face Lotion",
    category: "Moisturizers & Creams",
    image: "images/product-23.jpg",
    description: "Nourishing daily lotion for skin nutrition.",
    tags: ["Nutrition", "Lotion"],
    sku: "MC009",
    price: {
      original: 36.0,
      offer: 36.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 81,
    offers: {},
  },
  {
    id: 30,
    name: "NutriRich Face Lotion",
    category: "Moisturizers & Creams",
    image: "images/product-23.jpg",
    description: "Nourishing daily lotion for skin nutrition.",
    tags: ["Nutrition", "Lotion"],
    sku: "MC009",
    price: {
      original: 36.0,
      offer: 36.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 81,
    offers: {},
  },
];

const offerProductsContainer = document.querySelector(
  ".offer-products-sec .row"
);
const swiperContainer = document.querySelectorAll(
  ".products-tab .swiper-wrapper"
);
const swiperContainer1 = document.querySelector(
  "#products-tabpanel-0 .swiper-wrapper"
);
const swiperContainer2 = document.querySelector(
  "#products-tabpanel-1 .swiper-wrapper"
);
const swiperContainer3 = document.querySelector(
  "#products-tabpanel-2 .swiper-wrapper"
);
const swiperContainer4 = document.querySelector(
  "#products-tabpanel-3 .swiper-wrapper"
);

const skinFaceProducts = products.filter((product) => {
  return product.category === "Skin & Face";
});
const moisturizerProducts = products.filter((product) => {
  return product.category === "Moisturizers & Creams";
});
const serumProducts = products.filter((product) => {
  return product.category === "Serums";
});
const offerProducts = products.filter((product) => {
  return product.price.is_offer_active;
});

offerProductsContainer && (offerProductsContainer.innerHTML = "");
swiperContainer?.forEach((currContainer) => {
  currContainer.innerHTML = "";
});

const insertProducts = (productsArry, wrapperClass, insertInto) => {
  productsArry.forEach((product) => {
    const productMainWrap = document.createElement("div");
    productMainWrap.className = wrapperClass;

    const ProductHTML = `<div class="product-item" data-id="${product.id}">
              <div class="product-img">
                ${
                  product.price.is_offer_active
                    ? `<span class="offer-text">${product.offers.description}</span>`
                    : ""
                }
                <ul class="product-icons">
                  <li>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#productDetailsModal">Quick View</a>
                  </li>
                  <li>
                    <a href="#" class="wishlist-btn">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M41.68 9.21999C40.6585 8.198 39.4456
                                7.38728 38.1107 6.83416C36.7758 6.28103 35.345
                                5.99634 33.9 5.99634C32.455 5.99634 31.0242
                                6.28103 29.6893 6.83416C28.3544 7.38728 27.1415
                                8.198 26.12 9.21999L24 11.34L21.88
                                9.21999C19.8166 7.15661 17.0181 5.99741 14.1
                                5.99741C11.1819 5.99741 8.38338 7.15661 6.31999
                                9.21999C4.25661 11.2834 3.09741 14.0819 3.09741
                                17C3.09741 19.9181 4.25661 22.7166 6.31999
                                24.78L24 42.46L41.68 24.78C42.702 23.7585
                                43.5127 22.5456 44.0658 21.2107C44.6189 19.8758
                                44.9036 18.445 44.9036 17C44.9036 15.555 44.6189
                                14.1242 44.0658 12.7893C43.5127 11.4544 42.702
                                10.2415 41.68 9.21999Z"
                          stroke="currentColor"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-shopping-cart"
                      >
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path
                          d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                        ></path>
                      </svg>
                    </a>
                  </li>
                </ul>
                <img src="images/product-1.jpg" alt="" />
              </div>
              <div class="product-content">
                <div class="product-content-left">
                  <a href="product.html?id=${product.id}">
                    <h3>${product.name}</h3>
                  </a>
                  <div class="price">
                    <span class="offered-price">$${product.price.offer.toFixed(
                      2
                    )}</span>
                    ${
                      product.price.is_offer_active
                        ? `<del class="original-price">$${product.price.original.toFixed(
                            2
                          )}</del>`
                        : ""
                    }
                  </div>
                </div>
                <a href="product.html?id=${product.id}" class="arrow-btn">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.48242 19.7627L19.9824 7.2627C20.1289 7.13249 20.2266 6.97786 20.2754 6.79883C20.3242 6.61979 20.3242 6.43669 20.2754 6.24951C20.2266 6.06234 20.137 5.90365 20.0068 5.77344C19.8766 5.64323 19.7179 5.55371 19.5308 5.50488C19.3436 5.45605 19.1605 5.45605 18.9814 5.50488C18.8024 5.55371 18.6478 5.65137 18.5176 5.79785L6.01758 18.2979C5.82227 18.5094 5.72461 18.7536 5.72461 19.0303C5.72461 19.307 5.82633 19.547 6.02979 19.7505C6.23324 19.9539 6.47331 20.0557 6.75 20.0557C7.02669 20.0557 7.27083 19.958 7.48242 19.7627ZM18.2002 15.9053C18.2165 16.1982 18.3223 16.4424 18.5176 16.6377C18.7129 16.833 18.957 16.9307 19.25 16.9307C19.543 16.9307 19.7871 16.833 19.9824 16.6377C20.1777 16.4424 20.2835 16.1982 20.2998 15.9053V6.53027C20.2835 6.2373 20.1777 5.99316 19.9824 5.79785C19.7871 5.60254 19.543 5.49675 19.25 5.48047H9.875C9.58203 5.49675 9.33789 5.60254 9.14258 5.79785C8.94727 5.99316 8.84961 6.2373 8.84961 6.53027C8.84961 6.82324 8.94727 7.06738 9.14258 7.2627C9.33789 7.45801 9.58203 7.5638 9.875 7.58008H18.2002V15.9053Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>`;

    productMainWrap.innerHTML = ProductHTML;

    insertInto?.appendChild(productMainWrap);
  });
};

insertProducts(
  offerProducts.slice(0, 4),
  "col-lg-3 col-md-6 d-flex align-items-stretch",
  offerProductsContainer
);

insertProducts(skinFaceProducts, "swiper-slide", swiperContainer1);
insertProducts(moisturizerProducts, "swiper-slide", swiperContainer2);
insertProducts(serumProducts, "swiper-slide", swiperContainer3);
insertProducts(offerProducts, "swiper-slide", swiperContainer4);
