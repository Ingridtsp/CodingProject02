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