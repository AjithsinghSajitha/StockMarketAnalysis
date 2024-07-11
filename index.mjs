import getStocks from "./scripts/data/getStocks.mjs";
import getStocksProfile from "./scripts/data/getStocksProfile.mjs";
import getStockStats from "./scripts/data/getStockStats.mjs";
import renderChart from "./scripts/render/lineChart.mjs";
import stats from "./scripts/render/stats.mjs";
import {durationButtons, duration} from "./scripts/render/durationButtons.mjs";

let data = await getStockStats();
let chartData = await getStocks()

let chartX = chartData.AAPL[duration].timeStamp;
let chartY = chartData.AAPL[duration].value;

stats(data);
let chartO = renderChart(chartX, chartY);
durationButtons(chartO);

console.log(chartData);

