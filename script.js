let evt;

function display(){
fetch("http://localhost:3003/myproductslist")
.then(response=>response.json())
.then(responseP=>displayList(responseP.productsList));
};


function displayList(productsMames){
    productsMames.forEach(element => {
        document.getElementById('card').innerHTML+=
        `<div class="cardP">
         <h1>${element.name}</h1>
         <img  src="./images/${element.img}">
         <h4>Price: ${element.price}</h4>
         <button class="btnSale" id="${element.name}"> check sale </button>
        </div>`;
    });
}

document.addEventListener("click",productSale);

function productSale(event){
 evt=event.target;
 if(evt.classList[0]=="btnSale"){
       fetch("http://localhost:3003/sales")
        .then(response => response.json())
        .then(responseSale=>displatDiscount(responseSale));
 }
}

function displatDiscount(discount){
    if(evt.id=="Necklace"){
        let price=700-(700*0.1);
        alert(`we have discount of ${discount.Necklace} ❤!!!
         the price now: ${price}$ 🎉`);
    }
    else if(evt.id=="Ring"){
        let price=640-(640*0.25);
        alert(`we have discount of ${discount.Ring} ❤!!!
         the price now: ${price}$ ✨`);
    }else{
        alert("sorry, we have not sale on this product 😞");
    }
}


