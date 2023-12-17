let data =  [];
let cardContainer = document.getElementById("card-container");

document.addEventListener("DOMContentLoaded", function(event) {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then((res) => res.json())
    .then((res) => {
        data = res;
        for(let i=0;i<data.length;i++)
        {
            cardContainer.innerHTML += 
            `<div class="card">
                <div class="image">Image
                    <img class="img" scr=${data[i].image} />
                </div>
                <div class="details">
                    <div class="row">
                        <span id="name">${data[i].name}</span>
                        <span id="price">${data[i].current_price}</span>
                    </div>
                    <div class="row">
                        <span id="short_name">${data[i].symbol}</span>
                        <span id="percentage">${data[i].market_cap_change_percentage_24h}%</span>
                    </div>
                </div>
            </div>`
        }
    })
})