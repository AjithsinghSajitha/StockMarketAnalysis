import getStockStats from "./scripts/data/getStockStats.mjs";
import { stats } from "./scripts/render/stats.mjs";
import { durationButtons } from "./scripts/render/durationButtons.mjs";
import { newChart } from "./scripts/render/newChart.mjs";

let data = await getStockStats();
globalThis.chartObject = undefined;

newChart();
durationButtons();
stats(data);
