import getStocks from "./scripts/data/getStocks.mjs"
import getStocksProfile from "./scripts/data/getStocksProfile.mjs"
import getStockStats from "./scripts/data/getStockStats.mjs"

let data = await getStockStats();
console.log(data);
