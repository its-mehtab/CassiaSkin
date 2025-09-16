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
    image: "images/firming-night-serum.jpg",
    description:
      "A silky overnight serum that supports skin’s natural renewal while you sleep. Peptides and botanical antioxidants help improve firmness, smooth fine lines, and boost elasticity. Wake to a more lifted, toned look with soft, cushiony hydration and a rested glow.",
    tags: ["Firming", "Night Serum", "Peptides"],
    sku: "SE001",
    price: {
      original: 79.0,
      offer: 75.0,
      discount_percentage: 5,
      currency: "USD",
      is_offer_active: true,
    },
    quantity_available: 74,
    offers: { description: "5% Off", valid_until: "2025-09-03" },
  },
  {
    id: 2,
    name: "Hydra Serum",
    category: "Serums",
    image: "images/hydra-serum.jpg",
    description:
      "Featherlight hydration that sinks in instantly and layers beautifully under makeup. A blend of multi-weight hyaluronic acid, mineral-rich water, and soothing panthenol floods skin with moisture for a fresh, plump look that lasts from morning to night without stickiness.",
    tags: ["Hydration", "Hyaluronic", "Serum"],
    sku: "SE002",
    price: {
      original: 70.0,
      offer: 63.0,
      discount_percentage: 10,
      currency: "USD",
      is_offer_active: true,
    },
    quantity_available: 86,
    offers: { description: "Back to Glow 10% Off", valid_until: "2025-09-06" },
  },
  {
    id: 3,
    name: "Youthful Eyes Cream",
    category: "Moisturizers & Creams",
    image: "images/youthful-eyes-cream.jpg",
    description:
      "A cushiony eye cream that visibly de-puffs and brightens the delicate under-eye area. Caffeine, ceramides, and light-reflecting minerals soften shadows, smooth fine lines, and strengthen the moisture barrier, leaving eyes refreshed, rested, and makeup-ready throughout the day.",
    tags: ["Eye Care", "De-puffing", "Brightening"],
    sku: "MC001",
    price: {
      original: 58.0,
      offer: 48.0,
      discount_percentage: 17,
      currency: "USD",
      is_offer_active: true,
    },
    quantity_available: 99,
    offers: { description: "17% Off Limited Time", valid_until: "2025-09-04" },
  },
  {
    id: 4,
    name: "Radiance Day Cream",
    category: "Moisturizers & Creams",
    image: "images/radiance-day-cream.jpg",
    description:
      "Daily moisturizer with built-in radiance. Lightweight, non-greasy hydration blends niacinamide and mineral SPF to even tone and defend against the look of dullness. Leaves skin softly luminous, comfortably moisturized, and perfectly prepped for makeup or no-makeup days.",
    tags: ["SPF", "Radiance", "Niacinamide"],
    sku: "MC002",
    price: {
      original: 48.0,
      offer: 44.0,
      discount_percentage: 8,
      currency: "USD",
      is_offer_active: true,
    },
    quantity_available: 61,
    offers: { description: "8% Off Day Glow", valid_until: "2025-09-05" },
  },
  {
    id: 5,
    name: "Glow Serum",
    category: "Serums",
    image: "images/glow-serum.jpg",
    description:
      "A brightening vitamin C serum that revives tired-looking skin. Stabilized L-ascorbic acid teams with ferulic acid and anti-pollution botanicals to target uneven tone and boost glow. Skin appears clearer, smoother, and more luminous with consistent morning use.",
    tags: ["Brightening", "Vitamin C", "Glow"],
    sku: "SE003",
    price: {
      original: 87.0,
      offer: 72.0,
      discount_percentage: 17,
      currency: "USD",
      is_offer_active: true,
    },
    quantity_available: 84,
    offers: {
      description: "Back to School 17% Off",
      valid_until: "2025-09-07",
    },
  },
  {
    id: 6,
    name: "Gentle Exfoliating Scrub",
    category: "Skin & Face",
    image: "images/gentle-exfoliating-scrub.jpg",
    description:
      "A soft, creamy scrub that refines texture without stripping. Rounded cellulose beads with lactic acid buff away dull surface cells, while aloe and oat calm sensitive complexions. Use once or twice weekly for instantly smoother, more even, makeup-ready skin.",
    tags: ["Exfoliating", "Sensitive Skin", "Lactic Acid"],
    sku: "SF001",
    price: {
      original: 41.0,
      offer: 35.0,
      discount_percentage: 15,
      currency: "USD",
      is_offer_active: true,
    },
    quantity_available: 81,
    offers: { description: "15% Off Refresh", valid_until: "2025-09-05" },
  },
  {
    id: 7,
    name: "Blemish Remover Serum",
    category: "Serums",
    image: "images/blemish-corrector-serum.jpg",
    description:
      "Target active breakouts and stubborn marks with a clarifying blend of encapsulated salicylic acid, zinc, and soothing centella. This fast-absorbing formula helps unclog pores, reduce redness, and refine texture, promoting visibly clearer, calmer skin with continued use.",
    tags: ["Acne", "Blemish Correction", "Salicylic"],
    sku: "SE004",
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
    image: "images/aqua-hydration-cream.jpg",
    description:
      "A cooling gel-cream that floods skin with long-lasting hydration. Multi-weight hyaluronic acid, squalane, and trehalose lock in moisture without heaviness, leaving combination and oily skin balanced, bouncy, and comfortably dewy through heat, humidity, and busy days.",
    tags: ["Hydrating", "Oil-Free", "Gel-Cream"],
    sku: "MC003",
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
    image: "images/rejuvenating-night-cream.jpg",
    description:
      "A plush night cream infused with bakuchiol, peptides, and ceramides to nourish and smooth as you sleep. Helps soften the look of fine lines, replenish moisture, and support a stronger barrier for fresh, rested, morning-after radiance.",
    tags: ["Anti-aging", "Night Use", "Ceramides"],
    sku: "MC004",
    price: {
      original: 63.0,
      offer: 56.7,
      discount_percentage: 10,
      currency: "USD",
      is_offer_active: true,
    },
    quantity_available: 113,
    offers: { description: "10% Off Night Renewal", valid_until: "2025-09-02" },
  },
  {
    id: 10,
    name: "Soothing Day Lotion",
    category: "Moisturizers & Creams",
    image: "images/soothing-day-lotion.jpg",
    description:
      "Lightweight daily moisturizer that calms and comforts stressed skin. Aloe, bisabolol, and vitamin E deliver breathable hydration that won’t clog pores. Skin feels balanced, soft, and ready for sunscreen or makeup with no greasy afterfeel.",
    tags: ["Lightweight", "Daily Use", "Calming"],
    sku: "MC005",
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
    image: "images/collagen-boost-serum.jpg",
    description:
      "A concentrated serum powered by signal peptides, amino acids, and vitamin B5 to visibly firm and smooth. Helps improve elasticity and bounce while replenishing moisture for a supple, youthful look that layers perfectly under moisturizers and sunscreens.",
    tags: ["Collagen", "Firming", "Peptides"],
    sku: "SE005",
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
    image: "images/brightening-peel.jpg",
    description:
      "A gentle at-home peel with mandelic, lactic, and fruit enzymes to smooth rough texture and brighten dullness. Rinses clean without tightness. Use weekly for a more refined look and a noticeably clearer, more radiant complexion.",
    tags: ["Brightening", "Peel", "AHA"],
    sku: "SF002",
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
    image: "images/soothing-aloe-serum.jpg",
    description:
      "A calming serum for sensitive and reactive skin. Organic aloe, centella asiatica, and oat beta-glucan relieve visible redness and support a healthy barrier. Lightweight hydration absorbs fast, leaving skin soft, comfortable, and resilient to daily stressors.",
    tags: ["Aloe", "Sensitive Skin", "Calming"],
    sku: "SE006",
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
    image: "images/nutririch-face-lotion.jpg",
    description:
      "Nourishing everyday lotion packed with vitamins, plant oils, and barrier-supporting ceramides. Provides comfortable, medium-weight hydration that absorbs quickly without residue, leaving skin soft, healthy-looking, and evenly moisturized from morning till night.",
    tags: ["Nutrition", "Lotion", "Ceramides"],
    sku: "MC006",
    price: {
      original: 36.0,
      offer: 32.0,
      discount_percentage: 11,
      currency: "USD",
      is_offer_active: true,
    },
    quantity_available: 81,
    offers: { description: "11% Off Daily Care", valid_until: "2025-09-08" },
  },
  {
    id: 15,
    name: "Charcoal Detox Mask",
    category: "Skin & Face",
    image: "images/charcoal-detox-mask.jpg",
    description:
      "A creamy charcoal mask that draws out impurities without over-drying. Kaolin, detoxifying binchotan charcoal, and willow bark refine the look of pores and smooth texture for a clearer, refreshed complexion in just ten minutes.",
    tags: ["Charcoal", "Detox", "Pore Care"],
    sku: "SF003",
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
    image: "images/deep-moisture-cream.jpg",
    description:
      "Luxuriously rich cream for dry, tight-feeling skin. Shea butter, squalane, and ceramides replenish lipids and lock in moisture to relieve flakiness and discomfort. Leaves skin velvety-soft and deeply nourished without heaviness or greasiness.",
    tags: ["Dry Skin", "Moisturizing", "Ceramides"],
    sku: "MC007",
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
    name: "Retinol Renewal Serum",
    category: "Serums",
    image: "images/retinol-renewal-serum.jpg",
    description:
      "A gentle, encapsulated retinol treatment designed for nightly use. Supports smoother texture, refined pores, and a more even tone without excessive dryness. Balanced with squalane and soothing bisabolol to deliver results while maintaining comfort.",
    tags: ["Retinol", "Night", "Resurfacing"],
    sku: "SE007",
    price: {
      original: 78.0,
      offer: 78.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 69,
    offers: {},
  },
  {
    id: 18,
    name: "Vitamin E Serum",
    category: "Serums",
    image: "images/vitamin-e-serum.jpg",
    description:
      "An intensely comforting serum for dry, compromised skin. Vitamin E, meadowfoam seed oil, and cholesterol help replenish essential lipids, support a healthier barrier, and defend against environmental stress, leaving skin cushioned and calm.",
    tags: ["Vitamin E", "Moisturizing", "Barrier Support"],
    sku: "SE008",
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
    image: "images/anti-pollution-day-cream.jpg",
    description:
      "Daily moisturizer that shields against environmental stress. Antioxidant-rich green tea, niacinamide, and vitamin C help defend from pollution while hydrating and brightening. Leaves skin soft, smooth, and better protected during commutes and busy city days.",
    tags: ["Pollution Defense", "Day Cream", "Antioxidants"],
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
    image: "images/smoothing-face-serum.jpg",
    description:
      "A silky serum with micro-exfoliating polyhydroxy acids and niacinamide to visibly smooth and refine without irritation. Improves the look of rough patches and uneven tone, leaving skin soft, radiant, and perfectly prepped for moisturizer.",
    tags: ["Smoothing", "PHA", "Soft Skin"],
    sku: "SE009",
    price: {
      original: 85.0,
      offer: 76.5,
      discount_percentage: 10,
      currency: "USD",
      is_offer_active: true,
    },
    quantity_available: 62,
    offers: { description: "10% Off Texture Treat", valid_until: "2025-09-09" },
  },
  {
    id: 21,
    name: "Cleansing Facial Foam",
    category: "Skin & Face",
    image: "images/cleansing-facial-foam.jpg",
    description:
      "Airy foaming cleanser that lifts away impurities, sunscreen, and light makeup without stripping. Amino-acid surfactants keep the skin’s pH happy while glycerin maintains moisture. Skin feels fresh, comfortable, and balanced after every wash.",
    tags: ["Cleansing", "Foam", "pH Balanced"],
    sku: "SF004",
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
    name: "Balancing Toner Mist",
    category: "Skin & Face",
    image: "images/balancing-toner-mist.jpg",
    description:
      "A replenishing facial mist that tones, hydrates, and soothes in one effortless step. Rose water, niacinamide, and panthenol help minimize the look of pores, calm redness, and refresh makeup anytime throughout the day.",
    tags: ["Toner", "Mist", "Niacinamide"],
    sku: "SF005",
    price: {
      original: 29.0,
      offer: 29.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 90,
    offers: {},
  },
  {
    id: 23,
    name: "Refreshing Day Gel",
    category: "Moisturizers & Creams",
    image: "images/refreshing-day-gel.jpg",
    description:
      "A cooling morning gel that wakes up tired skin. Cucumber extract, vitamin B5, and hyaluronic acid instantly hydrate and refresh for a bright, shine-controlled start to your day. Absorbs fast and layers perfectly under SPF.",
    tags: ["Refreshing", "Morning Care", "Oil-Control"],
    sku: "MC009",
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
    image: "images/detoxifying-night-cream.jpg",
    description:
      "Purifying night cream to reset congested skin. Clarifying clays, niacinamide, and antioxidant-rich blackcurrant seed oil help refine texture and calm visible blemishes while you sleep, revealing a clearer, smoother complexion by morning.",
    tags: ["Detox", "Night Cream", "Niacinamide"],
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
    name: "Pore-Refining Clay Mask",
    category: "Skin & Face",
    image: "images/pore-refining-clay-mask.jpg",
    description:
      "A quick-acting clay mask that clarifies without cracking. Sulfur, kaolin, and glycolic acid reduce the look of excess oil and congestion, minimizing the appearance of pores over time for a balanced, smoother-looking complexion.",
    tags: ["Pores", "Clay Mask", "Oil Control"],
    sku: "SF006",
    price: {
      original: 39.0,
      offer: 39.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 88,
    offers: {},
  },
  {
    id: 26,
    name: "Vitamin C Face Wash",
    category: "Skin & Face",
    image: "images/vitamin-c-face-wash.jpg",
    description:
      "Brightening daily cleanser with a splash of vitamin C and gentle surfactants to remove sunscreen and pollutants. Leaves skin feeling clean, not tight, and visibly fresher with continued use.",
    tags: ["Cleanser", "Vitamin C", "Brightening"],
    sku: "SF007",
    price: {
      original: 28.0,
      offer: 28.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 97,
    offers: {},
  },
  {
    id: 27,
    name: "Hyaluronic Hydrating Mist",
    category: "Skin & Face",
    image: "images/hyaluronic-hydrating-mist.jpg",
    description:
      "Ultra-fine mist infused with multi-weight hyaluronic acid, sea minerals, and aloe to quench thirsty skin midday or post-cleanse. Restores bounce and a healthy glow without disturbing makeup, perfect for travel and desk refreshes.",
    tags: ["Hydrating", "Mist", "Hyaluronic"],
    sku: "SF008",
    price: {
      original: 31.0,
      offer: 31.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 83,
    offers: {},
  },
  {
    id: 28,
    name: "Overnight Lip Repair Balm",
    category: "Skin & Face",
    image: "images/overnight-lip-repair-balm.jpg",
    description:
      "A deeply nourishing overnight treatment for dry, chapped lips. Shea butter, lanolin, and ceramides lock in moisture while berry antioxidants smooth flakes. Wake up to plush, pillowy-soft lips ready for color or balm-only days.",
    tags: ["Lips", "Overnight", "Repair"],
    sku: "SF009",
    price: {
      original: 19.0,
      offer: 19.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 120,
    offers: {},
  },
  {
    id: 29,
    name: "Niacinamide Clarity Serum",
    category: "Serums",
    image: "images/niacinamide-clarity-serum.jpg",
    description:
      "A balancing serum with 10% niacinamide and zinc PCA to visibly refine pores, reduce excess oil, and even tone. Lightweight, non-sticky texture layers easily under moisturizers for a smoother, more clarified complexion over time.",
    tags: ["Niacinamide", "Oil Control", "Clarity"],
    sku: "SE010",
    price: {
      original: 42.0,
      offer: 42.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 109,
    offers: {},
  },
  {
    id: 30,
    name: "Ceramide Barrier Cream",
    category: "Moisturizers & Creams",
    image: "images/ceramide-barrier-cream.jpg",
    description:
      "Rich yet breathable barrier cream with a dermatologist-inspired blend of ceramides, cholesterol, and fatty acids in an optimized ratio. Comforts dryness, reduces visible redness, and helps skin look healthier, bouncier, and more resilient day after day.",
    tags: ["Barrier", "Ceramides", "Repair"],
    sku: "MC011",
    price: {
      original: 59.0,
      offer: 59.0,
      discount_percentage: 0,
      currency: "USD",
      is_offer_active: false,
    },
    quantity_available: 72,
    offers: {},
  },
];

const offerProductsContainer = document.querySelector(
  ".offer-products-sec .row"
);
const relatedProducts = document.querySelector(".related-products-sec .row");

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
const allProductsContainer = document.querySelector(".all-products-sec .row");

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

// Wishlist
// ==================================================================================
let wishlistItems = [];
function loadWishlistFromLocalStorage() {
  const storedWishlist = localStorage.getItem("wishlist");

  if (storedWishlist) {
    wishlistItems = JSON.parse(storedWishlist);
  }
}
loadWishlistFromLocalStorage();
// Wishlist
// ==================================================================================

offerProductsContainer && (offerProductsContainer.innerHTML = "");
swiperContainer?.forEach((currContainer) => {
  currContainer.innerHTML = "";
});
allProductsContainer && (allProductsContainer.innerHTML = "");

const insertProducts = (productsArry, wrapperClass, insertInto) => {
  productsArry.forEach((product) => {
    const isWishlistActive = wishlistItems.some(
      (currItem) => parseInt(currItem.productId) === parseInt(product.id)
    );

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
                    <a href="#" class="quick-view-btn" data-bs-toggle="modal" data-bs-target="#productDetailsModal">Quick View</a>
                  </li>
                  <li>
                    <a href="#" class="wishlist-btn ${
                      isWishlistActive ? "active" : ""
                    }">
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
                    <a href="#" class="cart-btn">
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
                <img src="${product.image}" alt="" />
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
insertProducts(
  products,
  "col-lg-3 col-md-6 d-flex align-items-stretch",
  allProductsContainer
);

// ======================================================================
const pathname = window.location.pathname;
if (pathname.includes("product")) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const detailsBannerHead = document.querySelector(".banner-content h1");
  const detailsBreadcrumb = document.querySelector(
    ".banner-content .breadcrumb li:last-child"
  );

  const mainProduct = products.find((currProduct) => {
    return currProduct.id == id;
  });

  if (mainProduct) {
    detailsBannerHead.textContent = mainProduct.name;
    detailsBreadcrumb.textContent = mainProduct.name;

    const isWishlistActive = wishlistItems.some(
      (currItem) => parseInt(currItem.productId) === parseInt(mainProduct.id)
    );

    const detailsContent = document.querySelector(".product-details-sec .row");
    detailsContent.innerHTML = `<div class="col-lg-6">
                <div class="product-img rounded-5 overflow-hidden">
                  <img src="${mainProduct.image}" alt="product-img" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="product-details-content mt-5 mt-lg-0">
                  ${
                    mainProduct.price.is_offer_active
                      ? `<div class="offer-text position-static d-inline-block">
                    ${mainProduct.offers.description}
                  </div>`
                      : ""
                  }
                  <h2>${mainProduct.name}</h2>
                  <p>
                    ${mainProduct.description}
                  </p>
                  <div class="price">
                    <span class="offered-price">$${mainProduct.price.offer.toFixed(
                      2
                    )}</span>
                    ${
                      mainProduct.price.is_offer_active
                        ? `<del class="original-price">$${mainProduct.price.original.toFixed(
                            2
                          )}</del>`
                        : ""
                    }
                  </div>
                  <div class="quantity-wrap">
                    <button class="decrement-btn">
                      <i class="fa-solid fa-minus"></i>
                    </button>
                    <input type="text" class="details-quantity" value="1" min="1" readonly />
                    <button class="increment-btn">
                      <i class="fa-solid fa-plus"></i>
                    </button>
                  </div>
                  <div class="btn-wrap d-flex flex-wrap gap-4">
                    <a href="" class="button primary-btn details-add-cart">Add to Cart</a>
                    <a href="" class="button secondary-btn wishlist-btn">${
                      isWishlistActive
                        ? "Remove From Wishlist"
                        : "Add to Wishlist"
                    }</a>
                  </div>
                  <ul class="product-meta">
                    <li><span>SKU:</span> ${mainProduct.sku}</li>
                    <li><span>Category:</span> ${mainProduct.category}</li>
                    <li><span>Tags:</span> ${mainProduct.tags.join(", ")}</li>
                  </ul>
                </div>
              </div>`;

    const wishlistBtn = detailsContent.querySelector(".wishlist-btn");
    wishlistBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const existingIndex = wishlistItems.findIndex(
        (currItem) => parseInt(currItem.productId) === parseInt(mainProduct.id)
      );

      console.log(existingIndex);
      if (existingIndex === -1) {
        console.log(mainProduct.id);

        wishlistItems.push({
          id: generateId(),
          productId: mainProduct.id,
          userId: "guest",
        });

        wishlistBtn.textContent = "Remove From Wishlist";
      } else {
        wishlistItems = wishlistItems.filter(
          (currItem) =>
            parseInt(currItem.productId) !== parseInt(mainProduct.id)
        );
        wishlistBtn.textContent = "Add to Wishlist";
      }

      updateWishlistCount();
      updateWishlistInStorage();
    });

    relatedProducts.innerHTML = "";
    const relatedProductsArray = products.filter((currProduct) => {
      return (
        currProduct.category === mainProduct.category &&
        currProduct.id != mainProduct.id
      );
    });

    insertProducts(
      relatedProductsArray.slice(0, 4),
      "col-lg-3 col-md-6 d-flex align-items-stretch",
      relatedProducts
    );
  }
}

const productBtns = document.querySelectorAll(".product-icons");
const productDetailsModal = document.querySelector(
  "#productDetailsModal .product-details-sec"
);

productBtns.forEach((currBtn) => {
  currBtn.addEventListener("click", (e) => {
    const quickViewBtn = e.target.closest(".quick-view-btn");
    if (!quickViewBtn) return;

    productDetailsModal && (productDetailsModal.innerHTML = "");
    const clickedProduct = e.target.closest(".product-item").dataset.id;

    const product = findProductById(clickedProduct);

    const detailsModalContent = document.createElement("div");
    detailsModalContent.className = "container";

    detailsModalContent.innerHTML = `<div class="row gx-lg-5">
                  <div class="col-lg-6">
                    <div class="product-img rounded-5 overflow-hidden">
                      <img src="${product.image}" alt="product-img" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="product-details-content mt-5 mt-lg-0">
                      ${
                        product.price.is_offer_active
                          ? `<div class="offer-text position-static d-inline-block">
                          ${product.offers.description}
                        </div>`
                          : ""
                      }
                      <h2>${product.name}</h2>
                      <p>
                        ${product.description}
                      </p>
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
                      <div class="quantity-wrap">
                        <button class="decrement-btn">
                          <i class="fa-solid fa-minus"></i>
                        </button>
                        <input
                          type="text"
                          class="details-quantity"
                          value="1"
                          min="1"
                          readonly
                        />
                        <button class="increment-btn">
                          <i class="fa-solid fa-plus"></i>
                        </button>
                      </div>
                      <div class="btn-wrap d-flex flex-wrap gap-4">
                        <a href="" class="button primary-btn details-add-cart">Add to Cart</a>
                        <a href="" class="button secondary-btn wishlist-btn"
                          >${
                            isWishlistActive
                              ? "Remove From Wishlist"
                              : "Add to Wishlist"
                          }</a
                        >
                      </div>
                      <ul class="product-meta">
                        <li><span>SKU:</span> ${product.sku}</li>
                        <li><span>Category:</span> ${product.category}</li>
                        <li>
                          <span>Tags:</span> ${product.tags.join(", ")}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>`;

    productDetailsModal?.appendChild(detailsModalContent);
  });
});

function findProductById(id) {
  return products.find((product) => parseInt(product.id) === parseInt(id));
}

function generateId() {
  return Date.now() + "-" + Math.floor(Math.random() * 1000);
}

const cartCount = document.querySelectorAll(".cart-count");
const removeBtns = document.querySelectorAll(".remove-btn");
const subTotalWrap = document.querySelectorAll(".subtotal-price");
const wishlistBtn = document.querySelectorAll(".wishlist-btn");

// ===============================================================================
// Cart Functionality

let cartItems = [];

// Load cart items from localStorage on page load
function loadCartFromLocalStorage() {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cartItems = JSON.parse(storedCart);
  }
}
loadCartFromLocalStorage();

productBtns.forEach((currBtn) => {
  currBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const cartBtn = e.target.closest(".cart-btn");
    if (!cartBtn) return;

    const productId = parseInt(cartBtn.closest(".product-item").dataset.id);

    const existingIndex = cartItems.findIndex(
      (item) => parseInt(item.productId) === productId
    );

    if (existingIndex === -1) {
      cartItems.push({
        id: generateId(),
        productId,
        userId: "guest",
        quantity: 1,
      });
    } else {
      cartItems = cartItems.map((item, index) =>
        index === existingIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    updateCart();
    saveCartToLocalStorage();
    calcSubtotal();
  });
});

const miniCartContainer = document.querySelector(".cart-items");
const mainCartContainer = document.querySelector(".cart-sec .my-table ul");

function updateCart() {
  miniCartContainer && (miniCartContainer.innerHTML = "");
  mainCartContainer && (mainCartContainer.innerHTML = "");

  cartItems.forEach((currCart) => {
    const miniCartItem = document.createElement("li");
    const mainCartItem = document.createElement("li");
    mainCartItem.className = "cart-item";
    miniCartItem.dataset.id = currCart.productId;
    mainCartItem.dataset.id = currCart.productId;

    const product = findProductById(currCart.productId);

    miniCartItem.innerHTML = `<a href="product.html?id=${
      product.id
    }" class="cart-item-img">
                <img src="${product.image}" alt="${product.name}">
              </a>
              <div class="cart-item-content">
                <a href="product.html?id=${product.id}">
                  <h5>${product.name}</h5>
                </a>
                <div class="d-flex align-items-center gap-4">
                  <div class="quantity-wrap">
                    <button class="decrement-btn">
                      <i class="fa-solid fa-minus"></i>
                    </button>
                    <input type="text" class="quantity-input" value="${
                      currCart.quantity
                    }" min="1" readonly="">
                    <button class="increment-btn">
                      <i class="fa-solid fa-plus"></i>
                    </button>
                  </div>
                  <p>$${product.price.offer.toFixed(2)}</p>
                </div>
              </div>
              <button class="remove-btn">
                <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 1.5L1.5 16.5M1.5 1.5L16.5 16.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>`;

    mainCartItem.innerHTML = `<div class="cart-left d-flex gap-5 align-items-center">
                    <a href="product.html?id=${
                      product.id
                    }" class="cart-item-img">
                      <img src="${product.image}" alt="${product.name}" />
                    </a>
                    <div class="cart-item-content">
                      <a href="product.html">
                        <h5>${product.name}</h5>
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
                  </div>
                  <div class="cart-right d-flex gap-5 align-items-center">
                    <div class="quantity-wrap">
                      <button class="decrement-btn">
                        <i class="fa-solid fa-minus"></i>
                      </button>
                      <input
                        type="text"
                        class="quantity-input"
                        value="1"
                        min="1"
                        readonly=""
                      />
                      <button class="increment-btn">
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    </div>
                    <button class="remove-btn">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 1.5L1.5 16.5M1.5 1.5L16.5 16.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>`;

    miniCartContainer.appendChild(miniCartItem);
    mainCartContainer?.appendChild(mainCartItem);
    updateCartCount();
    checkEmptyCart();

    miniCartContainer.querySelectorAll(".remove-btn").forEach((currBtn) => {
      currBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const clickedCart = e.target.closest("li");
        removeFromCart(clickedCart);
      });
    });
    mainCartContainer?.querySelectorAll(".remove-btn").forEach((currBtn) => {
      currBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("remove");

        const clickedCart = e.target.closest("li");
        removeFromCart(clickedCart);
      });
    });
  });
}

function removeFromCart(product) {
  const id = parseInt(product.dataset.id);

  product.remove();
  cartItems = cartItems.filter((item) => parseInt(item.productId) !== id);

  saveCartToLocalStorage();

  updateCart();
  updateCartCount();
  checkEmptyCart();
  calcSubtotal();
}

function updateCartCount() {
  cartCount.forEach((currCartCount) => {
    currCartCount.textContent = cartItems.length;
  });
}
updateCartCount();

function handleQuantityChange(e) {
  const quantityContainer = e.target.closest(".quantity-wrap");
  if (!quantityContainer) return;
  e.preventDefault();

  const cartItemLi = e.target.closest("li");
  if (!cartItemLi) return;

  const clickedCartId = parseInt(cartItemLi.dataset.id);

  const existingIndex = cartItems.findIndex(
    (item) => parseInt(item.productId) === clickedCartId
  );
  if (existingIndex === -1) return;

  const quantityInput = quantityContainer.querySelector(".quantity-input");
  let currentQty = parseInt(quantityInput.value);

  const decrementBtn = e.target.closest(".decrement-btn");
  const incrementBtn = e.target.closest(".increment-btn");

  if (!decrementBtn && !incrementBtn) return;

  if (decrementBtn && currentQty > 1) {
    currentQty--;
  } else if (incrementBtn) {
    currentQty++;
  }

  quantityInput.value = currentQty;
  cartItems[existingIndex].quantity = currentQty;

  saveCartToLocalStorage();
  calcSubtotal();
}

mainCartContainer?.addEventListener("click", handleQuantityChange);
miniCartContainer?.addEventListener("click", handleQuantityChange);

function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

const miniCartBtns = document.querySelector(
  ".offcanvas-body .cart-total .btn-wrap"
);
const mainCartBtns = document.querySelector(".subtotal-details .btn-wrap");

function checkCartEmpty(cartContainer) {
  cartContainer &&
    (cartContainer.innerHTML = `<svg class="mb-5" enable-background="new 0 0 64 64" height="140" viewBox="0 0 64 64" width="140" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m55.60714 25.64387-23.60049 11.46694-23.6006-11.46694c.35004-.55004.85004-.99998 1.46671-1.2834l20.53381-9.98354c.99998-.48331 2.18338-.48331 3.20004 0l20.53381 9.98354c.59999.28342 1.09999.73336 1.46672 1.2834z" fill="#e09f44"/><path d="m55.60719 25.64387-23.6005 11.46694v-23.1005c.53317 0 1.09995.11669 1.59991.36662l20.53377 9.98355c.59999.28341 1.10008.73335 1.46682 1.28339z" opacity=".1"/><path d="m32.01204 37.11492v26.88508c-.55479 0-1.10958-.10666-1.6003-.3627l-20.54784-9.98597c-1.25896-.59738-2.04843-1.87769-2.04843-3.26454v-22.74564c0-.70404.21332-1.40821.59751-2.00571z" fill="#ffe691"/><path d="m56.18711 27.64115v22.74564c0 1.38685-.78947 2.66716-2.0483 3.26454l-20.52647 9.98597c-.51221.25604-1.06687.3627-1.6003.3627v-26.88508l23.59906-11.47948c.36269.5975.57601 1.30167.57601 2.00571z" fill="#ffdc6e"/><path d="m56.19044 27.64394v22.69894c0 1.41655-.79993 2.68317-2.06655 3.2998l-20.5323 9.98281c-1.00001.48327-2.18322.48327-3.19981 0l-19.41572-9.43281c13.3826 3.46642 27.09864.34992 35.98145-8.54957 6.0497-6.04971 8.33291-13.24935 9.23293-17.99917z" opacity=".1"/><g fill="#f0bd59"><path d="m22.8561 45.56063-18.22991-8.86864c-1.64163-.79863-2.16199-2.88727-1.08692-4.36274l4.87639-6.69252 23.58608 11.47436-5.49368 7.53971c-.83629 1.14775-2.37494 1.53108-3.65196.90983z"/><path d="m41.1439 45.56063 18.22992-8.86864c1.64163-.79863 2.16199-2.88727 1.08691-4.36274l-4.87639-6.69252-23.58609 11.47436 5.49368 7.53971c.83629 1.14775 2.37495 1.53108 3.65197.90983z"/></g></g><g><circle cx="32" cy="14.508" fill="#f7524b" r="14.508"/><path d="m38.7821 7.72616-.00007-.00007c-1.08027-1.08027-2.83174-1.08027-3.91201 0l-2.87007 2.87007-2.87004-2.87004c-1.08028-1.08028-2.83177-1.08027-3.91204.00003-1.08024 1.08028-1.08023 2.83172.00003 3.91198l2.87011 2.87011-2.87011 2.87011c-1.08026 1.08026-1.08027 2.8317-.00003 3.91197 1.08027 1.0803 2.83176 1.08032 3.91204.00003l2.87004-2.87004 2.87007 2.87007c1.08027 1.08027 2.83174 1.08027 3.91201 0l.00007-.00007c1.08027-1.08027 1.08027-2.83174 0-3.91201l-2.87007-2.87007 2.87007-2.87007c1.08027-1.08026 1.08027-2.83173 0-3.912z" fill="#f0f0fc"/><path d="m46.51111 14.51246c0 8-6.50664 14.50664-14.50664 14.50664-6.20807 0-11.52005-3.90391-13.5681-9.40794 5.5681 4.03203 13.20534 4.13867 18.3681.12799 4.58659-3.56263 6.59193-9.83464 5.11992-15.78672 2.81602 2.62409 4.58672 6.37865 4.58672 10.56003z" opacity=".1"/></g></g></svg> 
                <li>Your Cart is empty.</li>`);
}

function checkEmptyCart() {
  if (cartItems.length === 0) {
    checkCartEmpty(miniCartContainer);
    checkCartEmpty(mainCartContainer);

    miniCartBtns && (miniCartBtns.innerHTML = "");
    mainCartBtns && (mainCartBtns.innerHTML = "");
  } else {
    miniCartBtns &&
      (miniCartBtns.innerHTML = `<a href="cart.html" class="button primary-btn px-5 py-4 rounded-5">View Cart</a>
        <a href="checkout.html" class="button secondary-btn px-5 py-4 rounded-5">Checkout</a>`);

    mainCartBtns &&
      (mainCartBtns.innerHTML = `<a href="checkout.html" class="button primary-btn">Checkout</a>
        <a href="#" class="button secondary-btn empty-cart-btn">Empty Cart</a>`);
  }
}

updateCart();
checkEmptyCart();

function calcSubtotal() {
  const subtotalPrice = cartItems.reduce((acc, currCart) => {
    const currCartProduct = findProductById(currCart.productId);

    const currCartPrice = currCartProduct.price.offer;

    return currCartPrice * currCart.quantity + acc;
  }, 0);

  subTotalWrap.forEach((currSubtotal) => {
    currSubtotal.textContent = "$" + subtotalPrice.toFixed(2);
  });
}
calcSubtotal();

const productDetailsSec = document.querySelectorAll(".product-details-sec");

productDetailsSec.forEach((currSec) => {
  currSec.addEventListener("click", (e) => {
    const minusBtn = e.target.closest(".decrement-btn");
    const plusBtn = e.target.closest(".increment-btn");
    if (!minusBtn && !plusBtn) return;

    const quantityWrap = e.target.closest(".quantity-wrap");
    if (!quantityWrap) return;

    e.preventDefault();

    const quantityInput = quantityWrap.querySelector(".details-quantity");
    let currentValue = parseInt(quantityInput.value);

    if (minusBtn && currentValue > 1) {
      quantityInput.value = currentValue - 1;
    } else if (plusBtn && currentValue < 10) {
      quantityInput.value = currentValue + 1;
    }
  });
});

productDetailsSec.forEach((currSec) => {
  currSec.addEventListener("click", (e) => {
    const detailsCartBtn = e.target.closest(".details-add-cart");
    if (!detailsCartBtn) return;

    e.preventDefault();

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const quantityInput = currSec.querySelector(".details-quantity").value;

    const existingIndex = cartItems.findIndex(
      (item) => parseInt(item.productId) === parseInt(id)
    );

    if (existingIndex === -1) {
      cartItems.push({
        id: generateId(),
        productId: id,
        userId: "guest",
        quantity: quantityInput,
      });
    } else {
      cartItems = cartItems.map((item, index) =>
        index === existingIndex
          ? {
              ...item,
              quantity: parseInt(item.quantity) + parseInt(quantityInput),
            }
          : item
      );
    }
    updateCart();
    saveCartToLocalStorage();
    calcSubtotal();
  });
});

wishlistBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const productId = e.target.closest(".product-item")?.dataset.id;

    if (!productId) return;
    e.preventDefault();

    const wishlistIndex = wishlistItems.findIndex(
      (currItem) => currItem.productId == productId
    );

    if (wishlistIndex === -1) {
      btn.classList.add("active");

      wishlistItems.push({
        id: generateId(),
        productId,
        userId: "guest",
      });
    } else {
      btn.classList.remove("active");

      wishlistItems = wishlistItems.filter((currItem) => {
        return currItem.productId !== productId;
      });
    }

    console.log(wishlistItems);

    updateWishlistCount();
    updateWishlistInStorage();
  });
});

const wishlistCount = document.querySelector(".wishlist-count");

const updateWishlistCount = () => {
  wishlistCount.textContent = wishlistItems.length;
};
updateWishlistCount();

const wishlistTable = document.querySelector(".wishlist-sec .my-table ul");
wishlistTable && (wishlistTable.innerHTML = "");

function checkIfEmpty() {
  if (wishlistItems.length === 0) {
    wishlistTable &&
      (wishlistTable.innerHTML = `<svg class="mb-5" enable-background="new 0 0 64 64" height="140" viewBox="0 0 64 64" width="140" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m55.60714 25.64387-23.60049 11.46694-23.6006-11.46694c.35004-.55004.85004-.99998 1.46671-1.2834l20.53381-9.98354c.99998-.48331 2.18338-.48331 3.20004 0l20.53381 9.98354c.59999.28342 1.09999.73336 1.46672 1.2834z" fill="#e09f44"/><path d="m55.60719 25.64387-23.6005 11.46694v-23.1005c.53317 0 1.09995.11669 1.59991.36662l20.53377 9.98355c.59999.28341 1.10008.73335 1.46682 1.28339z" opacity=".1"/><path d="m32.01204 37.11492v26.88508c-.55479 0-1.10958-.10666-1.6003-.3627l-20.54784-9.98597c-1.25896-.59738-2.04843-1.87769-2.04843-3.26454v-22.74564c0-.70404.21332-1.40821.59751-2.00571z" fill="#ffe691"/><path d="m56.18711 27.64115v22.74564c0 1.38685-.78947 2.66716-2.0483 3.26454l-20.52647 9.98597c-.51221.25604-1.06687.3627-1.6003.3627v-26.88508l23.59906-11.47948c.36269.5975.57601 1.30167.57601 2.00571z" fill="#ffdc6e"/><path d="m56.19044 27.64394v22.69894c0 1.41655-.79993 2.68317-2.06655 3.2998l-20.5323 9.98281c-1.00001.48327-2.18322.48327-3.19981 0l-19.41572-9.43281c13.3826 3.46642 27.09864.34992 35.98145-8.54957 6.0497-6.04971 8.33291-13.24935 9.23293-17.99917z" opacity=".1"/><g fill="#f0bd59"><path d="m22.8561 45.56063-18.22991-8.86864c-1.64163-.79863-2.16199-2.88727-1.08692-4.36274l4.87639-6.69252 23.58608 11.47436-5.49368 7.53971c-.83629 1.14775-2.37494 1.53108-3.65196.90983z"/><path d="m41.1439 45.56063 18.22992-8.86864c1.64163-.79863 2.16199-2.88727 1.08691-4.36274l-4.87639-6.69252-23.58609 11.47436 5.49368 7.53971c.83629 1.14775 2.37495 1.53108 3.65197.90983z"/></g></g><g><circle cx="32" cy="14.508" fill="#f7524b" r="14.508"/><path d="m38.7821 7.72616-.00007-.00007c-1.08027-1.08027-2.83174-1.08027-3.91201 0l-2.87007 2.87007-2.87004-2.87004c-1.08028-1.08028-2.83177-1.08027-3.91204.00003-1.08024 1.08028-1.08023 2.83172.00003 3.91198l2.87011 2.87011-2.87011 2.87011c-1.08026 1.08026-1.08027 2.8317-.00003 3.91197 1.08027 1.0803 2.83176 1.08032 3.91204.00003l2.87004-2.87004 2.87007 2.87007c1.08027 1.08027 2.83174 1.08027 3.91201 0l.00007-.00007c1.08027-1.08027 1.08027-2.83174 0-3.91201l-2.87007-2.87007 2.87007-2.87007c1.08027-1.08026 1.08027-2.83173 0-3.912z" fill="#f0f0fc"/><path d="m46.51111 14.51246c0 8-6.50664 14.50664-14.50664 14.50664-6.20807 0-11.52005-3.90391-13.5681-9.40794 5.5681 4.03203 13.20534 4.13867 18.3681.12799 4.58659-3.56263 6.59193-9.83464 5.11992-15.78672 2.81602 2.62409 4.58672 6.37865 4.58672 10.56003z" opacity=".1"/></g></g></svg> 
                <li>Your Wishlist is empty.</li>`);
  }
}
checkIfEmpty();

wishlistItems &&
  wishlistItems.forEach((curritem) => {
    const product = findProductById(curritem.productId);

    const wishlistItem = document.createElement("li");
    wishlistItem.className = "cart-item";
    wishlistItem.dataset.id = `${product.id}`;

    wishlistItem.innerHTML = `<div class="cart-left d-flex gap-5 align-items-center">
                  <a href="product.html?id=${product.id}" class="cart-item-img">
                    <img src="${product.image}" alt="${product.name}">
                  </a>
                  <div class="cart-item-content">
                    <a href="product.html?id=${product.id}">
                      <h5>${product.name}</h5>
                    </a>
                    <div class="price">
                      <span class="offered-price">$${product.price.offer.toFixed(
                        2
                      )}</span>
                      <del class="original-price">$${product.price.original.toFixed(
                        2
                      )}</del>
                    </div>
                  </div>
                </div>
                <div class="cart-right d-flex gap-5 align-items-center">
                  <button class="remove-btn">
                    <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.5 1.5L1.5 16.5M1.5 1.5L16.5 16.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </button>
                </div>`;

    wishlistTable?.appendChild(wishlistItem);
  });

wishlistTable &&
  wishlistTable.addEventListener("click", (e) => {
    const product = e.target.closest(".cart-item");
    const productId = product.dataset.id;

    const wishlistRemoveBtn = e.target.closest(".remove-btn");

    if (!wishlistRemoveBtn) return;
    e.preventDefault();

    product.remove();
    wishlistItems = wishlistItems.filter((currItem) => {
      return parseInt(currItem.productId) !== parseInt(productId);
    });
    checkIfEmpty();
    updateWishlistCount();
    updateWishlistInStorage();
  });

function updateWishlistInStorage() {
  localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
}

const emptyCartBtn = document.querySelector(".empty-cart-btn");

emptyCartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cartItems = [];
  updateCart();
  saveCartToLocalStorage();
  updateCartCount();
  checkEmptyCart();
  calcSubtotal();
});
