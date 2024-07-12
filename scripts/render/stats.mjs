import { newChart } from "./newChart.mjs";

let stockName = "AAPL";

function stats(data) {
  let stats = document.getElementById("stats");

  for (const key in data) {
    let div = document.createElement("div");
    let anchor = document.createElement("a");
    let valueSpan = document.createElement("span");
    let profitSpan = document.createElement("span");
    let color;

    data[key].profit > 0 ? (color = "#07ff1c") : (color = "red");
    anchor.setAttribute("href", "#");
    valueSpan.setAttribute("style", "color: white;");
    valueSpan.innerText = data[key].bookValue.toFixed(2);
    profitSpan.setAttribute("style", `color: ${color};`);
    profitSpan.innerText = data[key].profit.toFixed(2) + "%";
    div.classList.add("stat");

    if (key != "_id") {
      anchor.addEventListener("click", () => {
        stockName = key;
        newChart();
      });

      anchor.innerText = key;
      div.append(anchor);
      div.append(valueSpan);
      div.append(profitSpan);
      stats.append(div);
    }
  }
}

export { stats, stockName };
