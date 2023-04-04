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

function changeEtiket(color){
    document.querySelector('.Etiket').style.backgroundColor = color;
}
function changeDop(color){
    document.querySelector('.Dop').style.backgroundColor = color;
}

/*veranderen van de kleur  met arrow toetsen
 */
var kleurenEtiket = ["var(--blauw)","var(--rood)","var(--paars)","var(--groen)"];
var kleurenDop = ["var(--blauw)","var(--rood)","var(--paars)","var(--groen)"];

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
let colorPicker;
const defaultColor = "#1FFFC7";

let colorPicker1;
const defaultColor1 = "#1FFFC7";

window.addEventListener("load", startup, false);

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

function customDop(event) {
    const d = document.querySelector(".Dop");
    if (d) {
        d.style.backgroundColor = event.target.value;
    }
}

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
        var anchor = document.createElement('a');
        var Pepsinaam = document.querySelector("input[type=text]").value;

        anchor.setAttribute("href",base64image);
        anchor.setAttribute("download", Pepsinaam + "'s Pepsifles" );
        anchor.click();
        anchor.remove();


    })
}



