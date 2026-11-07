/* Dos Serpientes demo data, 2026-11-07.
 REAL: products, names, images, copy and prices from https://dosserpientes.com (Shopify /products.json; the store runs on Flaviar Checkout).
 Network retailers: active, in-stock (0 < stock < 9000) LiquidCommerce retailer variants matched on product name, 2026-11-07.
 Gopuff ZIPs: delivery ZIPs of Gopuff locations carrying the product in the gopuff_feed availability snapshot, 2026-11-07.
 NOT REAL: no order is placed; shipping ($14.99), Gopuff fee ($4.99) and 8% tax are illustrative. */
window.DEMO = {
 "key": "dosserpientes",
 "brand": "Dos Serpientes",
 "storeName": "Dos Serpientes",
 "orderPrefix": "DOS",
 "catalog": {
  "gift-box-with-reposado-anejo-two-pack": {
   "name": "Gift Box with Reposado & Añejo (Two Pack)",
   "short": "Gift Box with Reposado & Añejo (Two Pack)",
   "size": "750ML",
   "tag": "tequila",
   "price": 20000,
   "image": "assets/p-gift-box-with-reposado-anejo-two-pack.png",
   "gallery": [
    "assets/p-gift-box-with-reposado-anejo-two-pack.png"
   ],
   "lead": "",
   "specs": "",
   "desc": [
    "M ade from the highest quality Agave , our ultra-smooth Reposado is aged in white oak barrels for three months while o ur Añejo is aged in bourbon white oak barrels for three years.",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "gift-box-of-reposado-two-pack": {
   "name": "Gift Box of Reposado (Two Pack)",
   "short": "Gift Box of Reposado (Two Pack)",
   "size": "750ML",
   "tag": "tequila",
   "price": 15000,
   "image": "assets/p-gift-box-of-reposado-two-pack.png",
   "gallery": [
    "assets/p-gift-box-of-reposado-two-pack.png"
   ],
   "lead": "",
   "specs": "",
   "desc": [
    "M ade from fully matured Agave , our ultra-smooth Reposado is aged in white oak barrels for three months.",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "gift-box-of-anejo-two-pack": {
   "name": "Gift Box of Añejo (Two Pack)",
   "short": "Gift Box of Añejo (Two Pack)",
   "size": "750ML",
   "tag": "tequila",
   "price": 25000,
   "image": "assets/p-gift-box-of-anejo-two-pack.png",
   "gallery": [
    "assets/p-gift-box-of-anejo-two-pack.png"
   ],
   "lead": "",
   "specs": "",
   "desc": [
    "Our Añejo is created from the highest quality Agave and aged in Bourbon white oak barrels for three years.",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "case-reposado-anejo": {
   "name": "Case of Reposado & Añejo",
   "short": "Case of Reposado & Añejo",
   "size": "750ML",
   "tag": "tequila",
   "price": 50000,
   "image": "assets/p-case-reposado-anejo.png",
   "gallery": [
    "assets/p-case-reposado-anejo.png"
   ],
   "lead": "",
   "specs": "",
   "desc": [
    "Three bottles each of our Reposado and Añejo. M ade from the highest quality Agave , our ultra-smooth Reposado is aged in white oak barrels for three months while o ur Añejo is aged in bourbon white oak barrels for three years.",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "case-of-anejo": {
   "name": "Case of Añejo",
   "short": "Case of Añejo",
   "size": "750ML",
   "tag": "tequila",
   "price": 65000,
   "image": "assets/p-case-of-anejo.png",
   "gallery": [
    "assets/p-case-of-anejo.png"
   ],
   "lead": "",
   "specs": "",
   "desc": [
    "Our Añejo is created from the highest quality Agave and aged in Bourbon white oak barrels for three years.",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "two-pack-of-reposado": {
   "name": "Two pack of Reposado",
   "short": "Two pack of Reposado",
   "size": "750ML",
   "tag": "tequila",
   "price": 12500,
   "image": "assets/p-two-pack-of-reposado.png",
   "gallery": [
    "assets/p-two-pack-of-reposado.png"
   ],
   "lead": "",
   "specs": "",
   "desc": [
    "M ade from fully matured Agave , our ultra-smooth Reposado is aged in white oak barrels for three months.",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "two-pack-of-anejo": {
   "name": "Two pack of Añejo",
   "short": "Two pack of Añejo",
   "size": "750ML",
   "tag": "tequila",
   "price": 23500,
   "image": "assets/p-two-pack-of-anejo.png",
   "gallery": [
    "assets/p-two-pack-of-anejo.png"
   ],
   "lead": "",
   "specs": "",
   "desc": [
    "Our Añejo is created from the highest quality Agave and aged in Bourbon white oak barrels for three years.",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "reposado": {
   "name": "Reposado",
   "short": "Reposado",
   "size": "750ML",
   "tag": "tequila",
   "price": 6900,
   "image": "assets/p-reposado.png",
   "gallery": [
    "assets/p-reposado.png"
   ],
   "lead": "",
   "specs": "",
   "desc": [
    "M ade from fully matured Agave , our ultra-smooth Reposado is aged in white oak barrels for three months.",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  }
 },
 "order": [
  "gift-box-with-reposado-anejo-two-pack",
  "gift-box-of-reposado-two-pack",
  "gift-box-of-anejo-two-pack",
  "case-reposado-anejo",
  "case-of-anejo",
  "two-pack-of-reposado",
  "two-pack-of-anejo",
  "reposado"
 ],
 "defaultHandle": "gift-box-with-reposado-anejo-two-pack",
 "retailers": [],
 "realHandles": [],
 "gopuff": null,
 "noShip": [
  "AK",
  "HI"
 ],
 "rates": {
  "shipping": 1499,
  "freeOver": 0,
  "gopuff": 499
 },
 "taxRate": 0.08,
 "expressAddress": [
  "233 S Wacker Dr",
  "Chicago",
  "60606"
 ],
 "fulfilIcon": "assets/logo.png",
 "rbNote": "",
 "text": {
  "fulfilReal": "In stock at licensed retailers in our network today. Enter your ZIP at checkout for delivery or shipping.",
  "fulfilLaunch": "Ships from a licensed retailer in your state. Rates show at checkout once you enter your address.",
  "cardReal": "In stock at network retailers",
  "cardLaunch": "Ships from licensed retailers",
  "soldOut": "Sold out.",
  "noShip": "We are not shipping to {state} yet.",
  "launchNote": "In the demo, no network retailer stocks this bottle yet. Licensed retailers are connected during onboarding, which takes about one week."
 }
};
