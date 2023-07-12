// In der bubble.js Datei
(async function() {
    const response = await fetch('bubble.json');
    const data = await response.json();
  
    new Chart(
      document.getElementById('bubble'),
      {
        type: 'bubble',
        data: {
          datasets: [{
            label: 'Beispiel-Daten',
            data: data,
            backgroundColor: 'magenta'
          }]
        },
        options: {}
      }
    );
  })();
  