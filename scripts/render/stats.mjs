import { newChart } from "./newChart.mjs";
import getStocksProfile from "../data/getStocksProfile.mjs";

let stockName = "GOOGL";
let profileData = await getStocksProfile();

function stats(data) {
  let stats = document.getElementById("stats");
  let profile = document.getElementById("profile");
  let profileHeader = document.getElementById('profile-header');

  profileHeader.innerHTML = `<h2>${stockName}&nbsp&nbsp<span style="color: green;">${data[stockName].profit.toFixed(2)}%&nbsp&nbsp</span>$${data[stockName].bookValue.toFixed(2)}</h2>`;
  profile.innerText = profileData[stockName].summary;

  for (const key in data) {
    let div = document.createElement("div");
    let anchor = document.createElement("a");
    let valueSpan = document.createElement("span");
    let profitSpan = document.createElement("span");
    let bookValue = parseFloat(data[key].bookValue);
    let profit = parseFloat(data[key].profit);
    let color;

    data[key].profit > 0 ? (color = "#07ff1c") : (color = "red");
    anchor.setAttribute("href", "#");
    valueSpan.setAttribute("style", "color: white;");
    valueSpan.innerText = "$" + bookValue.toFixed(2);
    profitSpan.setAttribute("style", `color: ${color};`);
    profitSpan.innerText = profit.toFixed(2) + "%";
    div.classList.add("stat");

    if (key != "_id") {
      anchor.addEventListener("click", () => {
        stockName = key;
        newChart();
        profile.innerText = profileData[stockName].summary;
        profileHeader.innerHTML = `<h2>${stockName}&nbsp&nbsp<span style="color: ${color};">${data[stockName].profit.toFixed(2)}%&nbsp&nbsp</span>$${data[stockName].bookValue.toFixed(2)}</h2>`;
      });

      anchor.innerText = key;
      div.append(anchor);
      div.append(valueSpan);
      div.append(profitSpan);
      stats.append(div);
    }
  }
}

export { stats, stockName };
