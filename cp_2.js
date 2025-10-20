// STEP 3: Example fetch with .then()
function fetchProductsThen() {
  fetch('https://www.course-api.com/javascript-store-products')
    .then(response => response.json())
    .then(() => console.log('Fetched API data (not used, replaced with Pilates products)'))
    .catch(error => handleError(error));
}

// STEP 4: Async/Await version
async function fetchProductsAsync() {
  try {
    console.log('Using custom Pilates products instead of API data');
    const pilatesProducts = getPilatesProducts();
    displayProducts(pilatesProducts);
  } catch (error) {
    handleError(error);
  }
}

// STEP 5: Display products
function displayProducts(products) {
  const container = document.getElementById('product-container');
  container.innerHTML = '';

  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;

    const title = document.createElement('h2');
    title.textContent = product.name;

    const priceTag = document.createElement('p');
    priceTag.textContent = `$${product.price.toFixed(2)}`;

    card.append(img, title, priceTag);
    container.appendChild(card);
