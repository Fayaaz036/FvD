// JavaScript Document
var form = document.querySelector (".NaamCustom");
form.addEventListener("submit", (event) => {
    var Pepsinaam = document.querySelector("input[type=text]").value;
    event.preventDefault();
    if (form.input === ""){
        document.querySelector('.naam').textContent =  "Pepsi";
    }else {
        document.querySelector('.naam').textContent =  Pepsinaam;

    }
})



const dopButtons = document.querySelectorAll(".capButtons button");
const etiketButtons = document.querySelectorAll(".etiketButtons button");


dopButtons.forEach(dopButton => {
    dopButton.addEventListener("click", e => {
        const newCapColor = e.currentTarget.value;
        const theCap = document.querySelector(".Dop");
        theCap.style.setProperty("background-color", newCapColor);
    });
});
etiketButtons.forEach(etiketButtons => {
    etiketButtons.addEventListener("click", e => {
        const newEtiColor = e.currentTarget.value;
        const theEti = document.querySelector(".Etiket");
        theEti.style.setProperty("background-color", newEtiColor);
    });
});



/*veranderen van de kleur  met arrow toetsen
 */
function changeEtiket(color){
    document.querySelector('.Etiket').style.backgroundColor = color;
}
function changeDop(color){
    document.querySelector('.Dop').style.backgroundColor = color;
}

const kleurenEtiket = ["var(--blauw)", "var(--rood)", "var(--paars)", "var(--groen)"];
const kleurenDop = ["var(--blauw)", "var(--rood)", "var(--paars)", "var(--groen)"];

i = 0;
j = 0;
window.addEventListener('keydown', e =>{
    if (e.key === "ArrowUp" ){
        changeEtiket(kleurenEtiket[++i]);
    }if (e.key === "ArrowDown" ){
        changeEtiket(kleurenEtiket[--i]);
    }if (e.key === "ArrowRight" ){
        changeDop(kleurenDop[++j]);
    }if (e.key === "ArrowLeft" ){
        changeDop(kleurenDop[--j]);
    }
});


/*kleurenpicker

 */
//hier maakt hij de standaard variabelen aan als beginwaarden.
let colorPicker;
const defaultColor = "transparant";

let colorPicker1;
const defaultColor1 = "#1FFFC7";

window.addEventListener("load", startup, false);

//hier starten de functies om de waardes aan te horen vanuit de input
function startup() {
    colorPicker = document.querySelector("#color-picker");
    colorPicker.value = defaultColor;
    colorPicker.addEventListener("input", customDop, false);
    colorPicker.select();

    colorPicker1 = document.querySelector("#color-picker1");
    colorPicker1.value = defaultColor1;
    colorPicker1.addEventListener("input", customEtiket, false);
    colorPicker1.select();
}
//hier maakt hij de functie aan waarbij je de kleur veranders van de dop

function customDop(event) {
    const d = document.querySelector(".Dop");
    if (d) {
        // d.style.backgroundColor = event.target.value;
        d.style.setProperty("background-color", event.target.value);

    }
}

//hier maakt hij de functie aan waarbij je de kleur veranders van de Etiket
function customEtiket(event) {
    const e = document.querySelector(".Etiket");
    if (e) {
        e.style.backgroundColor = event.target.value;
    }
}
/* Screenshot feature
 */

document.getElementById('download').onclick = function (){
    const screenshotTarget = document.getElementById('capture');
    
    html2canvas(screenshotTarget).then((canvas)=>{
        
        const base64image = canvas.toDataURL("image/png")
        const anchor = document.createElement('a');
        const Pepsinaam = document.querySelector("input[type=text]").value;

        anchor.setAttribute("href",base64image);
        anchor.setAttribute("download", Pepsinaam + "'s Pepsifles" );
        anchor.click();
        anchor.remove();

    })
}

const refreshButton = document.querySelector('#delete');

const refreshPage = () => {
    location.reload();
}

refreshButton.addEventListener('click', refreshPage)



