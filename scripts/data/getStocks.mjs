export default async function getStocks() {
  const url = "https://stocks3.onrender.com/api/stocks/getstocksdata";
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data.stocksData[0];
  } catch (error) {
    console.log("Error:", error);
  }
}
