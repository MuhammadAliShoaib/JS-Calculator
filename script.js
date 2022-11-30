var displayElem = document.getElementById('display');

function display(a){
    displayElem.value += a;
}

function calculate(){
    displayElem.value=eval(displayElem.value)   
}

function clearAll(){
    displayElem.value="";
}