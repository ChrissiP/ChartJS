//Beispiellink
//https://www.chartjs.org/docs/latest/charts/doughnut.html
//Ohne den wahrscheinlich nicht machbar

(async function() {
  const data = {
    datasets: [{
      data: [10, 20, 30],
      backgroundColor: ['green', 'red', 'yellow']
    }],
    labels: ['green', 'red', 'yellow']
  };

  new Chart(
    document.getElementById('doughnut'),
    {
      type: 'doughnut',
      data: data,
      options: {}
    }
  );
})();
