/* ============================================================
   1A ROPA IMPORTADA — CONFIGURACIÓN GENERAL
   Cambia estos valores por los de tu negocio.
   ============================================================ */
const CONFIG = {
  whatsapp: "51999999999", // tu numero con codigo de pais, sin + ni espacios
  currency: "S/",
  store: {
    name: "1A Ropa Importada",
    address: "Av. Principal 123, Tienda 1A — Centro",
    hours: "Lun a Sáb: 9:00 a.m. – 8:00 p.m. | Dom: 10:00 a.m. – 6:00 p.m.",
    mapQuery: "Av. Principal 123, Tienda 1A — Centro"
  },
  shipping: {
    cost: 10,
    price: "S/ 10",
    freeOver: 150,
    time: "24 – 48 horas"
  },
  offerEndsInHours: 48 // horas de vigencia del contador de oferta
};

/* ============================================================
   ILUSTRACIONES DE PRODUCTO (SVG)
   Si ya tienes fotos reales, reemplaza "art" por:
   image: "assets/img/mi-foto.jpg"
   ============================================================ */
const ART = {
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

  jeans: (c1, c2) => `
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
    <rect width="400" height="400" fill="url(#g)"/>
    <circle cx="340" cy="60" r="80" fill="#ffffff" opacity=".12"/>
    <path d="M148 92 H252 L266 320 H224 L200 190 L176 320 H134 Z"
      fill="#ffffff" stroke="rgba(0,0,0,.15)" stroke-width="3"/>
    <rect x="146" y="92" width="108" height="26" fill="rgba(0,0,0,.10)"/>
    <path d="M200 118 V186" stroke="rgba(0,0,0,.2)" stroke-width="4"/>
    <path d="M150 150 q26 16 46 4 M250 150 q-26 16 -46 4" fill="none" stroke="rgba(0,0,0,.18)" stroke-width="4"/>`,

  jacket: (c1, c2) => `
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
    <rect width="400" height="400" fill="url(#g)"/>
    <circle cx="60" cy="330" r="90" fill="#ffffff" opacity=".10"/>
    <path d="M144 108 L182 90 L200 140 L218 90 L256 108 L304 146 L282 190 L258 172 L258 320 Q200 336 142 320 L142 172 L118 190 L96 146 Z"
      fill="#ffffff" stroke="rgba(0,0,0,.15)" stroke-width="3"/>
    <path d="M182 90 L200 140 L218 90" fill="none" stroke="rgba(0,0,0,.3)" stroke-width="5"/>
    <path d="M200 140 V322" stroke="rgba(0,0,0,.3)" stroke-width="5"/>
    <rect x="152" y="214" width="34" height="34" rx="6" fill="rgba(0,0,0,.10)"/>
    <rect x="214" y="214" width="34" height="34" rx="6" fill="rgba(0,0,0,.10)"/>`,

  dress: (c1, c2) => `
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
    <rect width="400" height="400" fill="url(#g)"/>
    <circle cx="330" cy="330" r="90" fill="#ffffff" opacity=".12"/>
    <path d="M164 96 H236 L252 148 L230 176 L272 316 Q200 340 128 316 L170 176 L148 148 Z"
      fill="#ffffff" stroke="rgba(0,0,0,.15)" stroke-width="3"/>
    <path d="M164 96 Q200 132 236 96" fill="none" stroke="rgba(0,0,0,.25)" stroke-width="5"/>
    <path d="M172 232 Q200 246 228 232" fill="none" stroke="rgba(0,0,0,.18)" stroke-width="5"/>`,

  shorts: (c1, c2) => `
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
    <rect width="400" height="400" fill="url(#g)"/>
    <circle cx="70" cy="70" r="80" fill="#000000" opacity=".08"/>
    <path d="M144 120 H256 L266 268 H222 L200 196 L178 268 H134 Z"
      fill="#ffffff" stroke="rgba(0,0,0,.15)" stroke-width="3"/>
    <rect x="142" y="120" width="116" height="26" fill="rgba(0,0,0,.10)"/>`,

  jogger: (c1, c2) => `
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
    <rect width="400" height="400" fill="url(#g)"/>
    <circle cx="340" cy="70" r="76" fill="#ffffff" opacity=".12"/>
    <path d="M148 96 H252 L262 296 Q262 318 240 318 H224 L204 200 L184 318 H160 Q138 318 138 296 Z"
      fill="#ffffff" stroke="rgba(0,0,0,.15)" stroke-width="3"/>
    <rect x="146" y="96" width="108" height="24" fill="rgba(0,0,0,.10)"/>
    <path d="M148 262 H186 M214 262 H254" stroke="rgba(0,0,0,.2)" stroke-width="6"/>`,

  sneakers: (c1, c2) => `
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
    <rect width="400" height="400" fill="url(#g)"/>
    <circle cx="320" cy="80" r="80" fill="#ffffff" opacity=".12"/>
    <path d="M92 250 Q112 176 168 174 L206 176 Q232 210 288 224 Q320 232 320 262 Q320 288 286 288 H116 Q92 288 92 266 Z"
      fill="#ffffff" stroke="rgba(0,0,0,.15)" stroke-width="3"/>
    <path d="M96 274 H318" stroke="rgba(0,0,0,.25)" stroke-width="6"/>
    <path d="M150 196 L184 214 M164 182 L200 200 M180 178 L214 196" stroke="rgba(0,0,0,.25)" stroke-width="5" stroke-linecap="round"/>`,

  cap: (c1, c2) => `
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
    <rect width="400" height="400" fill="url(#g)"/>
    <circle cx="70" cy="330" r="80" fill="#ffffff" opacity=".12"/>
    <path d="M116 244 Q116 138 200 138 Q284 138 284 244 Z"
      fill="#ffffff" stroke="rgba(0,0,0,.15)" stroke-width="3"/>
    <path d="M284 244 Q338 248 338 268 Q338 282 292 282 H124 Q104 282 104 264 Q104 248 116 244 Z"
      fill="#f4f4f4" stroke="rgba(0,0,0,.15)" stroke-width="3"/>
    <path d="M200 140 V242" stroke="rgba(0,0,0,.2)" stroke-width="4"/>`,

  bag: (c1, c2) => `
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
    <rect width="400" height="400" fill="url(#g)"/>
    <circle cx="330" cy="320" r="90" fill="#000000" opacity=".08"/>
    <path d="M150 176 Q150 120 200 120 Q250 120 250 176" fill="none" stroke="#ffffff" stroke-width="14" stroke-linecap="round"/>
    <rect x="118" y="176" width="164" height="150" rx="20" fill="#ffffff" stroke="rgba(0,0,0,.15)" stroke-width="3"/>
    <path d="M148 232 H252" stroke="rgba(0,0,0,.18)" stroke-width="6"/>`,

  polo: (c1, c2) => `
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
    <rect width="400" height="400" fill="url(#g)"/>
    <circle cx="70" cy="70" r="86" fill="#ffffff" opacity=".10"/>
    <path d="M140 112 L174 92 L200 132 L226 92 L260 112 L302 146 L280 188 L258 172 L258 306 Q200 322 142 306 L142 172 L120 188 L98 146 Z"
      fill="#ffffff" stroke="rgba(0,0,0,.15)" stroke-width="3"/>
    <path d="M174 92 L200 132 L226 92" fill="none" stroke="rgba(0,0,0,.3)" stroke-width="5"/>
    <path d="M200 132 V196" stroke="rgba(0,0,0,.3)" stroke-width="5"/>
    <circle cx="200" cy="152" r="5" fill="rgba(0,0,0,.4)"/>
    <circle cx="200" cy="178" r="5" fill="rgba(0,0,0,.4)"/>`
};

function artURI(product) {
  if (product.image) return product.image;
  const fn = ART[product.art] || ART.tshirt;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">${fn(product.c1, product.c2)}</svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

/* ============================================================
   CATÁLOGO — copia, edita y reordena libremente
   cat: todo | hombre | mujer | ninos | accesorios
   ============================================================ */
const PRODUCTS = [
  { id: 1,  name: "Polo Classic Importado",      cat: "hombre",    art: "polo",     c1: "#1f2a44", c2: "#4b6cb7", price: 49,  old: 89,  badge: "Más vendido", sizes: ["S","M","L","XL"], rating: 4.9, reviews: 214 },
  { id: 2,  name: "Hoodie Street Premium",       cat: "hombre",    art: "hoodie",   c1: "#111318", c2: "#3a3f4b", price: 89,  old: 149, badge: "-40%",       sizes: ["M","L","XL"],   rating: 4.8, reviews: 167 },
  { id: 3,  name: "Jeans Slim Fit Original",     cat: "hombre",    art: "jeans",    c1: "#1e3a5f", c2: "#2f6fb0", price: 79,  old: 129, badge: "Oferta",     sizes: ["28","30","32","34","36"], rating: 4.7, reviews: 132 },
  { id: 4,  name: "Chaqueta Bomber Utility",     cat: "hombre",    art: "jacket",   c1: "#2b2b2f", c2: "#55565e", price: 129, old: 199, badge: "-35%",       sizes: ["M","L","XL"],   rating: 4.9, reviews: 98 },
  { id: 5,  name: "Camiseta Oversize Basic",     cat: "hombre",    art: "tshirt",   c1: "#e8e8ea", c2: "#b9bcc4", price: 39,  old: 69,  badge: "Nuevo",      sizes: ["S","M","L","XL"], rating: 4.8, reviews: 301 },
  { id: 6,  name: "Jogger Comfort Tech",         cat: "hombre",    art: "jogger",   c1: "#23252b", c2: "#4d5158", price: 69,  old: 109, badge: "Oferta",     sizes: ["S","M","L","XL"], rating: 4.7, reviews: 88 },

  { id: 7,  name: "Vestido Floral Elegance",     cat: "mujer",     art: "dress",    c1: "#ff5f7e", c2: "#ff9a8b", price: 99,  old: 169, badge: "Más vendido", sizes: ["S","M","L"],    rating: 4.9, reviews: 246 },
  { id: 8,  name: "Blusa Seda Importada",        cat: "mujer",     art: "tshirt",   c1: "#ffd3a5", c2: "#fd9a9a", price: 59,  old: 99,  badge: "-40%",       sizes: ["S","M","L"],    rating: 4.8, reviews: 175 },
  { id: 9,  name: "Hoodie Cozy Fit",             cat: "mujer",     art: "hoodie",   c1: "#f6a8c9", c2: "#c86dd7", price: 79,  old: 135, badge: "Oferta",     sizes: ["S","M","L"],    rating: 4.8, reviews: 143 },
  { id: 10, name: "Jean Mom Fit Premium",        cat: "mujer",     art: "jeans",    c1: "#4a6fa5", c2: "#7fa1d1", price: 85,  old: 139, badge: "Nuevo",      sizes: ["26","28","30","32"], rating: 4.7, reviews: 119 },
  { id: 11, name: "Short Denim Summer",          cat: "mujer",     art: "shorts",   c1: "#5b8def", c2: "#a5c2ff", price: 49,  old: 79,  badge: "Oferta",     sizes: ["S","M","L"],    rating: 4.6, reviews: 76 },
  { id: 12, name: "Chaqueta Denim Classic",      cat: "mujer",     art: "jacket",   c1: "#2e5c8a", c2: "#6fa8dc", price: 115, old: 189, badge: "-39%",       sizes: ["S","M","L"],    rating: 4.9, reviews: 104 },

  { id: 13, name: "Set Niño Trendy",             cat: "ninos",     art: "tshirt",   c1: "#ffb347", c2: "#ffcc33", price: 45,  old: 75,  badge: "Oferta",     sizes: ["4","6","8","10"], rating: 4.8, reviews: 92 },
  { id: 14, name: "Hoodie Kids Color",           cat: "ninos",     art: "hoodie",   c1: "#00c6a9", c2: "#1de9b6", price: 59,  old: 95,  badge: "Nuevo",      sizes: ["6","8","10","12"], rating: 4.7, reviews: 64 },
  { id: 15, name: "Jeans Kids Stretch",          cat: "ninos",     art: "jeans",    c1: "#5a7d9a", c2: "#94b3c8", price: 55,  old: 89,  badge: "Oferta",     sizes: ["6","8","10","12"], rating: 4.7, reviews: 58 },

  { id: 16, name: "Zapatillas Urban Run",        cat: "accesorios", art: "sneakers", c1: "#14161a", c2: "#3d434d", price: 139, old: 229, badge: "Top",       sizes: ["37","38","39","40","41","42"], rating: 4.9, reviews: 287 },
  { id: 17, name: "Gorra Snapback Importada",    cat: "accesorios", art: "cap",      c1: "#0f1115", c2: "#33363d", price: 39,  old: 65,  badge: "Oferta",     sizes: ["Único"],        rating: 4.8, reviews: 151 },
  { id: 18, name: "Mochila Urban Daily",         cat: "accesorios", art: "bag",      c1: "#2d3436", c2: "#636e72", price: 89,  old: 145, badge: "-38%",       sizes: ["Único"],        rating: 4.8, reviews: 121 },
  { id: 19, name: "Casual Shoes Minimal",        cat: "accesorios", art: "sneakers", c1: "#e6e6e6", c2: "#bdbdbd", price: 119, old: 189, badge: "Nuevo",      sizes: ["37","38","39","40","41"], rating: 4.7, reviews: 84 },
  { id: 20, name: "Polo Deportivo Dry",          cat: "hombre",    art: "polo",     c1: "#0b6e4f", c2: "#12a67a", price: 55,  old: 95,  badge: "Oferta",     sizes: ["S","M","L","XL"], rating: 4.6, reviews: 71 }
];

const CATEGORIES = [
  { id: "todo",        label: "Todo" },
  { id: "hombre",      label: "Hombre" },
  { id: "mujer",       label: "Mujer" },
  { id: "ninos",       label: "Niños" },
  { id: "accesorios",  label: "Accesorios" }
];

const TESTIMONIALS = [
  { name: "Miguel A.",   city: "Lima",    stars: 5, text: "Pedí 3 polos y me llegó en 24 horas. Pagué contra entrega y la tela es de excelente calidad. Ya vuelvo a comprar." },
  { name: "Carolina R.", city: "Arequipa", stars: 5, text: "Los vestidos son igualitos a las fotos. Me encantó que pueda pagar cuando recibo. Atención por WhatsApp súper rápida." },
  { name: "Jorge L.",    city: "Trujillo", stars: 5, text: "Compré el hoodie y los jeans. La talla me quedó perfecta porque me asesoraron por el chat. 100% recomendado." },
  { name: "Stephanie P.",city: "Cusco",    stars: 5, text: "El envío llegó antes de lo previsto y el repartidor me esperó para pagar. Todo fácil y sin sorpresas." },
  { name: "Diego M.",    city: "Chiclayo", stars: 5, text: "La mejor relación calidad-precio que encontré. Las zapatillas son originales y súper cómodas." },
  { name: "Rocío T.",    city: "Piura",    stars: 5, text: "Fui al local y me atendieron de maravilla. Me cambié la talla al día siguiente sin problema." }
];

const FAQS = [
  { q: "¿Cómo funciona el pago contra entrega?", a: "Solo envías tu pedido por WhatsApp, lo recibes en tu puerta, revisas el producto y pagas en efectivo al repartidor. No necesitas tarjeta ni transferencia previa." },
  { q: "¿Cuánto demora mi pedido?", a: "Despachamos el mismo día si compras antes de las 5:00 p.m. El envío tarda entre 24 y 48 horas dependiendo de tu ciudad." },
  { q: "¿Cuánto cuesta el envío?", a: "El envío cuesta " + CONFIG.shipping.price + " a todo el país. Es GRATIS en compras mayores a " + CONFIG.currency + " " + CONFIG.shipping.freeOver + "." },
  { q: "¿Puedo cambiar la talla o el producto?", a: "Sí. Tienes 7 días para cambios sin costo. Solo escríbenos por WhatsApp y coordinamos la recolección." },
  { q: "¿Los productos son originales?", a: "Sí, trabajamos con importadores autorizados. Garantizamos calidad original en toda la colección." },
  { q: "¿Tienen local físico?", a: "Sí, te esperamos en nuestro local. Puedes ver la dirección y el horario en la sección de nuestra tienda." }
];
