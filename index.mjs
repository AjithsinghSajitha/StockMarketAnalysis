import getStocks from "./scripts/data/getStocks.mjs";
import getStockStats from "./scripts/data/getStockStats.mjs";
import { stats } from "./scripts/render/stats.mjs";
import { durationButtons } from "./scripts/render/durationButtons.mjs";
import { newChart } from "./scripts/render/newChart.mjs";

let data = await getStockStats();
let chartData = await getStocks();
globalThis.chartObject = undefined;

newChart();
stats(data);
durationButtons();
