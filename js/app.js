/* ============================================================
   1A ROPA IMPORTADA — LÓGICA DE LA TIENDA
   ============================================================ */
(function () {
  "use strict";

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const byId = (id) => PRODUCTS.find((p) => p.id === Number(id));

  const state = {
    cat: "todo",
    sort: "featured",
    q: "",
    cart: load("1a_cart", []),
    selectedSize: {}
  };

  function load(key, fb) {
    try { return JSON.parse(localStorage.getItem(key)) || fb; }
    catch (e) { return fb; }
  }
  function save(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }

  /* ---------- WHATSAPP ---------- */
  function waLink(text) {
    return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
  }
  function fillWhatsAppLinks() {
    $$("[data-wa]").forEach((el) => {
      const msg = el.getAttribute("data-wa") || "hola";
      el.setAttribute("href", waLink(msg));
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
  }

  /* ---------- TOAST ---------- */
  let toastTimer;
  function toast(msg, icon = "✅") {
    const t = $("#toast");
    t.innerHTML = `<span>${icon}</span> ${msg}`;
    t.classList.add("is-show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("is-show"), 2600);
  }

  /* ---------- FICHA DE PRODUCTO ---------- */
  function stars(n) {
    const full = Math.round(n);
    return "★".repeat(full) + "☆".repeat(5 - full);
  }

  function cardHTML(p) {
    const badgeClass = p.badge === "Más vendido" ? "card__badge--hot"
      : p.badge === "Nuevo" ? "card__badge--new" : "";
    return `
    <article class="card" data-id="${p.id}" data-reveal>
      <div class="card__media" data-open="${p.id}">
        ${p.badge ? `<span class="card__badge ${badgeClass}">${p.badge}</span>` : ""}
        <img src="${artURI(p)}" alt="${p.name}" loading="lazy">
        <div class="card__quick">Vista rápida</div>
      </div>
      <div class="card__body">
        <div class="card__rating">
          <span class="stars">${stars(p.rating)}</span>
          <span>${p.rating} (${p.reviews})</span>
        </div>
        <h3 class="card__name" data-open="${p.id}">${p.name}</h3>
        <div class="card__ship">🚚 Envío contra entrega · <b>24-48h</b></div>
        <div class="card__actions">
          <button class="btn btn--add" data-add="${p.id}">Agregar al pedido</button>
          <a class="card__wa" data-wa="hola, me interesa: ${p.name}" href="#" aria-label="Consultar por WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.37 9.37 0 0 1-1.44-5.01c0-5.18 4.22-9.4 9.41-9.4a9.34 9.34 0 0 1 9.4 9.4c0 5.19-4.22 9.42-9.4 9.42z"/></svg>
          </a>
        </div>
      </div>
    </article>`;
  }

  /* ---------- RENDER CATÁLOGO ---------- */
  function renderFilters() {
    $("#filters").innerHTML = CATEGORIES.map(
      (c) => `<button class="chip ${c.id === state.cat ? "is-active" : ""}" data-cat="${c.id}">${c.label}</button>`
    ).join("");
  }

  function filtered() {
    let list = PRODUCTS.filter((p) => state.cat === "todo" || p.cat === state.cat);
    if (state.q) {
      const q = state.q.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.cat.includes(q));
    }
    if (state.sort === "rating") list.sort((a, b) => b.rating - a.rating);
    else list.sort((a, b) => b.reviews - a.reviews);
    return list;
  }

  function renderCatalog() {
    const list = filtered();
    $("#productGrid").innerHTML = list.map(cardHTML).join("");
    $("#empty").hidden = list.length > 0;
    fillWhatsAppLinks();
    observeReveal();
  }

  /* ---------- CARRITO ---------- */
  function addToCart(id, size) {
    const p = byId(id);
    if (!p) return;
    const s = size || state.selectedSize[id] || p.sizes[0];
    const key = `${p.id}_${s}`;
    const found = state.cart.find((i) => i.key === key);
    if (found) found.qty += 1;
    else state.cart.push({ key, id: p.id, size: s, qty: 1 });
    save("1a_cart", state.cart);
    updateCart();
    toast(`${p.name} agregado al pedido`);
    const c = $("#cartCount");
    c.classList.add("pop");
    setTimeout(() => c.classList.remove("pop"), 260);
  }

  function changeQty(key, delta) {
    const item = state.cart.find((i) => i.key === key);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) state.cart = state.cart.filter((i) => i.key !== key);
    save("1a_cart", state.cart);
    updateCart();
  }

  function removeItem(key) {
    state.cart = state.cart.filter((i) => i.key !== key);
    save("1a_cart", state.cart);
    updateCart();
    toast("Producto eliminado", "🗑️");
  }

  function updateCart() {
    const count = state.cart.reduce((s, i) => s + i.qty, 0);
    $("#cartCount").textContent = count;
    $("#cartMeta").textContent = count === 1 ? "1 producto" : `${count} productos`;

    const box = $("#cartItems");
    if (!state.cart.length) {
      box.innerHTML = `
        <div class="cart__empty">
          <span>🛒</span>
          <b>Tu pedido está vacío</b>
          Agrega productos y finaliza tu compra por WhatsApp.
        </div>`;
    } else {
      box.innerHTML = state.cart.map((i) => {
        const p = byId(i.id);
        if (!p) return "";
        return `
        <div class="ci">
          <div class="ci__img"><img src="${artURI(p)}" alt="${p.name}"></div>
          <div class="ci__info">
            <div class="ci__name">${p.name}</div>
            <div class="ci__meta">Talla: ${i.size}</div>
            <div class="ci__bottom">
              <div class="qty">
                <button data-qty="-1" data-key="${i.key}" aria-label="Quitar uno">−</button>
                <span>${i.qty}</span>
                <button data-qty="1" data-key="${i.key}" aria-label="Agregar uno">+</button>
              </div>
            </div>
            <a class="ci__remove" data-remove="${i.key}">Eliminar</a>
          </div>
        </div>`;
      }).join("");
    }
  }

  function openCart() {
    $("#cart").classList.add("is-open");
    $("#overlay").classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function closeCart() {
    $("#cart").classList.remove("is-open");
    $("#overlay").classList.remove("is-open");
    if (!$("#modal").classList.contains("is-open")) document.body.style.overflow = "";
  }

  function checkout() {
    if (!state.cart.length) {
      toast("Tu pedido está vacío", "🛒");
      return;
    }
    const name = $("#buyerName").value.trim();
    const address = $("#buyerAddress").value.trim();
    if (!name) { toast("Escribe tu nombre para continuar", "✍️"); $("#buyerName").focus(); return; }
    if (!address) { toast("Escribe tu dirección de entrega", "📍"); $("#buyerAddress").focus(); return; }

    const lines = state.cart.map((i, idx) => {
      const p = byId(i.id);
      return `${idx + 1}. ${p.name} — Talla ${i.size} x${i.qty}`;
    }).join("\n");

    const msg =
`🛍️ *NUEVO PEDIDO — ${CONFIG.store.name}*

*Cliente:* ${name}
*Dirección:* ${address}

*Productos:*
${lines}

_Me interesa confirmar el total y el envío antes de recibir._`;

    window.open(waLink(msg), "_blank", "noopener");
    toast("Abriendo WhatsApp...", "💬");
  }

  /* ---------- MODAL PRODUCTO ---------- */
  function openModal(id) {
    const p = byId(id);
    if (!p) return;
    const size = state.selectedSize[p.id] || p.sizes[0];
    $("#modalBox").innerHTML = `
      <div class="pm">
        <div class="pm__media">
          <img src="${artURI(p)}" alt="${p.name}">
        </div>
        <div class="pm__body">
          <button class="pm__close" data-close-modal aria-label="Cerrar">✕</button>
          ${p.badge ? `<span class="pm__badge">${p.badge}</span>` : ""}
          <h2 class="pm__name">${p.name}</h2>
          <div class="pm__rating">
            <span class="stars">${stars(p.rating)}</span>
            <b>${p.rating}</b> · ${p.reviews} opiniones
          </div>
          <p class="pm__desc">Prenda importada de alta calidad, tejido resistente y acabados premium. Talla fiel a la medida. Disponible para envío contra entrega a todo el país.</p>

          <span class="pm__label">Elige tu talla</span>
          <div class="pm__sizes">
            ${p.sizes.map((s) => `<button class="size ${s === size ? "is-active" : ""}" data-size="${s}" data-pid="${p.id}">${s}</button>`).join("")}
          </div>

          <div class="pm__btns">
            <button class="btn btn--dark" data-add-modal="${p.id}">Agregar al pedido</button>
            <a class="btn btn--wa" href="${waLink(`hola, me interesa: ${p.name}, ¿está disponible?`)}" target="_blank" rel="noopener">Consultar por WhatsApp</a>
          </div>

          <div class="pm__points">
            <div class="pm__point"><b>✓</b> Pagas recién cuando recibes y revisas el producto</div>
            <div class="pm__point"><b>✓</b> Envío en 24-48 horas con seguimiento</div>
            <div class="pm__point"><b>✓</b> Cambio de talla gratis por 7 días</div>
            <div class="pm__point"><b>✓</b> Despachamos desde bodega el mismo día</div>
          </div>
        </div>
      </div>`;
    $("#modal").classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    $("#modal").classList.remove("is-open");
    if (!$("#cart").classList.contains("is-open")) document.body.style.overflow = "";
  }

  /* ---------- TESTIMONIOS ---------- */
  function renderReviews() {
    $("#reviewsGrid").innerHTML = TESTIMONIALS.map((t) => {
      const initials = t.name.split(" ").map((w) => w[0]).join("").slice(0, 2);
      return `
      <article class="review" data-reveal>
        <div class="review__stars">${"★".repeat(t.stars)}</div>
        <p class="review__text">${t.text}</p>
        <div class="review__who">
          <div class="review__avatar">${initials}</div>
          <div>
            <b>${t.name}</b>
            <span>${t.city}</span>
          </div>
          <span class="review__verified">✓ Verificado</span>
        </div>
      </article>`;
    }).join("");
  }

  /* ---------- FAQ ---------- */
  function renderFaq() {
    $("#faqList").innerHTML = FAQS.map((f, i) => `
      <div class="faq-item ${i === 0 ? "is-open" : ""}">
        <button class="faq-item__q" data-faq>
          ${f.q}
          <span class="faq-item__ico">+</span>
        </button>
        <div class="faq-item__a" ${i === 0 ? 'style="max-height:400px"' : ""}>
          <p>${f.a}</p>
        </div>
      </div>`).join("");
  }

  /* ---------- REVEAL ---------- */
  let observer;
  function observeReveal() {
    if (!("IntersectionObserver" in window)) {
      $$("[data-reveal]").forEach((el) => el.classList.add("in"));
      return;
    }
    if (!observer) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in"); observer.unobserve(e.target); }
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    }
    $$("[data-reveal]:not(.in)").forEach((el) => observer.observe(el));
  }

  /* ---------- HERO IMÁGENES ---------- */
  function setHeroImages() {
    const find = (id) => PRODUCTS.find((p) => p.id === id);
    const map = { heroImg1: 13, heroImg2: 7 };
    Object.entries(map).forEach(([elId, pid]) => {
      const el = document.getElementById(elId);
      const p = find(pid);
      if (el && p) el.src = artURI(p);
    });
  }

  /* ---------- CONTACTO ---------- */
  function fillContactInfo() {
    $("#footerPhone").setAttribute("href", waLink("hola"));
    $("#year").textContent = new Date().getFullYear();
    const cta = document.getElementById("ctaCount");
    if (cta) cta.textContent = "Ver los " + PRODUCTS.length + " productos disponibles";
  }

  /* ---------- EVENTOS ---------- */
  function bindEvents() {
    // header sticky
    const header = $("#header");
    window.addEventListener("scroll", () => {
      header.classList.toggle("is-stuck", window.scrollY > 12);
    }, { passive: true });

    // menú móvil
    const setMenu = (open) => {
      $("#burger").classList.toggle("open", open);
      $("#nav").classList.toggle("is-open", open);
      $("#navDrawer").classList.toggle("is-open", open);
    };
    $("#burger").addEventListener("click", () => {
      setMenu(!$("#nav").classList.contains("is-open"));
    });
    $$(".nav__link").forEach((a) => a.addEventListener("click", () => setMenu(false)));

    // carrito
    $("#cartBtn").addEventListener("click", openCart);
    $("#cartClose").addEventListener("click", closeCart);
    $("#overlay").addEventListener("click", closeCart);
    $("#checkoutBtn").addEventListener("click", checkout);

    // delegación global
    document.addEventListener("click", (e) => {
      const t = e.target;

      if (t.id === "navDrawer") { setMenu(false); return; }

      const add = t.closest("[data-add]");
      if (add) { addToCart(add.getAttribute("data-add")); return; }

      const addM = t.closest("[data-add-modal]");
      if (addM) {
        addToCart(addM.getAttribute("data-add-modal"));
        closeModal();
        openCart();
        return;
      }

      const open = t.closest("[data-open]");
      if (open) { openModal(open.getAttribute("data-open")); return; }

      if (t.closest("[data-close-modal]") || t.id === "modal") { closeModal(); return; }

      const size = t.closest("[data-size]");
      if (size) {
        const pid = size.getAttribute("data-pid");
        state.selectedSize[pid] = size.getAttribute("data-size");
        $$("[data-pid='" + pid + "']").forEach((b) => b.classList.remove("is-active"));
        size.classList.add("is-active");
        return;
      }

      const qty = t.closest("[data-qty]");
      if (qty) { changeQty(qty.getAttribute("data-key"), Number(qty.getAttribute("data-qty"))); return; }

      const rm = t.closest("[data-remove]");
      if (rm) { removeItem(rm.getAttribute("data-remove")); return; }

      const chip = t.closest("[data-cat]");
      if (chip) {
        state.cat = chip.getAttribute("data-cat");
        renderFilters();
        renderCatalog();
        return;
      }

      const faq = t.closest("[data-faq]");
      if (faq) {
        const item = faq.parentElement;
        const ans = item.querySelector(".faq-item__a");
        const isOpen = item.classList.contains("is-open");
        $$(".faq-item").forEach((f) => {
          f.classList.remove("is-open");
          f.querySelector(".faq-item__a").style.maxHeight = null;
        });
        if (!isOpen) {
          item.classList.add("is-open");
          ans.style.maxHeight = ans.scrollHeight + "px";
        }
        return;
      }
    });

    // búsqueda y orden
    $("#search").addEventListener("input", (e) => { state.q = e.target.value.trim(); renderCatalog(); });
    $("#sort").addEventListener("change", (e) => { state.sort = e.target.value; renderCatalog(); });

    // teclado
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { closeModal(); closeCart(); }
    });
  }

  /* ---------- INICIO ---------- */
  function init() {
    const safe = (fn) => { try { fn(); } catch (e) { if (window.console) console.warn(e); } };
    safe(setHeroImages);
    safe(fillContactInfo);
    safe(fillWhatsAppLinks);
    safe(renderFilters);
    safe(renderCatalog);
    safe(renderReviews);
    safe(renderFaq);
    safe(updateCart);
    safe(bindEvents);
    safe(observeReveal);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
