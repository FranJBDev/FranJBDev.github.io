var barChartData = {
  labels: [
    'TOTAL',
    'SEMI-TOTAL',
    'INDUSTRIAL',
    'SEMI-INDUSTRIAL',
    'PREVENTIVO',
  ],
  datasets: [
    {
      label: 'TDM',
      backgroundColor: window.chartColors.red,
      data: [100, 80, 60, 45, 40],
    },
    {
      label: 'Cliente',
      backgroundColor: window.chartColors.blue,
      data: [0, 20, 40, 55, 60],
    },
  ],
};
window.onload = function () {
  var ctx = document.getElementById('grafica').getContext('2d');
  window.myBar = new Chart(ctx, {
    type: 'horizontalBar',
    data: barChartData,
    options: {
      title: {
        display: true,
        text: 'GRADO DE COBERTURA ADQUIRIDA',
      },
      tooltips: {
        mode: 'index',
        intersect: true,
      },
      responsive: true,
      scales: {
        xAxes: [
          {
            stacked: true,
            display: true,
          },
        ],
        yAxes: [
          {
            stacked: true,
          },
        ],
      },
    },
  });
};
