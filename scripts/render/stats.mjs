export default function stats(data) {
  let stats = document.getElementById("stats");

  for (const key in data) {
    let div = document.createElement("div");
    let color;
    
    data[key].profit > 0 ? (color = "#07ff1c") : (color = "red");

    div.classList.add("stat");
    if (key != "_id") {
      div.innerHTML = `<a href="#">${key}</a>
                        <span style = "color: white;">${data[key].bookValue}</span>
                        <span style = "color: ${color};">${data[key].profit}%</span>`;
      stats.append(div);
    }
  }
}
