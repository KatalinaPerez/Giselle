const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
const productDetailsContainer = document.getElementById('productDetails');

selectedProducts.forEach(product => {
  const productDetailsHTML = `
    <h3>${product.name}</h3>
    <ul>
      ${product.ingredients.map(ingredient => `<li>${ingredient.name} - Cantidad: ${ingredient.quantity}</li>`).join('')}
    </ul>
  `;

  // Agregar los detalles del producto al contenedor
  productDetailsContainer.innerHTML += productDetailsHTML;
});
