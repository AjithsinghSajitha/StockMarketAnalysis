export default async function getStockStats() {
  const url = "https://stocks3.onrender.com/api/stocks/getstockstatsdata";
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data.stocksStatsData[0];
  } catch (error) {
    console.log("Error:", error);
  }
  
}
