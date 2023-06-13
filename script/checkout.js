function dostuff() {
    let myProducts = JSON.parse(localStorage.getItem("products"));
    console.log(myProducts);
    alert(myProducts[0].name);
}