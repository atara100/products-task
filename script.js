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
         <img  src="./images/${element.name}.jpg">
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
        alert(`we have discount of ${discount.Necklace} ❤!!!`);
    }
    else if(evt.id=="Ring"){
        alert(`we have discount of ${discount.Ring} ❤!!!`);
    }else{
        alert("sorry, we have not sale on this product 😞");
    }
}



