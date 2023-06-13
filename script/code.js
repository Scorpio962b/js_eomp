//creating an object and a function that will load when windows load.
let products = [{
    id: 1,
    name: "muesli",
    imageUrl: "https://i.postimg.cc/SKTr0vgP/images.jpg",
    price: 151,
    catogary: "breakfast"
},
{
    id: 2,
    name: "avo-egg-tomato",
    imageUrl: "https://i.postimg.cc/J40wNzTm/avo-egg-tomato.jpg",
    price: 151,
    catogary: "breakfast"
},

{
    id: 3,
    name: "Ice-Cream-Waffl",
    imageUrl: "https://i.postimg.cc/gJjyMQ1w/Ice-Cream-Waffle-Sundae-featured.webp",
    price: 151,
    catogary: "breakfast"
},

{
    id: 4,
    name: "oats-fruit-cereal",
    imageUrl: "https://i.postimg.cc/nLgKP0x0/oat-fruit-cereal.webp",
    price: 151,
    catogary: "breakfast"
},
{
    id: 5,
    name: "omlette",
    imageUrl: "https://i.postimg.cc/c4Lm6KF7/omlette.jpg",
    price: 151,
    catogary: "breakfast"
},
{
    id: 6,
    name: "Banana-Pancakes",
    imageUrl: "https://i.postimg.cc/D0kMt1L3/RSBanana-Pancakes-5733de9.webp",
    price: 151,
    catogary: "breakfast"
},
{
    id: 7,
    name: "wraps",
    imageUrl: "https://i.postimg.cc/RFdzQP2b/1382539589470.jpg",
    price: 151,
    catogary: "breakfast"
},
// lunch start breakfast end
{
    id: 8,
    name: "burger and chips",
    imageUrl: "https://i.postimg.cc/HLm5LMCw/burger-and-chips.jpg",
    price: 151,
    catogary: "lunch"
},
{
    id: 9,
    name: "chicken roti",
    imageUrl: "https://i.postimg.cc/8PBf05vs/caribian-pot-chicken-roti.jpg",
    price: 151,
    catogary: "lunch"
},
{
    id: 10,
    name: "Garlic-Butter-Baked-Chicken",
    imageUrl: "https://i.postimg.cc/44WrbvL3/Garlic-Butter-Baked-Chicken-Breast-Primavera-Kitchen-2.jpg",
    price: 151,
    catogary: "lunch"
},
{
    id: 11,
    name: "mutton akni",
    imageUrl: "https://i.postimg.cc/k5yjM9L5/mutton-akni.jpg",
    price: 151,
    catogary: "lunch"
},
{
    id: 12,
    name: "Pasta",
    imageUrl: "https://i.postimg.cc/FKKPKwvg/One-Pot-Alfredo-Pasta-RECIPE-CARD2.jpg",
    price: 151,
    catogary: "lunch"
},
{
    id: 13,
    name: "kale sandwich",
    imageUrl: "https://i.postimg.cc/hGxXVtKS/turkey-kale-sandwich.jpg",
    price: 151,
    catogary: "lunch"
},
// dinner start lunch end
{
    id: 14,
    name: "butter chicken",
    imageUrl: "https://i.postimg.cc/gk8cMBfD/butter-chicken-recipe.jpg",
    price: 151,
    catogary: "dinner"
},
{
    id: 15,
    name: "lasagne",
    imageUrl: "https://i.postimg.cc/BZ2RR9nX/classic-lasagna-lead-643079215b604.jpg",
    price: 151,
    catogary: "dinner"
},
{
    id: 16,
    name: "fried-chicken-and-chips",
    imageUrl: "https://i.postimg.cc/vHHXhpgR/frid-chicken-and-chips.jpg",
    price: 151,
    catogary: "dinner"
},
{
    id: 17,
    name: "mac and cheese",
    imageUrl: "https://i.postimg.cc/LsHsgBQV/mac-and-cheese.jpg",
    price: 151,
    catogary: "dinner"
}
];

localStorage.setItem("products", JSON.stringify(products));


window.onload = function (e) {

    let productItems = '';
    products.forEach((product) => {
        if (product.catogary == "breakfast") {
            productItems += `  
    <div class="container
    ">
     <div class="card">
      <img src="`+ product.imageUrl + `" alt="" width="250px" height="250px">
       <div class="card-body">
        <h5>`+ product.name + `</h5>
        <p> R `+ product.price + `</p>
        <button class="btn">Add to card</button>
       </div>
     </div>
    </div>`;
        }
        document.getElementById("breakfast").innerHTML = productItems;
    });

    productItems = '';
    products.forEach((product) => {
        if (product.catogary == "lunch") {
            productItems += `  
        <div class="container
        ">
         <div class="card">
          <img src="`+ product.imageUrl + `" alt="" width="250px" height="250px">
           <div class="card-body">
            <h5>`+ product.name + `</h5>
            <p> R `+ product.price + `</p>
            <button class="btn">Add to card</button>
           </div>
         </div>
        </div>`;
        }
        document.getElementById("lunch").innerHTML = productItems;
    });



    productItems = '';
    products.forEach((product) => {
        if (product.catogary == "dinner") {
            productItems += `  
        <div class="container
        ">
         <div class="card">
          <img src="`+ product.imageUrl + `" alt="" width="250px" height="250px">
           <div class="card-body">
            <h5>`+ product.name + `</h5>
            <p> R `+ product.price + `</p>
            <button class="btn">Add to card</button>
           </div>
         </div>
        </div>`;
        }
        document.getElementById("dinner").innerHTML = productItems;
    });



    //https://www.w3schools.com/jsref/prop_win_localstorage.asp
    // store in local storage
    //localStorage.setItem("products", productItems);

    // get from local storage
    //let fromLocal = localStorage.getItem("products");

    // document.getElementById("products").innerHTML = productItems ;

}
let showMenuItem = false;
// making functions for dropdown menu
function showMenu() {
    showMenuItem = !showMenuItem;
    if (showMenuItem) {
        document.getElementById('menuContainer').innerHTML = `<ul class="dropdown">
    <li><a href="#breakfast">Breakfast</a></li>
    <li><a href="#lunch">Lunch</a></li>
    <li><a href="#dinner">Dinner</a></li>
  </ul>`;
    }
    else {
        document.getElementById('menuContainer').innerHTML = '';
    }
}


// cart icon
//https://cdn-icons-png.flaticon.com/512/3144/3144456.png
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 9000);
}