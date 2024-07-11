import renderChart from "./lineChart.mjs";
import getStocks from "../data/getStocks.mjs";

let duration = "1mo";
let chartData = await getStocks();

function durationButtons(chartObject) {
  let buttons = [
    { duration: "1 Month", dataValue: "1mo" },
    { duration: "3 Month", dataValue: "3mo" },
    { duration: "1 Year", dataValue: "1y" },
    { duration: "5 Year", dataValue: "5y" },
  ];
  let durationDiv = document.getElementById("duration");

  buttons.map((item) => {
    let button = document.createElement("button");
    button.innerText = item.duration;
    button.addEventListener("click", () => {
      duration = item.dataValue;
      chartObject.destroy();
      let chartX = chartData.AAPL[duration].timeStamp;
      let chartY = chartData.AAPL[duration].value;

      chartObject = renderChart(chartX, chartY);
    });
    durationDiv.append(button);
  });
}

export { durationButtons, duration };
