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
      let myData={
    "product":evt.id
     };
       fetch("http://localhost:3003/sales",{
           method:"POST",
           body: JSON.stringify(myData),
           headers: {"Content-type": "application/json; charset=UTF-8"}
       })
        .then(response => response.json())
        .then(responseSale=>alert(`${responseSale.message}`));
 }
};
