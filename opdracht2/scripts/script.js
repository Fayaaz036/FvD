// JavaScript Document
var form = document.querySelector (".NaamCustom");

form.addEventListener("submit", (event) => {
    var Pepsinaam = document.querySelector("input").value;
    event.preventDefault();
    if (form.input === ""){
        document.querySelector('.naam').textContent =  "Pepsi";
    }else {
        document.querySelector('.naam').textContent =  Pepsinaam;

    }
})

function changeEtiket(color){
    document.querySelector('.Etiket').style.backgroundColor = color;
}
function changeDop(color){
    document.querySelector('.Dop').style.backgroundColor = color;
}
var kleuren = ["var(--blauw)","var(--rood)","var(--paars)","var(--groen)"];


function color() {
    
}

window.addEventListener('keydown', e =>{
    if (e.key === "r" ){
        changeEtiket("var(--rood)");
    }if (e.key === "b" ){
        changeEtiket("var(--blauw)");
    }if (e.key === "g" ){
        changeEtiket("var(--groen)");
    }if (e.key === "p" ){
        changeEtiket("var(--paars)");
    }
})