const Basic = document.getElementById('basic');
const Pro = document.getElementById("pro");
const master = document.getElementById("master");


function PriceChange(checkbox){

    if (checkbox.checked){
        Basic.innerHTML = '19.99';
        Pro.innerHTML = '24.99';
        master.innerHTML = '39.99';
    }
    else{
        Basic.innerHTML = '199.99';
        Pro.innerHTML = '249.99';
        master.innerHTML = '399.99';
    }
}