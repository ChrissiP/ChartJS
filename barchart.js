(async function() {
  const labels = ["Jan", "Feb", "März", "April", "Mai", "Juni", "Juli"];
  const data = {
    labels: labels,
    datasets: [{
      label: 'My Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'red',
      borderColor: 'blue',
      borderWidth: 1
    }]
  };

  new Chart(
    document.getElementById('barchart'),
    {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    }
  );
})();
