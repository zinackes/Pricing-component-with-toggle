const Basic = document.getElementById('basic');
const Pro = document.getElementById("pro");
const master = document.getElementById("master");


function PriceChange(checkbox){

    if (checkbox.checked){
        Basic.textContent = '19.99';
    }
}