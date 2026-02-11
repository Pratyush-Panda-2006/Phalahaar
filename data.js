// ========== PHALAHAAR - PRODUCT DATA ==========
const FRUITS = [
    { name: "Watermelon 1 kg", price: 20, img: "image2/a3.png", desc: "Sweet & juicy summer delight, naturally refreshing", rating: 4.5, badge: "popular" },
    { name: "Apple 1 kg", price: 300, img: "image2/a2.png", desc: "Crisp, crunchy & packed with daily goodness", rating: 4.8, badge: "bestseller" },
    { name: "Mangoes 1 kg", price: 50, img: "image2/a1.png", desc: "The king of fruits — irresistibly sweet & tropical", rating: 4.9, badge: "popular" },
    { name: "Strawberries 1 kg", price: 400, img: "image2/a10.png", desc: "Berry perfection — sweet, tangy & antioxidant-rich", rating: 4.7, badge: "new" },
    { name: "Orange 1 kg", price: 60, img: "image2/a7.png", desc: "Sunshine in every slice — vitamin C powerhouse", rating: 4.6, badge: "organic" },
    { name: "Dates 1 kg", price: 100, img: "image2/dates.jpg", desc: "Nature's candy — energy-packed superfood", rating: 4.4, badge: "organic" },
    { name: "Banana 1 Dozen", price: 60, img: "image2/banana.jpg", desc: "Instant energy boost with creamy sweetness", rating: 4.5, badge: "bestseller" },
    { name: "Green Apple 1 kg", price: 150, img: "image2/green apple.jpg", desc: "Tart & refreshing with a satisfying crunch", rating: 4.3, badge: "organic" },
    { name: "Pineapple 1 kg", price: 60, img: "image2/a13.png", desc: "Tropical burst of tangy-sweet perfection", rating: 4.4, badge: "new" },
    { name: "Pomegranate 1 kg", price: 280, img: "image2/a12.png", desc: "Ruby-red jewels of nutrition & flavor", rating: 4.7, badge: "popular" },
    { name: "Pears 1 kg", price: 425, img: "image2/a5.png", desc: "Delicately sweet with a buttery smooth texture", rating: 4.2, badge: "organic" },
    { name: "Cherry 1 kg", price: 300, img: "image2/a4.png", desc: "Tiny bursts of vibrant, juicy sweetness", rating: 4.6, badge: "sale" },
    { name: "Lychee 1 kg", price: 150, img: "image2/a9.png", desc: "Exotic floral sweetness in every bite", rating: 4.5, badge: "new" },
    { name: "Papaya 1 kg", price: 30, img: "image2/a8.png", desc: "Tropical sunshine — smooth & naturally digestive", rating: 4.3, badge: "organic" },
    { name: "Red Cornels 1 kg", price: 50, img: "image2/a11.png", desc: "Ancient superfruit with a unique tangy twist", rating: 4.1, badge: "organic" },
    { name: "Red Dragon Fruit 1 kg", price: 450, img: "image2/a6.png", desc: "Exotic & stunning with mildly sweet flavor", rating: 4.8, badge: "new" },
    { name: "Jack Fruit", price: 200, img: "image2/jack.png", desc: "Nature's hearty & satisfying tropical giant", rating: 4.2, badge: "organic" },
    { name: "Kiwi 1 kg", price: 250, img: "image2/kiwi.png", desc: "Fuzzy outside, tangy-sweet magic inside", rating: 4.6, badge: "popular" },
    { name: "Dragon Fruit 1 kg", price: 300, img: "image2/dragon.png", desc: "Vibrant beauty with mellow tropical sweetness", rating: 4.5, badge: "new" },
    { name: "Avocado 1 kg", price: 300, img: "image2/avacado.png", desc: "Creamy, buttery & heart-healthy goodness", rating: 4.7, badge: "popular" },
    { name: "Red Grapes 1 kg", price: 250, img: "image2/grapes.png", desc: "Sweet clusters of antioxidant-rich delight", rating: 4.4, badge: "organic" },
    { name: "Dark Cherry 1 kg", price: 150, img: "image2/cherry.png", desc: "Premium dark cherries — bold & flavorful", rating: 4.5, badge: "sale" },
    { name: "Green Grapes 1 kg", price: 200, img: "image2/grapes2.png", desc: "Light, crisp & perfectly refreshing", rating: 4.3, badge: "organic" },
    { name: "Guava 1 kg", price: 100, img: "image2/guava.png", desc: "Tropical aroma with creamy seeded goodness", rating: 4.4, badge: "organic" },
    { name: "Coconut", price: 30, img: "image2/coconut.png", desc: "Tropical hydration in nature's perfect package", rating: 4.2, badge: "organic" },
    { name: "Passion Fruit 1 kg", price: 700, img: "image2/passion.png", desc: "Intensely aromatic with exotic tang", rating: 4.8, badge: "new" },
    { name: "Feijoa 1 kg", price: 600, img: "image2/feijoa.png", desc: "The hidden gem of exotic fruits", rating: 4.1, badge: "new" },
    { name: "Mulberry 1 kg", price: 300, img: "image2/mulberry.png", desc: "Sweet wine-like berries bursting with nutrition", rating: 4.3, badge: "organic" }
];

const JUICES = [
    { name: "Apple Juice", price: 20, img: "juice/apple.png", desc: "Cold-pressed perfection from farm-fresh apples", rating: 4.5, badge: "popular" },
    { name: "Red Orange Juice", price: 40, img: "juice/tan.png", desc: "Citrus burst with a rich ruby glow", rating: 4.6, badge: "new" },
    { name: "Pomegranate Juice", price: 20, img: "juice/pom.png", desc: "Antioxidant elixir — vibrant & refreshing", rating: 4.7, badge: "popular" },
    { name: "Mulberry Juice", price: 40, img: "juice/mul.png", desc: "Deep purple richness with earthy sweetness", rating: 4.2, badge: "organic" },
    { name: "Guava Juice", price: 20, img: "juice/guava.png", desc: "Tropical tang with natural sweetness", rating: 4.4, badge: "organic" },
    { name: "Papaya Juice", price: 30, img: "juice/juice.png", desc: "Smooth, golden & naturally digestive", rating: 4.3, badge: "organic" },
    { name: "Strawberry Juice", price: 60, img: "juice/straw.png", desc: "Berry bliss in every luscious sip", rating: 4.8, badge: "new" },
    { name: "Cherry Juice", price: 40, img: "juice/cherry.png", desc: "Bold, vibrant & packed with flavor", rating: 4.5, badge: "popular" },
    { name: "Green Apple Juice", price: 40, img: "juice/juice2.png", desc: "Crisp, tangy & incredibly refreshing", rating: 4.4, badge: "organic" },
    { name: "Kiwi Juice", price: 80, img: "juice/kiwi_juice.jpg", desc: "Tangy-sweet tropical zing in a glass", rating: 4.6, badge: "sale" },
    { name: "Pears Juice", price: 100, img: "juice/pear_juice.jpg", desc: "Silky smooth with delicate pear notes", rating: 4.3, badge: "organic" },
    { name: "Watermelon Juice", price: 10, img: "juice/watermelon.png", desc: "Pure summer hydration — naturally cooling", rating: 4.7, badge: "popular" },
    { name: "Mango Juice", price: 15, img: "juice/Mango Juice.jpg", desc: "Thick, golden & tropically divine", rating: 4.9, badge: "bestseller" },
    { name: "Banana Juice", price: 30, img: "juice/banana_juice.avif", desc: "Creamy smoothie goodness, naturally sweet", rating: 4.4, badge: "organic" },
    { name: "Orange Juice", price: 20, img: "juice/orange_juice.jpg", desc: "Classic morning fresh — sunshine in a glass", rating: 4.6, badge: "bestseller" },
    { name: "American Papaya Juice", price: 100, img: "juice/papaya_juice.png", desc: "Premium imported papaya — smooth & exotic", rating: 4.5, badge: "new" },
    { name: "Coconut Juice", price: 30, img: "juice/coconut_juice.jpg", desc: "Nature's isotonic drink — pure refreshment", rating: 4.3, badge: "organic" },
    { name: "Avocado Juice", price: 150, img: "juice/avacardo_juice.jpg", desc: "Creamy, velvety & nutritiously indulgent", rating: 4.7, badge: "sale" },
    { name: "Pineapple Juice", price: 50, img: "juice/pineapple_juice.jpg", desc: "Tangy tropical paradise in every sip", rating: 4.5, badge: "popular" },
    { name: "Mix Fruit Exclusive", price: 150, img: "juice/j.png", desc: "Our signature blend — handcrafted perfection", rating: 4.9, badge: "bestseller" },
    { name: "Purple Grapes Juice", price: 100, img: "juice/j2.png", desc: "Rich, deep & bursting with grape goodness", rating: 4.4, badge: "organic" },
    { name: "Green Grapes Juice", price: 60, img: "juice/j3.png", desc: "Light, crisp & revitalizing", rating: 4.3, badge: "organic" },
    { name: "Lychee Juice", price: 20, img: "juice/j4.png", desc: "Exotic floral nectar — delicately sweet", rating: 4.5, badge: "new" },
    { name: "Desi Kaccha Aam", price: 50, img: "juice/j5.png", desc: "Traditional raw mango punch — tangy & bold", rating: 4.8, badge: "popular" },
    { name: "Red Pears Juice", price: 80, img: "juice/j6.png", desc: "Premium pear nectar with a rosy twist", rating: 4.4, badge: "organic" },
    { name: "Guava Premium", price: 40, img: "juice/j7.png", desc: "Hand-selected guavas, cold-pressed to perfection", rating: 4.6, badge: "organic" },
    { name: "Exotic Mix Fruit", price: 200, img: "juice/j8.png", desc: "Luxurious blend of rare tropical fruits", rating: 4.8, badge: "new" },
    { name: "Classic Mix Juice", price: 100, img: "juice/j9.png", desc: "Everyday fruit juice medley — always fresh", rating: 4.3, badge: "organic" }
];

const SALADS = [
    { name: "Tropical Mix Salad", price: 40, img: "salad/s1.png", desc: "Sun-kissed tropical fruits in perfect harmony", rating: 4.5, badge: "popular" },
    { name: "Berry Bliss Salad", price: 30, img: "salad/s2.png", desc: "A medley of berries dancing on your palate", rating: 4.6, badge: "popular" },
    { name: "Citrus Burst Salad", price: 50, img: "salad/s3.png", desc: "Zesty citrus symphony — bright & energizing", rating: 4.4, badge: "organic" },
    { name: "Exotic Detox Salad", price: 80, img: "salad/s4.png", desc: "Cleansing superfruits for your glow routine", rating: 4.7, badge: "new" },
    { name: "Summer Fresh Salad", price: 60, img: "salad/s5.png", desc: "Cool, refreshing & made for sunny days", rating: 4.5, badge: "popular" },
    { name: "Iron Boost Salad", price: 100, img: "salad/s6.png", desc: "Power-packed fruits for strength & vitality", rating: 4.3, badge: "organic" },
    { name: "Energy Power Salad", price: 60, img: "salad/s7.png", desc: "Pre-workout fuel — nature's energy bar", rating: 4.4, badge: "organic" },
    { name: "Premium Fruit Bowl", price: 150, img: "salad/s8.png", desc: "Handcrafted luxury in an artisanal bowl", rating: 4.8, badge: "new" },
    { name: "Kids Delight Salad", price: 60, img: "salad/s9.png", desc: "Fun, colorful & kid-approved nutrition", rating: 4.6, badge: "popular" },
    { name: "Hydra Fresh Salad", price: 280, img: "salad/s10.png", desc: "Maximum hydration from water-rich superfruits", rating: 4.5, badge: "organic" },
    { name: "Liver Care Salad", price: 425, img: "salad/s11.png", desc: "Therapeutic blend for natural liver support", rating: 4.2, badge: "organic" },
    { name: "Protein Punch Salad", price: 300, img: "salad/s12.png", desc: "High-protein fruit bowl for active lifestyles", rating: 4.4, badge: "organic" },
    { name: "Cool Mint Salad", price: 150, img: "salad/s13.png", desc: "Refreshing mint-infused fruit perfection", rating: 4.5, badge: "sale" },
    { name: "Digestive Greens", price: 30, img: "salad/s14.png", desc: "Gentle on the tummy — naturally soothing", rating: 4.3, badge: "organic" },
    { name: "Detox Garden Salad", price: 50, img: "salad/s15.png", desc: "Garden-fresh detox in every colorful bite", rating: 4.4, badge: "organic" },
    { name: "Royal Exotic Salad", price: 450, img: "salad/s16.png", desc: "A regal selection of the world's finest fruits", rating: 4.9, badge: "new" },
    { name: "Nutri Mix Salad", price: 200, img: "salad/s17.png", desc: "Balanced nutrition in a vibrant fruit medley", rating: 4.5, badge: "organic" },
    { name: "Fiber Rich Salad", price: 250, img: "salad/s18.png", desc: "High-fiber goodness for digestive wellness", rating: 4.3, badge: "organic" },
    { name: "Sunrise Salad", price: 300, img: "salad/s19.png", desc: "Morning glory — start your day right", rating: 4.6, badge: "bestseller" },
    { name: "Heart Healthy Salad", price: 300, img: "salad/s20.png", desc: "Heart-loving superfruits in one delicious bowl", rating: 4.7, badge: "popular" },
    { name: "Rainbow Bowl", price: 250, img: "salad/s21.png", desc: "Eat the rainbow — every color, every nutrient", rating: 4.8, badge: "bestseller" },
    { name: "Iron Fiber Salad", price: 150, img: "salad/s22.png", desc: "Double the goodness — iron meets fiber", rating: 4.4, badge: "organic" },
    { name: "Garden Fresh Salad", price: 200, img: "salad/s23.png", desc: "Straight from the garden to your table", rating: 4.5, badge: "organic" },
    { name: "Vitamin Splash Salad", price: 100, img: "salad/s24.png", desc: "A splash of every essential vitamin you need", rating: 4.4, badge: "organic" },
    { name: "Quick Lite Salad", price: 30, img: "salad/s25.png", desc: "Light, quick & guilt-free satisfaction", rating: 4.2, badge: "sale" },
    { name: "Elderberry Gold", price: 700, img: "salad/s26.png", desc: "Premium elderberry fusion — rare & precious", rating: 4.6, badge: "new" },
    { name: "Sugar Free Salad", price: 600, img: "salad/s27.png", desc: "Zero added sugar — purely natural sweetness", rating: 4.5, badge: "new" },
    { name: "Classic Fruit Platter", price: 300, img: "salad/s28.png", desc: "Timeless presentation of seasonal favorites", rating: 4.7, badge: "bestseller" }
];

// ========== RENDER PRODUCTS ==========
function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    products.forEach(p => {
        const stars = generateStars(p.rating);
        const card = document.createElement('div');
        card.className = 'pro reveal';
        card.setAttribute('data-price', p.price);
        card.setAttribute('data-rating', p.rating);
        card.innerHTML = `
      <span class="badge badge-${p.badge}">${badgeLabel(p.badge)}</span>
      <button class="wishlist-btn" data-name="${p.name}" aria-label="Add to wishlist"><i class="${isWishlisted(p.name) ? 'fa-solid' : 'fa-regular'} fa-heart"></i></button>
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="des">
        <div class="star-rating">${stars} <span>${p.rating}</span></div>
        <h5>${p.name}</h5>
        <p class="pro-tagline">${p.desc}</p>
        <h4>₹${p.price}</h4>
        <button class="add-to-cart" data-name="${p.name}" data-price="${p.price}" data-img="${p.img}"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
      </div>`;
        container.appendChild(card);
    });
    // Re-init scroll reveal for new elements
    initReveal();
    initAddToCart();
    initWishlistBtns();
}

function generateStars(rating) {
    let s = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) s += '<i class="fa-solid fa-star"></i>';
        else if (i - 0.5 <= rating) s += '<i class="fa-solid fa-star-half-stroke"></i>';
        else s += '<i class="fa-regular fa-star"></i>';
    }
    return s;
}

function badgeLabel(b) {
    return { new: 'New', popular: 'Popular', bestseller: 'Bestseller', organic: 'Organic', sale: 'Sale' }[b] || b;
}

function isWishlisted(name) {
    const wl = JSON.parse(localStorage.getItem('phalahaar-wishlist') || '[]');
    return wl.includes(name);
}

function sortProducts(products, by) {
    const sorted = [...products];
    if (by === 'price-low') sorted.sort((a, b) => a.price - b.price);
    else if (by === 'price-high') sorted.sort((a, b) => b.price - a.price);
    else if (by === 'rating') sorted.sort((a, b) => b.rating - a.rating);
    else if (by === 'name') sorted.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
}
