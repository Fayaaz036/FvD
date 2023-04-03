// JavaScript Document
var form = document.querySelector (".NaamCustom");

form.addEventListener("submit", (event) => {
    var Pepsinaam = document.querySelector("input").value;
    event.preventDefault();
        document.querySelector('.naam').textContent =  Pepsinaam;
    
})


