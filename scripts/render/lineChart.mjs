const ctx = document.getElementById('myChart');
export default function renderChart(x,y){
     let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: x,
        datasets: [{
          label: '# of Votes',
          data: y,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });
    return lineChart;
}

