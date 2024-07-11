import getStocks from "./scripts/data/getStocks.mjs";
import getStocksProfile from "./scripts/data/getStocksProfile.mjs";
import getStockStats from "./scripts/data/getStockStats.mjs";
import renderChart from "./scripts/render/lineChart.mjs";
import stats from "./scripts/render/stats.mjs";

let data = await getStockStats();
let chartData = await getStocks()
let chartX = chartData.AAPL["1mo"].timeStamp;
let chartY = chartData.AAPL["1mo"].value;

stats(data);
renderChart(chartX, chartY);


console.log(chartX);
console.log(chartY);