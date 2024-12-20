const menuList = document.getElementById("menu-items");
const button= document.getElementById('button');
const menuItems = [
    { name: "Pizza mit Ananas", price: 9.50 },
    { name: "Jollof Rice mit Fleisch", price: 14.20 },
    { name: "Bannana Brot", price: 5.80 },
    { name: "Pasta und Lobsta", price: 18.90 },
    { name: "POMMES FRITES MIT SAUCE", price: 10.50 },
    { name: "KUCHEN MIT COCA COLA", price: 6.70 },
    { name: "REIS MIT SAUCE", price: 12.80 }
];


document.addEventListener("DOMContentLoaded", function() {

   
    for(let i = 0; i <= menuItems.length -1; i++) {
        let li = document.createElement("li");
        let item = menuItems[i]
        console.log(item)
        let originalPrice = item.price;
        li.textContent = `${item.name} - CHF ${originalPrice.toFixed(2)}`;
        menuList.appendChild(li);
    };
})

button.addEventListener("click", logicForButton )

function logicForButton() {
    for(let i = 0; i <= menuItems.length -1; i++) {
        let li = document.createElement("li");
        let item = menuItems[i]
        let originalPrice = item.price;
            if (item.price === originalPrice) {
                item.price /= 2;
            } else {
                item.price = originalPrice;
            }
            li.textContent = `${item.name} - CHF ${item.price.toFixed(2)}`;
            menuList.appendChild(li);
        };
        

}