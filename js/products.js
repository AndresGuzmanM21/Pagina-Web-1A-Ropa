/* ============================================================
   1A ROPA IMPORTADA — CONFIGURACIÓN GENERAL
   Cambia estos valores por los de tu negocio.
   ============================================================ */
const CONFIG = {
  whatsapp: "573053654031", // tu numero con codigo de pais (Colombia +57), sin + ni espacios
  store: {
    name: "1A Ropa Importada"
  },
  shipping: {
    time: "24 – 48 horas"
  }
};

/* ============================================================
   ILUSTRACIONES DE PRODUCTO (SVG)
   Si ya tienes fotos reales, reemplaza "art" por:
   image: "assets/img/mi-foto.jpg"
   ============================================================ */
const ART = {
  polo: (c1, c2) => `
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
    <rect width="400" height="400" fill="url(#g)"/>
    <circle cx="70" cy="70" r="86" fill="#ffffff" opacity=".10"/>
    <circle cx="336" cy="330" r="84" fill="#000000" opacity=".07"/>
    <path d="M140 112 L174 92 L200 132 L226 92 L260 112 L302 146 L280 188 L258 172 L258 306 Q200 322 142 306 L142 172 L120 188 L98 146 Z"
      fill="#ffffff" stroke="rgba(0,0,0,.15)" stroke-width="3"/>
    <path d="M174 92 L200 132 L226 92" fill="none" stroke="rgba(0,0,0,.3)" stroke-width="5"/>
    <path d="M200 132 V196" stroke="rgba(0,0,0,.3)" stroke-width="5"/>
    <circle cx="200" cy="152" r="5" fill="rgba(0,0,0,.4)"/>
    <circle cx="200" cy="178" r="5" fill="rgba(0,0,0,.4)"/>`,

  tshirt: (c1, c2) => `
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
    <rect width="400" height="400" fill="url(#g)"/>
    <circle cx="330" cy="70" r="90" fill="#ffffff" opacity=".10"/>
    <circle cx="60" cy="340" r="70" fill="#000000" opacity=".08"/>
    <path d="M140 112 L172 94 Q200 124 228 94 L260 112 L302 144 L280 186 L258 170 L258 306 Q200 322 142 306 L142 170 L120 186 L98 144 Z"
      fill="#ffffff" stroke="rgba(0,0,0,.15)" stroke-width="3"/>
    <path d="M172 94 Q200 124 228 94" fill="none" stroke="rgba(0,0,0,.25)" stroke-width="5"/>`,

  hoodie: (c1, c2) => `
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
    <rect width="400" height="400" fill="url(#g)"/>
    <circle cx="70" cy="70" r="80" fill="#ffffff" opacity=".10"/>
    <circle cx="340" cy="330" r="90" fill="#000000" opacity=".08"/>
    <path d="M150 130 L176 112 Q200 136 224 112 L250 130 L300 158 L280 200 L258 184 L258 318 Q200 334 142 318 L142 184 L120 200 L100 158 Z"
      fill="#ffffff" stroke="rgba(0,0,0,.15)" stroke-width="3"/>
    <path d="M176 112 Q200 76 224 112 Q200 136 176 112 Z" fill="#f1f1f1" stroke="rgba(0,0,0,.15)" stroke-width="3"/>
    <rect x="158" y="238" width="84" height="46" rx="12" fill="rgba(0,0,0,.10)"/>
    <path d="M188 140 L188 178 M212 140 L212 178" stroke="rgba(0,0,0,.35)" stroke-width="5" stroke-linecap="round"/>`,

  jacket: (c1, c2) => `
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
    <rect width="400" height="400" fill="url(#g)"/>
    <circle cx="60" cy="330" r="90" fill="#ffffff" opacity=".10"/>
    <circle cx="340" cy="60" r="70" fill="#000000" opacity=".07"/>
    <path d="M144 108 L182 90 L200 140 L218 90 L256 108 L304 146 L282 190 L258 172 L258 320 Q200 336 142 320 L142 172 L118 190 L96 146 Z"
      fill="#ffffff" stroke="rgba(0,0,0,.15)" stroke-width="3"/>
    <path d="M182 90 L200 140 L218 90" fill="none" stroke="rgba(0,0,0,.3)" stroke-width="5"/>
    <path d="M200 140 V322" stroke="rgba(0,0,0,.3)" stroke-width="5"/>
    <rect x="152" y="214" width="34" height="34" rx="6" fill="rgba(0,0,0,.10)"/>
    <rect x="214" y="214" width="34" height="34" rx="6" fill="rgba(0,0,0,.10)"/>`
};

function artURI(product) {
  if (product.image) return product.image;
  const fn = ART[product.art] || ART.tshirt;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">${fn(product.c1, product.c2)}</svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

/* ============================================================
   CATÁLOGO — solo Camisas, Chaquetas y Sudaderas
   Los precios NO se muestran: se cotizan por WhatsApp.
   ============================================================ */
const CATEGORIES = [
  { id: "todo",       label: "Todo" },
  { id: "camisas",    label: "Camisas" },
  { id: "chaquetas",  label: "Chaquetas" },
  { id: "sudaderas",  label: "Sudaderas" }
];

const PRODUCTS = [
  /* ---------------- CAMISAS ---------------- */
  { id: 1,  name: "Camisa Oxford Clásica",   cat: "camisas", art: "polo",   c1: "#eef1f6", c2: "#b9c4d6", price: 99900,  old: 149900, badge: "Más vendido", sizes: ["S","M","L","XL","XXL"], rating: 4.9, reviews: 268 },
  { id: 2,  name: "Camisa Linen Summer",     cat: "camisas", art: "polo",   c1: "#f7e7cf", c2: "#e8c39a", price: 89900,  old: 139900,   badge: "",        sizes: ["S","M","L","XL"],        rating: 4.8, reviews: 191 },
  { id: 3,  name: "Camisa Oversize Urban",   cat: "camisas", art: "polo",   c1: "#23262e", c2: "#4a5060", price: 79900,  old: 119900, badge: "",      sizes: ["S","M","L","XL","XXL"], rating: 4.8, reviews: 174 },
  { id: 4,  name: "Camisa Denim Casual",     cat: "camisas", art: "polo",   c1: "#3f6ea8", c2: "#8fb4dd", price: 109900, old: 159900, badge: "Nuevo",       sizes: ["M","L","XL","XXL"],     rating: 4.9, reviews: 132 },
  { id: 5,  name: "Camisa Basic Fit",        cat: "camisas", art: "polo",   c1: "#f4f4f4", c2: "#cfcfcf", price: 69900,  old: 99900,  badge: "",      sizes: ["S","M","L","XL"],        rating: 4.7, reviews: 305 },
  { id: 6,  name: "Camisa Sport Dry",        cat: "camisas", art: "polo",   c1: "#0b6e4f", c2: "#25b184", price: 84900,  old: 124900,   badge: "",        sizes: ["S","M","L","XL","XXL"], rating: 4.7, reviews: 96 },

  /* ---------------- SUDADERAS ---------------- */
  { id: 7,  name: "Sudadera Hoodie Premium",  cat: "sudaderas", art: "hoodie", c1: "#17181d", c2: "#3c4049", price: 139900, old: 199900, badge: "Más vendido", sizes: ["M","L","XL","XXL"],   rating: 4.9, reviews: 247 },
  { id: 8,  name: "Sudadera Oversize Basic",  cat: "sudaderas", art: "hoodie", c1: "#e6e6e8", c2: "#b4b6bd", price: 119900, old: 169900,   badge: "",        sizes: ["S","M","L","XL","XXL"], rating: 4.8, reviews: 203 },
  { id: 9,  name: "Sudadera Cozy Fit",        cat: "sudaderas", art: "hoodie", c1: "#c78b8b", c2: "#e0b1b1", price: 129900, old: 189900, badge: "",      sizes: ["S","M","L","XL"],       rating: 4.8, reviews: 158 },
  { id: 10, name: "Sudadera Street Logo",     cat: "sudaderas", art: "hoodie", c1: "#1a2b6b", c2: "#4a63c7", price: 149900, old: 219900, badge: "Nuevo",       sizes: ["M","L","XL","XXL"],   rating: 4.9, reviews: 117 },
  { id: 11, name: "Sudadera Tech Dry",        cat: "sudaderas", art: "hoodie", c1: "#2b2f36", c2: "#5b6270", price: 109900, old: 159900, badge: "",      sizes: ["S","M","L","XL","XXL"], rating: 4.7, reviews: 88 },
  { id: 12, name: "Sudadera Colorblock",      cat: "sudaderas", art: "hoodie", c1: "#ff7a2f", c2: "#ffc93c", price: 134900, old: 189900,   badge: "",        sizes: ["S","M","L","XL"],       rating: 4.8, reviews: 104 },

  /* ---------------- CHAQUETAS ---------------- */
  { id: 13, name: "Chaqueta Bomber Utility",  cat: "chaquetas", art: "jacket", c1: "#23252b", c2: "#55565e", price: 259900, old: 359900, badge: "Más vendido", sizes: ["M","L","XL","XXL"],   rating: 4.9, reviews: 186 },
  { id: 14, name: "Chaqueta Denim Classic",   cat: "chaquetas", art: "jacket", c1: "#2e5c8a", c2: "#79a8d6", price: 219900, old: 309900,   badge: "",        sizes: ["S","M","L","XL"],       rating: 4.8, reviews: 149 },
  { id: 15, name: "Chaqueta Windbreaker",     cat: "chaquetas", art: "jacket", c1: "#12614a", c2: "#3fbf95", price: 189900, old: 269900, badge: "",      sizes: ["S","M","L","XL","XXL"], rating: 4.7, reviews: 121 },
  { id: 16, name: "Chaqueta Puffer Light",    cat: "chaquetas", art: "jacket", c1: "#3a2b52", c2: "#7b5fa8", price: 289900, old: 399900, badge: "Nuevo",       sizes: ["M","L","XL","XXL"],   rating: 4.9, reviews: 97 },
  { id: 17, name: "Chaqueta Bomber Slim",     cat: "chaquetas", art: "jacket", c1: "#4a3a2b", c2: "#9a7c5b", price: 249900, old: 349900,   badge: "",        sizes: ["S","M","L","XL"],       rating: 4.8, reviews: 84 },
  { id: 18, name: "Chaqueta Trucker Black",   cat: "chaquetas", art: "jacket", c1: "#101216", c2: "#3a3f4a", price: 229900, old: 329900, badge: "",      sizes: ["M","L","XL","XXL"],   rating: 4.8, reviews: 112 }
];

const TESTIMONIALS = [
  { name: "Andrés M.",   city: "Bogotá",       stars: 5, text: "Pedí dos camisas y me llegaron en 24 horas. Pagué contra entrega y la tela es de excelente calidad. Ya vuelvo a comprar." },
  { name: "Carolina R.", city: "Medellín",     stars: 5, text: "La chaqueta es igualita a la foto. Me encantó que pueda pagar cuando recibo. Atención por WhatsApp súper rápida." },
  { name: "Jorge L.",    city: "Cali",         stars: 5, text: "Compré la sudadera y una camisa. La talla me quedó perfecta porque me asesoraron por el chat. 100% recomendado." },
  { name: "Stephanie P.",city: "Barranquilla", stars: 5, text: "El envío llegó antes de lo previsto y el repartidor me esperó para pagar. Todo fácil y sin sorpresas." },
  { name: "Diego M.",    city: "Bucaramanga",  stars: 5, text: "La mejor relación calidad-precio que encontré. Las chaquetas son originales y súper abrigadas." },
  { name: "Rocío T.",    city: "Santa Marta",  stars: 5, text: "Pedí por WhatsApp y me contestaron en minutos. Me cambié la talla al día siguiente sin problema." }
];

const FAQS = [
  { q: "¿Cómo funciona el pago contra entrega?", a: "Solo envías tu pedido por WhatsApp, lo recibes en tu puerta, revisas el producto y pagas en efectivo al repartidor. No necesitas tarjeta ni transferencia previa." },
  { q: "¿Cuánto demora mi pedido?", a: "Despachamos el mismo día si compras antes de las 5:00 p.m. El envío tarda entre 24 y 48 horas dependiendo de tu ciudad." },
  { q: "¿Cómo es el envío?", a: "Despachamos desde bodega en 24–48 horas a todo el país. El valor del envío te lo confirmamos por WhatsApp según tu ciudad y pagas contra entrega." },
  { q: "¿Puedo cambiar la talla o el producto?", a: "Sí. Tienes 7 días para cambios sin costo. Solo escríbenos por WhatsApp y coordinamos la recolección." },
  { q: "¿Los productos son originales?", a: "Sí, trabajamos con importadores autorizados. Garantizamos calidad original en toda la colección de camisas, chaquetas y sudaderas." },
  { q: "¿A qué ciudades llegan?", a: "Despachamos a todo el país desde nuestra bodega en 24–48 horas. Solo escríbenos por WhatsApp con tu ciudad y te confirmamos el tiempo exacto." }
];
