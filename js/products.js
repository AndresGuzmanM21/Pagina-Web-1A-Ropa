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
  { id: 1, name: "Camisa Deportiva Jordan 23 Verde", cat: "camisas", image: "assets/img/Camisa Deportiva Jordan 23 Verde.jpeg", badge: "Más vendido", sizes: ["S","M","L","XL"], rating: 4.7, reviews: 97 },
  { id: 2, name: "Camisa Deportiva Azul Marino", cat: "camisas", image: "assets/img/Camisa Deportiva Azul Marino.jpeg", badge: "", sizes: ["M","L","XL","XXL"], rating: 4.8, reviews: 134 },
  { id: 3, name: "Camisa Deportiva Azul Royal", cat: "camisas", image: "assets/img/Camisa Deportiva Azul Royal.jpeg", badge: "Nuevo", sizes: ["S","M","L","XL","XXL"], rating: 4.9, reviews: 171 },
  { id: 4, name: "Camisa Deportiva Jordan 23 Roja", cat: "camisas", image: "assets/img/Camisa Deportiva Jordan 23 Roja.jpeg", badge: "", sizes: ["S","M","L","XL"], rating: 5, reviews: 208 },
  { id: 5, name: "Camisa Supreme Blanca", cat: "camisas", image: "assets/img/Camisa Supreme Blanca.jpeg", badge: "", sizes: ["M","L","XL","XXL"], rating: 4.6, reviews: 245 },
  { id: 6, name: "Camisa Supreme Original", cat: "camisas", image: "assets/img/Camisa Supreme Original.jpeg", badge: "", sizes: ["S","M","L","XL","XXL"], rating: 4.7, reviews: 282 },
  { id: 7, name: "Camisa Deportiva Jordan Verde", cat: "camisas", image: "assets/img/Camisa Deportiva Jordan Verde.jpeg", badge: "", sizes: ["S","M","L","XL"], rating: 4.8, reviews: 319 },
  { id: 8, name: "Camisa Casual Clásica", cat: "camisas", image: "assets/img/Camisa Casual Clasica.jpeg", badge: "Más vendido", sizes: ["M","L","XL","XXL"], rating: 4.9, reviews: 96 },
  /* ---------------- CHAQUETAS ---------------- */
  { id: 9, name: "Chaqueta Adidas Tricolor", cat: "chaquetas", image: "assets/img/Chaqueta Adidas Tricolor.jpeg", badge: "", sizes: ["S","M","L","XL","XXL"], rating: 5, reviews: 133 },
  { id: 10, name: "Chaqueta Adidas Blanca Clásica", cat: "chaquetas", image: "assets/img/Chaqueta Adidas Blanca Clasica.jpeg", badge: "Nuevo", sizes: ["S","M","L","XL"], rating: 4.6, reviews: 170 },
  { id: 11, name: "Chaqueta Adidas Blanca Esencial", cat: "chaquetas", image: "assets/img/Chaqueta Adidas Blanca Esencial.jpeg", badge: "", sizes: ["M","L","XL","XXL"], rating: 4.7, reviews: 207 },
  { id: 12, name: "Chaqueta Adidas Multicolor", cat: "chaquetas", image: "assets/img/Chaqueta Adidas Multicolor.jpeg", badge: "", sizes: ["S","M","L","XL","XXL"], rating: 4.8, reviews: 244 },
  { id: 13, name: "Chaqueta Adidas Negra Original", cat: "chaquetas", image: "assets/img/Chaqueta Adidas Negra Original.jpeg", badge: "", sizes: ["S","M","L","XL"], rating: 4.9, reviews: 281 },
  { id: 14, name: "Chaqueta Adidas Negra Deportiva", cat: "chaquetas", image: "assets/img/Chaqueta Adidas Negra Deportiva.jpeg", badge: "", sizes: ["M","L","XL","XXL"], rating: 5, reviews: 318 },
  { id: 15, name: "Chaqueta Adidas Roja Deportiva", cat: "chaquetas", image: "assets/img/Chaqueta Adidas Roja Deportiva.jpeg", badge: "Más vendido", sizes: ["S","M","L","XL","XXL"], rating: 4.6, reviews: 95 },
  { id: 16, name: "Chaqueta de Algodón Negra Premium", cat: "chaquetas", image: "assets/img/Chaqueta de Algodon Negra Premium.jpeg", badge: "", sizes: ["S","M","L","XL"], rating: 4.7, reviews: 132 },
  { id: 17, name: "Chaqueta Adidas Azul y Roja Retro", cat: "chaquetas", image: "assets/img/Chaqueta Adidas Azul y Roja Retro.jpeg", badge: "Nuevo", sizes: ["M","L","XL","XXL"], rating: 4.8, reviews: 169 },
  { id: 18, name: "Chaqueta Azul Casual", cat: "chaquetas", image: "assets/img/Chaqueta Azul Casual.jpeg", badge: "", sizes: ["S","M","L","XL","XXL"], rating: 4.9, reviews: 206 },
  { id: 19, name: "Chaqueta Beige de Algodón", cat: "chaquetas", image: "assets/img/Chaqueta Beige de Algodon.jpeg", badge: "", sizes: ["S","M","L","XL"], rating: 5, reviews: 243 },
  { id: 20, name: "Chaqueta Beige Clásica", cat: "chaquetas", image: "assets/img/Chaqueta Beige Clasica.jpeg", badge: "", sizes: ["M","L","XL","XXL"], rating: 4.6, reviews: 280 },
  { id: 21, name: "Chaqueta Bicolor Blanca y Negra", cat: "chaquetas", image: "assets/img/Chaqueta Bicolor Blanca y Negra.jpeg", badge: "", sizes: ["S","M","L","XL","XXL"], rating: 4.7, reviews: 317 },
  { id: 22, name: "Chaqueta con Cierre Total", cat: "chaquetas", image: "assets/img/Chaqueta con Cierre Total.jpeg", badge: "Más vendido", sizes: ["S","M","L","XL"], rating: 4.8, reviews: 94 },
  { id: 23, name: "Chaqueta Ducati Blanca", cat: "chaquetas", image: "assets/img/Chaqueta Ducati Blanca.jpeg", badge: "", sizes: ["M","L","XL","XXL"], rating: 4.9, reviews: 131 },
  { id: 24, name: "Chaqueta Ducati Negra", cat: "chaquetas", image: "assets/img/Chaqueta Ducati Negra.jpeg", badge: "Nuevo", sizes: ["S","M","L","XL","XXL"], rating: 5, reviews: 168 },
  { id: 25, name: "Chaqueta Ducati Racing", cat: "chaquetas", image: "assets/img/Chaqueta Ducati Racing.jpeg", badge: "", sizes: ["S","M","L","XL"], rating: 4.6, reviews: 205 },
  { id: 26, name: "Chaqueta Gris Urbana", cat: "chaquetas", image: "assets/img/Chaqueta Gris Urbana.jpeg", badge: "", sizes: ["M","L","XL","XXL"], rating: 4.7, reviews: 242 },
  { id: 27, name: "Chaqueta Mercedes Benz Premium", cat: "chaquetas", image: "assets/img/Chaqueta Mercedes Benz Premium.jpeg", badge: "", sizes: ["S","M","L","XL","XXL"], rating: 4.8, reviews: 279 },
  { id: 28, name: "Chaqueta Negra Urbana", cat: "chaquetas", image: "assets/img/Chaqueta Negra Urbana.jpeg", badge: "", sizes: ["S","M","L","XL"], rating: 4.9, reviews: 316 },
  { id: 29, name: "Chaqueta Negra de Algodón", cat: "chaquetas", image: "assets/img/Chaqueta Negra de Algodon.jpeg", badge: "Más vendido", sizes: ["M","L","XL","XXL"], rating: 5, reviews: 93 },
  { id: 30, name: "Chaqueta Negra Clásica", cat: "chaquetas", image: "assets/img/Chaqueta Negra Clasica.jpeg", badge: "", sizes: ["S","M","L","XL","XXL"], rating: 4.6, reviews: 130 },
  { id: 31, name: "Chaqueta The North Face", cat: "chaquetas", image: "assets/img/Chaqueta The North Face.jpeg", badge: "Nuevo", sizes: ["S","M","L","XL"], rating: 4.7, reviews: 167 },
  { id: 32, name: "Chaqueta Porsche Racing", cat: "chaquetas", image: "assets/img/Chaqueta Porsche Racing.jpeg", badge: "", sizes: ["M","L","XL","XXL"], rating: 4.8, reviews: 204 },
  { id: 33, name: "Chaqueta Supreme Negra", cat: "chaquetas", image: "assets/img/Chaqueta Supreme Negra.jpeg", badge: "", sizes: ["S","M","L","XL","XXL"], rating: 4.9, reviews: 241 },
  /* ---------------- SUDADERAS ---------------- */
  { id: 34, name: "Buzo Deportivo Gris Oversize", cat: "sudaderas", image: "assets/img/Buzo Deportivo Gris Oversize.jpeg", badge: "", sizes: ["S","M","L","XL"], rating: 5, reviews: 278 },
  { id: 35, name: "Buzo Deportivo Gris Clásico", cat: "sudaderas", image: "assets/img/Buzo Deportivo Gris Clasico.jpeg", badge: "", sizes: ["M","L","XL","XXL"], rating: 4.6, reviews: 315 },
  { id: 36, name: "Buzo Deportivo Rojo", cat: "sudaderas", image: "assets/img/Buzo Deportivo Rojo.jpeg", badge: "Más vendido", sizes: ["S","M","L","XL","XXL"], rating: 4.7, reviews: 92 },
  { id: 37, name: "Buzo Deportivo Verde", cat: "sudaderas", image: "assets/img/Buzo Deportivo Verde.jpeg", badge: "", sizes: ["S","M","L","XL"], rating: 4.8, reviews: 129 },
  { id: 38, name: "Sudadera Supreme Azul", cat: "sudaderas", image: "assets/img/Sudadera Supreme Azul.jpeg", badge: "Nuevo", sizes: ["M","L","XL","XXL"], rating: 4.9, reviews: 166 },
  { id: 39, name: "Conjunto Sudadera Supreme", cat: "sudaderas", image: "assets/img/Conjunto Sudadera Supreme.jpeg", badge: "", sizes: ["S","M","L","XL","XXL"], rating: 5, reviews: 203 },
  { id: 40, name: "Sudadera Nike Azul", cat: "sudaderas", image: "assets/img/Sudadera Nike Azul.jpeg", badge: "", sizes: ["S","M","L","XL"], rating: 4.6, reviews: 240 },
  { id: 41, name: "Sudadera Nike Roja", cat: "sudaderas", image: "assets/img/Sudadera Nike Roja.jpeg", badge: "", sizes: ["M","L","XL","XXL"], rating: 4.7, reviews: 277 },
  { id: 42, name: "Sudadera Supreme Roja Clásica", cat: "sudaderas", image: "assets/img/Sudadera Supreme Roja Clasica.jpeg", badge: "", sizes: ["S","M","L","XL","XXL"], rating: 4.8, reviews: 314 },
  { id: 43, name: "Sudadera Supreme Roja Oversize", cat: "sudaderas", image: "assets/img/Sudadera Supreme Roja Oversize.jpeg", badge: "Más vendido", sizes: ["S","M","L","XL"], rating: 4.9, reviews: 91 }
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
