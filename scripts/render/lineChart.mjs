const ctx = document.getElementById("myChart");
export default function renderChart(x, y, label = "Loading...") {
  let lineChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: x,
      datasets: [
        {
          label: label,
          data: y,
          backgroundColor: "white",
          borderColor: "white",
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: "white",
            font: { size: 12, weight: "bold" },
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Date",
            color: "white",
            font: { size: 12, weight: "bold" },
          },
          ticks: {
            color: "white",
            font: { size: 12, weight: "bold" },
          },
        },
        y: {
          beginAtZero: false,
          title: {
            display: true,
            text: "Price",
            color: "white",
            font: { size: 12, weight: "bold" },
          },
          ticks: {
            color: "white",
            font: { size: 12, weight: "bold" },
          },
        },
      },
    },
  });
  return lineChart;
}
