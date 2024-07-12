export default async function getStocksProfile() {
  const url = "https://stocks3.onrender.com/api/stocks/getstocksprofiledata";
  try {
    let res = await fetch(url);
    let data = await res.json();
    
    return data.stocksProfileData[0];
  } catch (error) {
    console.log("Error:", error);
  }
}
