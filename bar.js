fetch('https://dummyjson.com/carts/')
  .then(response => response.json())
  .then(data => {
    const carts = data.carts;
    const products = carts.flatMap(cart => cart.products).slice(0, 10); // Nur die ersten 10 Produkte aller Carts verwenden
    const productNames = products.map(product => product.title);
    const productPrices = products.map(product => product.price);

    new Chart(document.getElementById('bar'), {
      type: 'bar',
      data: {
        labels: productNames,
        datasets: [{
          label: 'Preis',
          data: productPrices,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  })
  .catch(error => console.error('Fehler beim Laden der Daten:', error));