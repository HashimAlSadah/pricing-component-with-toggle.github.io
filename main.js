const toggleBtn = document.querySelector(".toggle-button");
const prices = document.querySelectorAll(".price");

toggleBtn.addEventListener("click", ()=>{
    if (!toggleBtn.classList.contains("active")){
        toggleBtn.classList.add("active");
        prices.forEach((price, index) => {
            let priceLength = price.innerText.length;
            price.innerText = price.innerText.substr(0,2) + "9" + price.innerText.substr(2, priceLength)
        });
    }
   
    else {
        toggleBtn.classList.remove("active");
        prices.forEach((price, index) => {
            let priceLength = price.innerText.length;
            price.innerText = price.innerText.substr(0,2) + price.innerText.substr(3, priceLength)
        });
    }
});


