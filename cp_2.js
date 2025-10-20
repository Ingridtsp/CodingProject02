// STEP 3: Using fetch with .then()
function fetchProductsThen() {
  fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('--- Products fetched with .then() ---');
      data.forEach(product => {
        console.log(product.fields.name);
      });
    })
    .catch(error => handleError(error));
}

// STEP 4: Using async/await
async function fetchProductsAsync() {
  try {
    const response = await fetch('https://www.course-api.com/javascript-store-products');
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}

// STEP 5: Display products
function displayProducts(products) {
  const container = document.getElementById('product-container');
  container.innerHTML = ''; // clear container first

  products.slice(0, 5).forEach(product => {
    const { name, price, image } = product.fields;

    const card = document.createElement('div');
    card.classList.add('product-card');

    const img = document.createElement('img');
    img.src = image[0].url;
    img.alt = name;

    const title = document.createElement('h2');
    title.textContent = name;

    const priceTag = document.createElement('p');
    priceTag.textContent = `$${(price / 100).toFixed(2)}`;

    card.append(img, title, priceTag);
    container.appendChild(card);
  });
}
