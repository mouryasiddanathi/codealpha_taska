// ============================================================
//  SUPABASE CONFIG  —  Replace with your project credentials
// ============================================================
const SUPABASE_URL = "https://ciynlwxztxxbgnriwktx.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpeW5sd3h6dHh4Ymducml3a3R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxNTQxMzMsImV4cCI6MjA4ODczMDEzM30.EzdlIMv6Jnu7EJX9yWw3wKC280fQJI54H_iOKFnk3mA";

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const products = [
  { id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6", image: "images/products/athletic-cotton-socks-6-pairs.jpg", name: "Black and Gray Athletic Cotton Socks - 6 Pairs", rating: { stars: 4.5, count: 9.6 }, pricePaise: 10000, keywords: ["socks", "athletic", "clothing"] },
  { id: "15b6fc6f-327a-4ec4-896f-486349e85a3d", image: "images/products/intermediate-composite-basketball.jpg", name: "Intermediate Size Basketball", rating: { stars: 4, count: 9.2 }, pricePaise: 200000, keywords: ["basketball", "sports", "ball"] },
  { id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e", image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg", name: "Adults Plain Cotton T-Shirt - 2 Pack", rating: { stars: 4.5, count: 9.6 }, pricePaise: 79900, keywords: ["tshirt", "clothing", "cotton"] },
  { id: "54e0eccd-8f36-462b-b68a-8182611d9add", image: "images/products/6-piece-white-dinner-plate-set.jpg", name: "6-piece-white-dinner-plate-set", rating: { stars: 4, count: 9.0 }, pricePaise: 79000, keywords: ["plates", "glass ware", "plates combo"] },
  { id: "5968897c-4d27-4872-89f6-5bcb052746d7", image: "images/products/backpack.jpg", name: "backpack (SKY Bags)", rating: { stars: 4.5, count: 9.8 }, pricePaise: 599000, keywords: ["bags", "Sky bags", "backpack"] },
  { id: "b86ae3ff-f612-4832-b62c-b20d2ed0c94e", image: "images/products/bathroom-rug.jpg", name: "bathroom-rug", rating: { stars: 4, count: 9.0 }, pricePaise: 400000, keywords: ["bath tub", "glass bathroom tub", "bathroom accesaries"] },
  { id: "aaa2406c-b5e6-4360-a153-23d6c4a07e37", image: "images/products/black-2-slot-toaster.jpg", name: "Bread toaster", rating: { stars: 3.5, count: 7.0 }, pricePaise: 369000, keywords: ["toaster", "bread toaster", "kitchen accessories"] },
  { id: "a42e22c2-7896-4a78-9fdc-8bff8d3bf7d7", image: "images/products/blackout-curtains-black.jpg", name: "blackout-curtains-black", rating: { stars: 4.5, count: 9.8 }, pricePaise: 12099, keywords: ["curtains", "window curtains"] },
  { id: "a3f9c1e2-7b4d-4c8a-9f21-6e3d5b8a1c90", image: "images/products/coffeemaker-with-glass-carafe-black.jpg", name: "coffemaker", rating: { stars: 4, count: 9.5 }, pricePaise: 500000, keywords: ["coffemaker", "kitchen accessories", "blender"] },
  { id: "9f1c2a7e-3d4b-4b8f-9c21-7e6a5d2c8f10", image: "images/products/cotton-bath-towels-teal.webp", name: "Cotton-bath-towel", rating: { stars: 4, count: 9.3 }, pricePaise: 50000, keywords: ["towel", "cotton towel", "bath towel"] },
  { id: "c3a7e9b2-6f1d-4a5c-8b32-1d7e9f4a2c63", image: "images/products/countertop-blender-64-oz.jpg", name: "countertop-blender", rating: { stars: 3.5, count: 8.5 }, pricePaise: 389999, keywords: ["blender", "jucier"] },
  { id: "e8b4c1d9-2a7f-4c6e-9d10-5f3a8b7c2e41", image: "images/products/duvet-cover-set-blue-twin.jpg", name: "blue bed sheet", rating: { stars: 4.5, count: 9.8 }, pricePaise: 50326, keywords: ["bed sheet", "bed cover"] },
  { id: "a6d9f3c2-8b1e-4f7a-9c54-2e7d1b8a6f30", image: "images/products/electric-glass-and-steel-hot-water-kettle.webp", name: "electric-glass-and-steel-hot-water-kettle", rating: { stars: 4, count: 9.0 }, pricePaise: 200000, keywords: ["electric glass", "steel hot water kettle", "kettle"] },
  { id: "b1e7c4a9-3d2f-4a8c-8f21-6c9d5e2a7b48", image: "images/products/floral-mixing-bowl-set.jpg", name: "floral-mixing-bowl-set", rating: { stars: 3.0, count: 8.0 }, pricePaise: 19999, keywords: ["mixing bowel", "bowels"] },
  { id: "d4f8a2c1-7b9e-4e6a-9a32-1f5c8d7b2e60", image: "images/products/men-athletic-shoes-green.jpg", name: "men-athletic-shoes-green", rating: { stars: 2.0, count: 7.5 }, pricePaise: 150000, keywords: ["shoes", "men's wear", "shoes for men"] },
  { id: "f2c9e1a7-6d4b-4b5f-8c73-9a1e6d3b7c52", image: "images/products/men-golf-polo-t-shirt-blue.jpg", name: "polo-t-shirt-blue", rating: { stars: 4.0, count: 8.0 }, pricePaise: 50000, keywords: ["t-shirt", "mens-wear", "cotton"] },
  { id: "7e3a9c1d-5b2f-4d8e-9f14-2c6a7b8d1e39", image: "images/products/variations/liquid-laundry-detergent-plain.jpg", name: "detergent", rating: { stars: 3.5, count: 8.0 }, pricePaise: 50000, keywords: ["detergent", "laundary"] },
  { id: "2c8f1e7a-9d3b-4a6c-8e21-5b7d9a4c6f10", image: "images/products/umbrella.jpg", name: "umbrella", rating: { stars: 4.0, count: 9.0 }, pricePaise: 15000, keywords: ["umbrella"] },
  { id: "5a7d2c9e-1f8b-4e3a-9c62-7d1e5b8a3f44", image: "images/products/variations/men-chino-pants-beige.jpg", name: "men-chino-pants", rating: { stars: 4.0, count: 9.8 }, pricePaise: 60000, keywords: ["pants", "men's wear", "chinos"] },
  { id: "8b2e7c4a-6d1f-4a9e-8f35-2a7c9d1b6e53", image: "images/products/variations/Iphone14.jpg", name: "Iphone14", rating: { stars: 5.0, count: 10 }, pricePaise: 15000000, keywords: ["phones", "Iphone", "mobiles"] },
  { id: "1d9a6f3c-7b4e-4c8a-9e20-6f2b7d5a8c31", image: "images/products/variations/oneplus.jpg", name: "One plus 11R 5G", rating: { stars: 5.0, count: 9.8 }, pricePaise: 5000000, keywords: ["mobiles", "phones", "one plus"] },
  { id: "3f7c1a9e-8d2b-4e6a-8c41-9b5d2a7e6f80", image: "images/products/variations/round-sunglasses-black.jpg", name: "round-sunglasses-black", rating: { stars: 4.5, count: 9.5 }, pricePaise: 45000, keywords: ["sunglasses", "spectacles"] },
  { id: "6a1e8c2f-4d9b-4b7c-9a53-1c8d7e2f5b62", image: "images/products/variations/plain-hooded-fleece-sweatshirt-yellow.jpg", name: "hooded sweatshirt", rating: { stars: 4.5, count: 9.0 }, pricePaise: 35000, keywords: ["hoode", "sweat shirt", "shirt"] },
  { id: "4c9b2a7e-1f6d-4a8e-8b24-7d3a9c1e5f77", image: "images/products/variations/men-slim-fit-summer-shorts-gray.jpg", name: "men-slim-fit-summer-shorts-gray", rating: { stars: 3.5, count: 8.5 }, pricePaise: 39900, keywords: ["shorts", "pants"] }
];

// ============================================================
//  STATE
// ============================================================
let currentUser = null;   // Supabase user object
let cart = [];            // [{ productId, quantity, deliveryOptionId }]
let currentTrackingItem = null;

const deliveryOptions = [
  { id: "1", label: "FREE Shipping",  pricePaise: 0,   daysOffset: 7 },
  { id: "2", label: "₹4.99 Shipping", pricePaise: 499, daysOffset: 3 },
  { id: "3", label: "₹9.99 Shipping", pricePaise: 999, daysOffset: 1 }
];

// ============================================================
//  HELPERS
// ============================================================
function getProduct(productId) { return products.find(p => p.id === productId); }

function formatPrice(paise) {
  const rupees = Math.floor(paise / 100);
  const rem    = paise % 100;
  return `₹${rupees}.${String(rem).padStart(2, "0")}`;
}

function getStarHTML(stars) {
  const r = Math.round(stars * 2) / 2;
  return `<div style="color:rgb(255,164,28); font-size:18px;">${'★'.repeat(Math.floor(r))}${r % 1 !== 0 ? '½' : ''}${'☆'.repeat(5 - Math.ceil(r))}</div>`;
}

function getFutureDate(daysOffset) {
  const date = new Date();
  date.setDate(date.getDate() + daysOffset);
  return date.toLocaleDateString("en-IN", { weekday: "long", month: "long", day: "numeric" });
}

function calculateCartQuantity() { return cart.reduce((t, i) => t + i.quantity, 0); }

function updateCartBadge() {
  const total = calculateCartQuantity();
  document.querySelectorAll(".cart-quantity, .js-items-count-header").forEach(el => el.textContent = total);
}

// ============================================================
//  AUTH MODAL
// ============================================================
function showAuthModal() { document.getElementById("auth-modal").style.display = "flex"; }
function hideAuthModal() { document.getElementById("auth-modal").style.display = "none"; }

function initAuthModal() {
  // Tab switching
  document.querySelectorAll(".auth-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".auth-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById("auth-login").style.display  = tab.dataset.tab === "login"  ? "block" : "none";
      document.getElementById("auth-signup").style.display = tab.dataset.tab === "signup" ? "block" : "none";
    });
  });

  // Login
  document.getElementById("btn-login").addEventListener("click", async () => {
    const email    = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;
    const errEl    = document.getElementById("login-error");
    errEl.textContent = "";

    const { data, error } = await db.auth.signInWithPassword({ email, password });
    if (error) { errEl.textContent = error.message; return; }

    currentUser = data.user;
    await onLogin();
  });

  // Sign up
  document.getElementById("btn-signup").addEventListener("click", async () => {
    const name     = document.getElementById("signup-name").value.trim();
    const email    = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value;
    const errEl    = document.getElementById("signup-error");
    const sucEl    = document.getElementById("signup-success");
    errEl.textContent = ""; sucEl.textContent = "";

    const { data, error } = await db.auth.signUp({
      email, password,
      options: { data: { full_name: name } }
    });

    if (error) { errEl.textContent = error.message; return; }

    // Upsert profile row
    if (data.user) {
      await db.from("profiles").upsert({ id: data.user.id, full_name: name, email });
    }

    sucEl.textContent = "Account created! Check your email to confirm, then log in.";
  });
}

async function onLogin() {
  hideAuthModal();
  updateUserUI();
  await loadCartFromDB();
  updateCartBadge();
  navigateTo("home");
}

function updateUserUI() {
  const greeting = document.querySelector(".js-user-greeting");
  const logoutBtn = document.querySelector(".js-logout-btn");
  if (!currentUser) { greeting.textContent = ""; logoutBtn.style.display = "none"; return; }
  const name = currentUser.user_metadata?.full_name || currentUser.email;
  greeting.textContent = `Hi, ${name.split(" ")[0]}`;
  logoutBtn.style.display = "inline-block";
}

// ============================================================
//  CART  —  Supabase  (table: cart_items)
//  Columns: id (uuid pk), user_id, product_id, quantity, delivery_option_id
// ============================================================
async function loadCartFromDB() {
  if (!currentUser) { cart = []; return; }
  const { data, error } = await db
    .from("cart_items")
    .select("*")
    .eq("user_id", currentUser.id);

  if (error) { console.error("Load cart error:", error); return; }
  cart = (data || []).map(row => ({
    productId:        row.product_id,
    quantity:         row.quantity,
    deliveryOptionId: row.delivery_option_id || "1"
  }));
}

async function syncCartItemToDB(productId) {
  if (!currentUser) return;
  const item = cart.find(i => i.productId === productId);
  if (!item) {
    // Deleted — remove from DB
    await db.from("cart_items")
      .delete()
      .eq("user_id", currentUser.id)
      .eq("product_id", productId);
  } else {
    await db.from("cart_items").upsert({
      user_id:          currentUser.id,
      product_id:       productId,
      quantity:         item.quantity,
      delivery_option_id: item.deliveryOptionId
    }, { onConflict: "user_id,product_id" });
  }
}

async function addToCart(productId, quantity) {
  const existing = cart.find(i => i.productId === productId);
  if (existing) { existing.quantity += quantity; }
  else           { cart.push({ productId, quantity, deliveryOptionId: "1" }); }
  await syncCartItemToDB(productId);
}

async function removeFromCart(productId) {
  cart = cart.filter(i => i.productId !== productId);
  await syncCartItemToDB(productId);
}

async function updateQuantity(productId, newQuantity) {
  const item = cart.find(i => i.productId === productId);
  if (item) { item.quantity = newQuantity; await syncCartItemToDB(productId); }
}

async function updateDeliveryOption(productId, deliveryOptionId) {
  const item = cart.find(i => i.productId === productId);
  if (item) { item.deliveryOptionId = deliveryOptionId; await syncCartItemToDB(productId); }
}

async function clearCart() {
  cart = [];
  if (!currentUser) return;
  await db.from("cart_items").delete().eq("user_id", currentUser.id);
}

// ============================================================
//  ORDERS  —  Supabase  (tables: orders + order_items)
//  orders:      id, user_id, placed_date, total_paise, status
//  order_items: id, order_id, product_id, product_name, product_image,
//               quantity, price_paise, delivery_date, status
// ============================================================
async function placeOrder() {
  if (!currentUser) { alert("Please log in to place an order."); showAuthModal(); return; }
  if (cart.length === 0) { alert("Your cart is empty."); return; }

  // Calculate total
  let totalPaise = 0;
  const itemRows = cart.map(cartItem => {
    const product    = getProduct(cartItem.productId);
    const delivOpt   = deliveryOptions.find(o => o.id === cartItem.deliveryOptionId) || deliveryOptions[0];
    const itemTotal  = (product ? product.pricePaise : 0) * cartItem.quantity;
    totalPaise      += itemTotal + delivOpt.pricePaise;
    return {
      product_id:    cartItem.productId,
      product_name:  product ? product.name  : "Unknown Product",
      product_image: product ? product.image : "",
      quantity:      cartItem.quantity,
      price_paise:   product ? product.pricePaise : 0,
      delivery_date: getFutureDate(delivOpt.daysOffset),
      status:        "Preparing"
    };
  });

  // Insert order
  const { data: orderData, error: orderErr } = await db
    .from("orders")
    .insert({
      user_id:     currentUser.id,
      placed_date: new Date().toISOString(),
      total_paise: totalPaise,
      status:      "active"
    })
    .select()
    .single();

  if (orderErr) { console.error("Order insert error:", orderErr); alert("Could not place order. Try again."); return; }

  // Insert order items
  const orderId = orderData.id;
  const itemsWithOrderId = itemRows.map(row => ({ ...row, order_id: orderId }));
  const { error: itemsErr } = await db.from("order_items").insert(itemsWithOrderId);
  if (itemsErr) { console.error("Order items error:", itemsErr); }

  await clearCart();
  updateCartBadge();
  navigateTo("orders");
}

async function loadOrders() {
  if (!currentUser) return [];
  const { data: ordersData, error: ordersErr } = await db
    .from("orders")
    .select("*, order_items(*)")
    .eq("user_id", currentUser.id)
    .order("placed_date", { ascending: false });

  if (ordersErr) { console.error("Load orders error:", ordersErr); return []; }
  return ordersData || [];
}

// ============================================================
//  NAVIGATION
// ============================================================
function navigateTo(pageId) {
  document.querySelectorAll(".page-view").forEach(p => p.style.display = "none");
  document.querySelector(".js-standard-header").style.display = "none";
  document.querySelector(".js-checkout-header").style.display = "none";

  if (pageId === "checkout") { document.querySelector(".js-checkout-header").style.display = "flex"; }
  else                       { document.querySelector(".js-standard-header").style.display = "flex"; }

  document.getElementById("page-" + pageId).style.display = "block";

  if      (pageId === "home")     { renderProducts(products); }
  else if (pageId === "checkout") { renderOrderSummary(); }
  else if (pageId === "orders")   { renderOrders(); }
  else if (pageId === "tracking") { renderTrackingPage(); }

  updateCartBadge();
  window.scrollTo(0, 0);
}

// ============================================================
//  RENDER: PRODUCTS
// ============================================================
const addedMessageTimers = {};

function renderProducts(productList) {
  const grid = document.querySelector(".js-products-grid");
  if (!grid) return;
  let html = "";
  productList.forEach(product => {
    html += `
      <div class="product-container">
        <div class="product-image-container">
          <img class="product-image" src="${product.image}" alt="${product.name}"
            onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\'><rect width=\\'100\\' height=\\'100\\' fill=\\'%23eee\\'/><text x=\\'50\\' y=\\'50\\' font-size=\\'12\\' text-anchor=\\'middle\\' fill=\\'%23999\\'>No Image</text></svg>'">
        </div>
        <div class="product-name limit-text-to-2-lines">${product.name}</div>
        <div class="product-rating-container">
          ${getStarHTML(product.rating.stars)}
          <div class="product-rating-count link-primary">${product.rating.count}</div>
        </div>
        <div class="product-price">${formatPrice(product.pricePaise)}</div>
        <div class="product-quantity-container">
          <select class="js-quantity-selector-${product.id}">
            ${[1,2,3,4,5,6,7,8,9,10].map(n => `<option value="${n}">${n}</option>`).join("")}
          </select>
        </div>
        <div class="product-spacer"></div>
        <div class="added-to-cart js-added-to-cart-${product.id}">
          <span style="color:green; font-weight:bold; margin-right:5px;">✓</span> Added
        </div>
        <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
          Add to Cart
        </button>
      </div>`;
  });
  grid.innerHTML = html;
  attachAddToCartListeners();
}

function attachAddToCartListeners() {
  document.querySelectorAll(".js-add-to-cart").forEach(btn => {
    btn.addEventListener("click", async () => {
      if (!currentUser) { showAuthModal(); return; }
      const productId = btn.dataset.productId;
      const quantity  = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
      await addToCart(productId, quantity);
      updateCartBadge();
      showAddedMessage(productId);
    });
  });
}

function showAddedMessage(productId) {
  const el = document.querySelector(`.js-added-to-cart-${productId}`);
  if (!el) return;
  el.style.opacity = "1";
  if (addedMessageTimers[productId]) clearTimeout(addedMessageTimers[productId]);
  addedMessageTimers[productId] = setTimeout(() => { el.style.opacity = "0"; }, 2000);
}

function filterProducts(query) {
  const q = query.toLowerCase().trim();
  if (!q) { renderProducts(products); return; }
  renderProducts(products.filter(p =>
    p.name.toLowerCase().includes(q) || p.keywords.some(k => k.toLowerCase().includes(q))
  ));
}

function attachSearchListeners() {
  const bars    = document.querySelectorAll(".search-bar");
  const buttons = document.querySelectorAll(".search-button");
  buttons.forEach((btn, i) => {
    btn.addEventListener("click", () => { navigateTo("home"); filterProducts(bars[i].value); });
  });
  bars.forEach(bar => {
    bar.addEventListener("keydown", e => {
      if (e.key === "Enter") { navigateTo("home"); filterProducts(bar.value); }
    });
  });
}

// ============================================================
//  RENDER: CHECKOUT
// ============================================================
function renderOrderSummary() {
  const container = document.querySelector(".order-summary");
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="padding:30px; text-align:center;">
        <p style="font-size:18px; margin-bottom:15px;">Your cart is empty!</p>
        <a href="javascript:void(0);" onclick="navigateTo('home')" class="link-primary">Continue Shopping</a>
      </div>`;
    renderPaymentSummary(); return;
  }

  let html = "";
  cart.forEach(cartItem => {
    const product = getProduct(cartItem.productId);
    if (!product) return;
    const delivOpt = deliveryOptions.find(o => o.id === cartItem.deliveryOptionId) || deliveryOptions[0];
    let delivOptionsHTML = "";
    deliveryOptions.forEach(opt => {
      const checked     = opt.id === cartItem.deliveryOptionId ? "checked" : "";
      const priceLabel  = opt.pricePaise === 0 ? "FREE Shipping" : `${formatPrice(opt.pricePaise)} - Shipping`;
      delivOptionsHTML += `
        <div class="delivery-option">
          <input type="radio" ${checked} class="delivery-option-input"
            name="delivery-option-${cartItem.productId}"
            data-product-id="${cartItem.productId}" data-delivery-id="${opt.id}">
          <div>
            <div class="delivery-option-date">${getFutureDate(opt.daysOffset)}</div>
            <div class="delivery-option-price">${priceLabel}</div>
          </div>
        </div>`;
    });
    html += `
      <div class="cart-item-container js-cart-item-container-${cartItem.productId}">
        <div class="delivery-date">Delivery date: ${getFutureDate(delivOpt.daysOffset)}</div>
        <div class="cart-item-details-grid">
          <img class="product-image" src="${product.image}" alt="${product.name}" onerror="this.style.display='none'">
          <div class="cart-item-details">
            <div class="product-name">${product.name}</div>
            <div class="product-price">${formatPrice(product.pricePaise)}</div>
            <div class="product-quantity">
              <span>Quantity: <span class="quantity-label js-quantity-label-${cartItem.productId}">${cartItem.quantity}</span></span>
              <span class="update-quantity-link link-primary js-update-link" data-product-id="${cartItem.productId}">Update</span>
              <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${cartItem.productId}">Delete</span>
            </div>
            <div class="quantity-input-container js-quantity-input-container-${cartItem.productId}" style="display:none; margin-top:8px;">
              <input type="number" min="1" max="99" value="${cartItem.quantity}"
                class="quantity-input js-new-quantity-${cartItem.productId}"
                style="width:60px; padding:4px; border:1px solid #ccc; border-radius:4px;">
              <span class="save-quantity-link link-primary js-save-link" data-product-id="${cartItem.productId}" style="margin-left:8px; cursor:pointer;">Save</span>
            </div>
          </div>
          <div class="delivery-options">
            <div class="delivery-options-title">Choose a delivery option:</div>
            ${delivOptionsHTML}
          </div>
        </div>
      </div>`;
  });
  container.innerHTML = html;
  attachCheckoutListeners();
  renderPaymentSummary();
}

function renderPaymentSummary() {
  let itemsTotal = 0, shippingTotal = 0, totalQty = 0;
  cart.forEach(cartItem => {
    const product  = getProduct(cartItem.productId); if (!product) return;
    itemsTotal    += product.pricePaise * cartItem.quantity;
    totalQty      += cartItem.quantity;
    const opt      = deliveryOptions.find(o => o.id === cartItem.deliveryOptionId) || deliveryOptions[0];
    shippingTotal += opt.pricePaise;
  });
  const tax      = Math.round(itemsTotal * 0.1);
  const subtotal = itemsTotal + shippingTotal;
  const total    = subtotal + tax;

  document.querySelectorAll(".js-items-count").forEach(el => el.textContent = totalQty);
  document.querySelector(".js-payment-items").textContent    = formatPrice(itemsTotal);
  document.querySelector(".js-payment-shipping").textContent = formatPrice(shippingTotal);
  document.querySelector(".js-payment-subtotal").textContent = formatPrice(subtotal);
  document.querySelector(".js-payment-tax").textContent      = formatPrice(tax);
  document.querySelector(".js-payment-total").textContent    = formatPrice(total);
}

function attachCheckoutListeners() {
  document.querySelectorAll(".js-delete-link").forEach(link => {
    link.addEventListener("click", async () => {
      const pid = link.dataset.productId;
      await removeFromCart(pid);
      document.querySelector(`.js-cart-item-container-${pid}`)?.remove();
      updateCartBadge(); renderPaymentSummary();
      if (cart.length === 0) renderOrderSummary();
    });
  });

  document.querySelectorAll(".js-update-link").forEach(link => {
    link.addEventListener("click", () => {
      const container = document.querySelector(`.js-quantity-input-container-${link.dataset.productId}`);
      if (container) container.style.display = container.style.display === "none" ? "block" : "none";
    });
  });

  document.querySelectorAll(".js-save-link").forEach(link => {
    link.addEventListener("click", async () => {
      const pid   = link.dataset.productId;
      const input = document.querySelector(`.js-new-quantity-${pid}`);
      if (!input) return;
      const qty = parseInt(input.value, 10);
      if (isNaN(qty) || qty < 1 || qty > 99) { alert("Please enter a valid quantity between 1 and 99."); return; }
      await updateQuantity(pid, qty);
      document.querySelector(`.js-quantity-label-${pid}`).textContent = qty;
      document.querySelector(`.js-quantity-input-container-${pid}`).style.display = "none";
      updateCartBadge(); renderPaymentSummary();
    });
  });

  document.querySelectorAll(".delivery-option-input").forEach(radio => {
    radio.addEventListener("change", async () => {
      await updateDeliveryOption(radio.dataset.productId, radio.dataset.deliveryId);
      const opt = deliveryOptions.find(o => o.id === radio.dataset.deliveryId);
      if (opt) document.querySelector(`.js-cart-item-container-${radio.dataset.productId} .delivery-date`).textContent = `Delivery date: ${getFutureDate(opt.daysOffset)}`;
      renderPaymentSummary();
    });
  });
}

function attachPlaceOrderListener() {
  document.querySelector(".place-order-button")?.addEventListener("click", placeOrder);
}

// ============================================================
//  RENDER: ORDERS
// ============================================================
async function renderOrders() {
  const grid = document.querySelector(".orders-grid");
  if (!grid) return;
  grid.innerHTML = `<p style="padding:20px; color:#888;">Loading orders…</p>`;

  if (!currentUser) {
    grid.innerHTML = `<div style="padding:30px; text-align:center;"><p style="font-size:18px; margin-bottom:15px;">Please log in to see your orders.</p><button class="button-primary" style="padding:10px 20px;" onclick="showAuthModal()">Login</button></div>`;
    return;
  }

  const orders = await loadOrders();
  if (orders.length === 0) {
    grid.innerHTML = `
      <div style="padding:30px; text-align:center; border:1px solid #ddd; border-radius:8px;">
        <p style="font-size:18px; margin-bottom:15px; font-weight:500;">You haven't placed any orders yet.</p>
        <a href="javascript:void(0);" onclick="navigateTo('home')" class="link-primary" style="font-size:16px;">Start Shopping →</a>
      </div>`;
    return;
  }

  let html = "";
  orders.forEach(order => {
    const items = order.order_items || [];
    let orderTotalPaise = 0;
    let itemsHTML = "";
    items.forEach(item => {
      orderTotalPaise += item.price_paise * item.quantity;
      itemsHTML += `
        <div class="product-image-container"><img src="${item.product_image}" alt="${item.product_name}" onerror="this.style.display='none'"></div>
        <div class="product-details">
          <div class="product-name">${item.product_name}</div>
          <div class="product-delivery-date">Arriving on: ${item.delivery_date}</div>
          <div class="product-quantity">Quantity: ${item.quantity}</div>
          <button class="buy-again-button button-primary js-buy-again" data-product-id="${item.product_id}">
            <span class="buy-again-message">Buy it again</span>
          </button>
        </div>
        <div class="product-actions">
          <button class="track-package-button button-secondary js-track-package"
            data-order-id="${order.id}" data-product-id="${item.product_id}"
            data-item='${JSON.stringify({ name: item.product_name, image: item.product_image, quantity: item.quantity, deliveryDate: item.delivery_date, status: item.status })}'>
            Track package
          </button>
        </div>`;
    });
    const placedDate = new Date(order.placed_date).toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" });
    html += `
      <div class="order-container">
        <div class="order-header">
          <div class="order-header-left-section">
            <div class="order-date"><div class="order-header-label">Order Placed:</div><div>${placedDate}</div></div>
            <div class="order-total"><div class="order-header-label">Total:</div><div>${formatPrice(orderTotalPaise)}</div></div>
          </div>
          <div class="order-header-right-section"><div class="order-header-label">Order ID:</div><div style="font-size:13px; word-break:break-all;">${order.id}</div></div>
        </div>
        <div class="order-details-grid">${itemsHTML}</div>
      </div>`;
  });
  grid.innerHTML = html;
  attachOrderListeners();
}

function attachOrderListeners() {
  document.querySelectorAll(".js-buy-again").forEach(btn => {
    btn.addEventListener("click", async () => {
      if (!currentUser) { showAuthModal(); return; }
      await addToCart(btn.dataset.productId, 1);
      updateCartBadge();
      const msgEl = btn.querySelector(".buy-again-message");
      msgEl.textContent = "✔ Added!";
      setTimeout(() => { msgEl.textContent = "Buy it again"; }, 1500);
    });
  });

  document.querySelectorAll(".js-track-package").forEach(btn => {
    btn.addEventListener("click", () => {
      currentTrackingItem = JSON.parse(btn.dataset.item);
      navigateTo("tracking");
    });
  });
}

// ============================================================
//  RENDER: TRACKING
// ============================================================
const STATUS_CONFIG = {
  "Preparing": { progressWidth: "16%",  labelIndex: 0 },
  "Shipped":   { progressWidth: "50%",  labelIndex: 1 },
  "Delivered": { progressWidth: "100%", labelIndex: 2 }
};

function renderTrackingPage() {
  const item   = currentTrackingItem || { name: "Demo Product", image: "", quantity: 1, deliveryDate: "Unknown", status: "Preparing" };
  const config = STATUS_CONFIG[item.status] || STATUS_CONFIG["Shipped"];

  document.querySelector("#page-tracking .delivery-date").textContent = `Arriving on ${item.deliveryDate}`;
  const infos = document.querySelectorAll("#page-tracking .product-info");
  if (infos[0]) infos[0].textContent = item.name;
  if (infos[1]) infos[1].textContent = `Quantity: ${item.quantity}`;

  const img = document.querySelector("#page-tracking .product-image");
  if (img) { img.src = item.image; img.alt = item.name; }

  const labels = document.querySelectorAll("#page-tracking .progress-label");
  labels.forEach(l => l.classList.remove("current-status"));
  if (labels[config.labelIndex]) labels[config.labelIndex].classList.add("current-status");

  const bar = document.querySelector("#page-tracking .progress-bar");
  if (bar) {
    bar.style.width = "0%";
    setTimeout(() => { bar.style.transition = "width 1s ease-in-out"; bar.style.width = config.progressWidth; }, 100);
  }
}

// ============================================================
//  LOGOUT
// ============================================================
async function logout() {
  await db.auth.signOut();
  currentUser = null;
  cart = [];
  updateUserUI();
  updateCartBadge();
  navigateTo("home");
}

// ============================================================
//  INIT
// ============================================================
window.onload = async function () {
  initAuthModal();
  attachSearchListeners();
  attachPlaceOrderListener();

  // Logout button
  document.querySelector(".js-logout-btn")?.addEventListener("click", logout);

  // Restore session
  const { data: { session } } = await db.auth.getSession();
  if (session) {
    currentUser = session.user;
    await loadCartFromDB();
    updateUserUI();
  } else {
    showAuthModal();
  }

  // Listen for auth changes
  db.auth.onAuthStateChange(async (_event, session) => {
    if (session) {
      currentUser = session.user;
      await loadCartFromDB();
      updateUserUI();
    } else {
      currentUser = null;
      cart = [];
      updateUserUI();
    }
    updateCartBadge();
  });

  updateCartBadge();
  navigateTo("home");
};
