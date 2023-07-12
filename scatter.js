//Beispiellink
//https://www.chartjs.org/docs/latest/charts/scatter.html
//Ohne den wahrscheinlich nicht machbar

(async function() {
  const data = {
    datasets: [{
      label: 'Beispiel-Daten',
      data: [
        {x: 1, y: 2},
        {x: 2, y: 3},
        {x: 3, y: 4}
      ],
      backgroundColor: 'red'
    }]
  };

  new Chart(
    document.getElementById('scatter'),
    {
      type: 'scatter',
      data: data,
      options: {}
    }
  );
})();
