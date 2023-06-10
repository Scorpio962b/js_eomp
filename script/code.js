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
        name: "muesli",
        imageUrl: "https://i.postimg.cc/SKTr0vgP/images.jpg",
        price: 151,
        catogary: "breakfast"
    },

    {
        id: 3,
        name: "muesli",
        imageUrl: "https://i.postimg.cc/SKTr0vgP/images.jpg",
        price: 151,
        catogary: "breakfast"
    },

    {
        id: 4,
        name: "muesli",
        imageUrl: "https://i.postimg.cc/SKTr0vgP/images.jpg",
        price: 151,
        catogary: "breakfast"
    }
];

localStorage.setItem("products", JSON.stringify(products));


window.onload = function (e) {

let productItems = '';  
   products.forEach( product => {
    productItems+= `  
    <div class="container">
     <div class="card">
      <img src="`+product.imageUrl+`" alt="">
       <div class="card-body">
        <h5>`+ product.name +`</h5>
        <p> R `+ product.price +`</p>
        <button>Add to card</button>
       </div>
     </div>
    </div>`;  
    });


    //https://www.w3schools.com/jsref/prop_win_localstorage.asp
    // store in local storage
    //localStorage.setItem("products", productItems);

    // get from local storage
    //let fromLocal = localStorage.getItem("products");

    document.getElementById("products").innerHTML = productItems ;
  
}
let showMenuItem = false;
  // making functions for dropdown menu
function showMenu(){
    showMenuItem = !showMenuItem;
    if(showMenuItem)
    {
        document.getElementById('menuContainer').innerHTML = `<ul class="dropdown">
    <li><a href="">Breakfast</a></li>
    <li><a href="">Lunch</a></li>
    <li><a href="">Dinner</a></li>
  </ul>`;
    }
    else
    {
        document.getElementById('menuContainer').innerHTML = '';
    }
}


// cart icon
//https://cdn-icons-png.flaticon.com/512/3144/3144456.png
