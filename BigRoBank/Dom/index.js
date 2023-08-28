// var body = document.body;
// var firstChild = body.firstElementChild;
// var h1 = firstChild.firstElementChild;
// h1.innerHTML = "KuliTech Ventures"

// var kuliTech = document.body.getElementsByTagName("h1");
// kuliTech[0].innerText = "KuliTech Business";

// var kuliBusiness = document.getElementById("compName");
// kuliBusiness.innerHTML = "KuliTech Enterprise";

let grocery = "";
let price = 0;
function addGroceries(table, grocery, price){
    let groceryRow = document.createElement("tr");

    let groceryData = document.createElement("td");
    let priceData = document.createElement("td");

    groceryData.innerText = grocery;
    groceryData.innerText = price;

    groceryRow.appendChild(groceryData);
    groceryRow.appendChild(priceData);

    table.childNodes[1].appendChild(groceryRow);
}

let priceTable = document.getElementById("priceTable");
let form = document.getElementsByTagName("input");

function add() {
    event.preventDefault();
    grocery = form[0].value;
    price = form[1].value;
    addGroceries(priceTable, grocery,price);
    clearInput();
}
function clearInput() {
    form[0].value = "";
    form[1].value = "";
}
