// ========== PHALAHAAR - APP.JS ==========
document.addEventListener('DOMContentLoaded', () => {

  // ===== SCROLL PROGRESS =====
  const scrollProg = document.querySelector('.scroll-progress');
  if (scrollProg) {
    window.addEventListener('scroll', () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      scrollProg.style.width = h > 0 ? (window.scrollY / h * 100) + '%' : '0%';
    });
  }

  // ===== PROMO BAR =====
  const promoClose = document.querySelector('.promo-close');
  if (promoClose) {
    promoClose.addEventListener('click', () => {
      promoClose.parentElement.style.display = 'none';
      sessionStorage.setItem('phalahaar-promo-closed', '1');
    });
    if (sessionStorage.getItem('phalahaar-promo-closed')) promoClose.parentElement.style.display = 'none';
  }

  // ===== HAMBURGER MENU + SIDEBAR OVERLAY =====
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.getElementById('navbar');
  let sidebarOverlay = document.querySelector('.sidebar-overlay');
  if (!sidebarOverlay) {
    sidebarOverlay = document.createElement('div');
    sidebarOverlay.className = 'sidebar-overlay';
    document.body.appendChild(sidebarOverlay);
  }

  function openSidebar() {
    hamburger.classList.add('active');
    navbar.classList.add('active');
    sidebarOverlay.classList.add('active');
    document.body.classList.add('sidebar-open');
  }

  function closeSidebar() {
    hamburger.classList.remove('active');
    navbar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.classList.remove('sidebar-open');
  }

  if (hamburger && navbar) {
    hamburger.addEventListener('click', () => {
      if (navbar.classList.contains('active')) closeSidebar();
      else openSidebar();
    });
    navbar.querySelectorAll('a').forEach(l => l.addEventListener('click', closeSidebar));
    sidebarOverlay.addEventListener('click', closeSidebar);
    document.addEventListener('click', e => {
      if (navbar.classList.contains('active') && !navbar.contains(e.target) && !hamburger.contains(e.target)) closeSidebar();
    });
  }

  // ===== DARK MODE =====
  const themeToggle = document.querySelector('.theme-toggle');
  const savedTheme = localStorage.getItem('phalahaar-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('phalahaar-theme', next);
      updateThemeIcon(next);
    });
  }
  function updateThemeIcon(t) { if (themeToggle) themeToggle.innerHTML = t === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>'; }

  // ===== CART BADGE =====
  updateCartBadge();
  function updateCartBadge() {
    const badge = document.querySelector('.cart-badge');
    if (!badge) return;
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const count = cart.reduce((s, i) => s + i.quantity, 0);
    badge.textContent = count > 0 ? count : '';
    badge.setAttribute('data-count', count);
  }

  // ===== WISHLIST BADGE =====
  updateWishlistBadge();
  function updateWishlistBadge() {
    const badge = document.querySelector('.wishlist-count');
    if (!badge) return;
    const wl = JSON.parse(localStorage.getItem('phalahaar-wishlist') || '[]');
    badge.textContent = wl.length > 0 ? wl.length : '';
    badge.setAttribute('data-count', wl.length);
  }

  // ===== TOAST =====
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) { toastContainer = document.createElement('div'); toastContainer.className = 'toast-container'; document.body.appendChild(toastContainer); }
  window.showToast = function (msg, icon = '✅') {
    const t = document.createElement('div'); t.className = 'toast';
    t.innerHTML = `<span class="toast-icon">${icon}</span> ${msg}`;
    toastContainer.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(100px)'; t.style.transition = '0.4s ease'; setTimeout(() => t.remove(), 400); }, 2500);
  };

  // ===== INIT ADD TO CART (global) =====
  window.initAddToCart = function () {
    document.querySelectorAll('.add-to-cart').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const name = btn.getAttribute('data-name'), price = parseFloat(btn.getAttribute('data-price')), img = btn.getAttribute('data-img');
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
        let found = cart.find(i => i.name === name);
        if (found) found.quantity += 1; else cart.push({ name, price, img, quantity: 1 });
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartBadge();
        window.showToast(`${name} added to cart!`, '🛒');
        btn.style.transform = 'scale(0.9)'; setTimeout(() => btn.style.transform = 'scale(1)', 200);
      });
    });
  };
  initAddToCart();

  // ===== INIT WISHLIST BTNS =====
  window.initWishlistBtns = function () {
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
      const name = btn.getAttribute('data-name');
      let wl = JSON.parse(localStorage.getItem('phalahaar-wishlist') || '[]');
      if (wl.includes(name)) { btn.classList.add('active'); btn.querySelector('i').className = 'fa-solid fa-heart'; }
      btn.addEventListener('click', e => {
        e.stopPropagation();
        let wl2 = JSON.parse(localStorage.getItem('phalahaar-wishlist') || '[]');
        if (wl2.includes(name)) {
          wl2 = wl2.filter(n => n !== name);
          btn.classList.remove('active'); btn.querySelector('i').className = 'fa-regular fa-heart';
          window.showToast(`${name} removed from wishlist`, '💔');
        } else {
          wl2.push(name);
          btn.classList.add('active'); btn.querySelector('i').className = 'fa-solid fa-heart';
          window.showToast(`${name} added to wishlist!`, '❤️');
        }
        localStorage.setItem('phalahaar-wishlist', JSON.stringify(wl2));
        updateWishlistBadge();
      });
    });
  };
  initWishlistBtns();

  // ===== SCROLL REVEAL =====
  window.initReveal = function () {
    const els = document.querySelectorAll('.reveal:not(.visible)');
    if (els.length > 0) {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
      els.forEach(el => obs.observe(el));
    }
  };
  initReveal();

  // ===== BACK TO TOP =====
  const btt = document.querySelector('.back-to-top');
  if (btt) {
    window.addEventListener('scroll', () => { btt.classList.toggle('visible', window.scrollY > 400); });
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ===== SEARCH & FILTER =====
  const searchInput = document.querySelector('.search-input');
  const filterPills = document.querySelectorAll('.filter-pill');
  const sortSelect = document.querySelector('.sort-select');

  if (searchInput) searchInput.addEventListener('input', filterProducts);
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => { filterPills.forEach(p => p.classList.remove('active')); pill.classList.add('active'); filterProducts(); });
  });
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      // Re-render with sorted data
      const page = sortSelect.getAttribute('data-page');
      let data;
      if (page === 'fruits' && typeof FRUITS !== 'undefined') data = FRUITS;
      else if (page === 'juices' && typeof JUICES !== 'undefined') data = JUICES;
      else if (page === 'salads' && typeof SALADS !== 'undefined') data = SALADS;
      if (data) {
        const sorted = sortProducts(data, sortSelect.value);
        renderProducts(sorted, 'product-grid');
        filterProducts();
      }
    });
  }

  function filterProducts() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const activePill = document.querySelector('.filter-pill.active');
    const badge = activePill ? activePill.getAttribute('data-filter') : 'all';
    document.querySelectorAll('.pro').forEach(card => {
      const name = (card.querySelector('.des h5')?.textContent || '').toLowerCase();
      const desc = (card.querySelector('.pro-tagline')?.textContent || '').toLowerCase();
      const cardBadge = card.querySelector('.badge')?.textContent.toLowerCase() || '';
      const matchSearch = !query || name.includes(query) || desc.includes(query);
      const matchBadge = badge === 'all' || cardBadge.includes(badge);
      card.style.display = (matchSearch && matchBadge) ? '' : 'none';
    });
  }

  // ===== FRUIT OF THE DAY (Fruityvice API) =====
  const fotdCard = document.getElementById('fotd-card');
  if (fotdCard) loadFruitOfDay(fotdCard);
  async function loadFruitOfDay(c) {
    try {
      const res = await fetch('https://www.fruityvice.com/api/fruit/all');
      if (!res.ok) throw new Error('fail');
      const fruits = await res.json();
      const f = fruits[Math.floor(Math.random() * fruits.length)];
      const em = { 'apple': '🍎', 'banana': '🍌', 'cherry': '🍒', 'grape': '🍇', 'lemon': '🍋', 'mango': '🥭', 'orange': '🍊', 'peach': '🍑', 'pear': '🍐', 'pineapple': '🍍', 'strawberry': '🍓', 'watermelon': '🍉', 'kiwi': '🥝', 'coconut': '🥥', 'avocado': '🥑', 'blueberry': '🫐', 'papaya': '🍈' };
      c.innerHTML = `<div class="fotd-emoji">${em[f.name.toLowerCase()] || '🍎'}</div><h3>${f.name}</h3><p style="color:var(--text-secondary);margin-bottom:14px">${f.family} family · ${f.order}</p><div class="fotd-nutrition"><div class="nutrition-item"><div class="value">${f.nutritions.calories}</div><div class="label">Calories</div></div><div class="nutrition-item"><div class="value">${f.nutritions.sugar}g</div><div class="label">Sugar</div></div><div class="nutrition-item"><div class="value">${f.nutritions.protein}g</div><div class="label">Protein</div></div><div class="nutrition-item"><div class="value">${f.nutritions.carbohydrates}g</div><div class="label">Carbs</div></div></div>`;
    } catch (e) {
      c.innerHTML = `<div class="fotd-emoji">🍎</div><h3>Apple</h3><p style="color:var(--text-secondary);margin-bottom:14px">A classic fruit rich in fiber and vitamins</p><div class="fotd-nutrition"><div class="nutrition-item"><div class="value">52</div><div class="label">Calories</div></div><div class="nutrition-item"><div class="value">10g</div><div class="label">Sugar</div></div><div class="nutrition-item"><div class="value">0.3g</div><div class="label">Protein</div></div><div class="nutrition-item"><div class="value">14g</div><div class="label">Carbs</div></div></div>`;
    }
  }

  // ===== NUTRITION MODAL =====
  window.showNutritionModal = function (name, data) {
    let o = document.querySelector('.modal-overlay');
    if (!o) { o = document.createElement('div'); o.className = 'modal-overlay'; o.innerHTML = '<div class="modal"><button class="modal-close">&times;</button><h3 class="modal-title"></h3><div class="nutrition-grid"></div></div>'; document.body.appendChild(o); o.addEventListener('click', e => { if (e.target === o || e.target.classList.contains('modal-close')) o.classList.remove('active'); }); }
    o.querySelector('.modal-title').textContent = name + ' - Nutrition';
    o.querySelector('.nutrition-grid').innerHTML = Object.entries(data).map(([k, v]) => `<div class="stat"><div class="val">${v}</div><div class="lbl">${k}</div></div>`).join('');
    o.classList.add('active');
  };

  // ===== ANIMATED COUNTER =====
  const statNums = document.querySelectorAll('.stat-number');
  if (statNums.length > 0) {
    const cObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target); cObs.unobserve(e.target); } });
    }, { threshold: 0.5 });
    statNums.forEach(el => cObs.observe(el));
  }
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target')) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    let count = 0; const step = Math.max(1, Math.floor(target / 60));
    const t = setInterval(() => { count += step; if (count >= target) { count = target; clearInterval(t); } el.textContent = count.toLocaleString() + suffix; }, 25);
  }

  // ===== FAQ ACCORDION =====
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      document.querySelectorAll('.faq-item').forEach(i => { if (i !== item) i.classList.remove('active'); });
      item.classList.toggle('active');
    });
  });

  // ===== COOKIE CONSENT =====
  const cc = document.querySelector('.cookie-consent');
  if (cc && !localStorage.getItem('phalahaar-cookies')) {
    cc.style.display = 'flex';
    cc.querySelector('.cookie-accept')?.addEventListener('click', () => { localStorage.setItem('phalahaar-cookies', 'accepted'); cc.remove(); });
    cc.querySelector('.cookie-decline')?.addEventListener('click', () => { localStorage.setItem('phalahaar-cookies', 'declined'); cc.remove(); });
  } else if (cc) { cc.remove(); }

  // ===== RENDER WISHLIST PAGE =====
  const wishGrid = document.getElementById('wishlist-grid');
  if (wishGrid) renderWishlist(wishGrid);

  function renderWishlist(container) {
    const wl = JSON.parse(localStorage.getItem('phalahaar-wishlist') || '[]');
    if (wl.length === 0) {
      container.innerHTML = '<div class="wishlist-empty"><div class="empty-icon">💔</div><p>Your wishlist is empty</p><a href="product.html" class="btn-primary">Browse Products</a></div>';
      return;
    }
    const allProducts = [...(typeof FRUITS !== 'undefined' ? FRUITS : []), ...(typeof JUICES !== 'undefined' ? JUICES : []), ...(typeof SALADS !== 'undefined' ? SALADS : [])];
    container.innerHTML = '';
    wl.forEach(name => {
      const p = allProducts.find(x => x.name === name);
      if (!p) return;
      const stars = generateStars(p.rating);
      const card = document.createElement('div');
      card.className = 'pro reveal visible';
      card.setAttribute('data-price', p.price);
      card.innerHTML = `<span class="badge badge-${p.badge}">${badgeLabel(p.badge)}</span><button class="wishlist-btn active" data-name="${p.name}"><i class="fa-solid fa-heart"></i></button><img src="${p.img}" alt="${p.name}" loading="lazy"><div class="des"><div class="star-rating">${stars} <span>${p.rating}</span></div><h5>${p.name}</h5><p class="pro-tagline">${p.desc}</p><h4>₹${p.price}</h4><button class="add-to-cart" data-name="${p.name}" data-price="${p.price}" data-img="${p.img}"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button></div>`;
      container.appendChild(card);
    });
    initAddToCart();
    initWishlistBtns();
  }

}); // end DOMContentLoaded
