import renderChart from "./lineChart.mjs";
import getStocks from "../data/getStocks.mjs";
import { duration } from "./durationButtons.mjs";
import { stockName } from "./stats.mjs";
let chartData = await getStocks();

function newChart() {
  if (globalThis.chartObject) globalThis.chartObject.destroy();

  let chartX = chartData[stockName][duration].timeStamp;
  let chartY = chartData[stockName][duration].value;

  globalThis.chartObject = renderChart(chartX, chartY);
}

export { newChart };
