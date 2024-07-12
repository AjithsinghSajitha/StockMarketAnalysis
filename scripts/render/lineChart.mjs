const ctx = document.getElementById("myChart");
export default function renderChart(x, y, label = "Loading...") {
  const maxValue = Math.max(...y);
  const maxIndex = y.indexOf(maxValue);
  const minValue = Math.min(...y);
  const minIndex = y.indexOf(minValue);

  let lineChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: x,
      datasets: [
        {
          label: label,
          data: y,
          backgroundColor: y.map((value, index) =>
            index === maxIndex ? "green" : index === minIndex ? "red" : "white"
          ),
          borderColor: "white",
          borderWidth: 1,
        },
      ],
    },
    options: {
      elements: {
        point: {
          pointStyle: "circle",
          radius: 5,
        },
      },
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
          grid: {
            color: "#03a9f48a",
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
          grid: {
            color: "#03a9f48a",
          },
        },
      },
    },
  });
  return lineChart;
}
