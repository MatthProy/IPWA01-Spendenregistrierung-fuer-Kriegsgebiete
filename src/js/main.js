// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

//Import the picture for our Logo from our assets
//source: https://www.iconfinder.com/search?q=clothing&price=free
import Icon  from '../assets/5548711_apparel_clothes_clothing_fashion_shirt_icon.png'
import {isDisabled} from "bootstrap/js/src/util";

// Adding the image for the logo
let logoField = document.getElementById("logoField");
let image = document.createElement('img');
image.src= Icon;
image.width = 60;
image.height = 54;
logoField.appendChild(image);

//direct delivery selected functionality
let directDelivery = document.getElementById("directDelivery");
let adressField = document.getElementById("adressField");
let postNumberField = document.getElementById("postNumberField");
let takeaway = document.getElementById("takeaway");

let postNumberHelp = document.getElementById("postNumberHelp");
directDelivery.addEventListener("click",(evt) => {
    if(directDelivery.checked === true){
        adressField.setAttribute("disabled", "");
        postNumberField.setAttribute("disabled", "");
        takeaway.removeAttribute("checked");
        postNumberField.value = "";
        adressField.value = "";
    }else{
        adressField.removeAttribute("disabled")
        postNumberField.removeAttribute("disabled");
        takeaway.setAttribute("checked", "");
    }
})

//veryfication of postnumber functionality
postNumberField.addEventListener("keyup",(evt) =>{
    let userInputPlz = document.getElementById("postNumberField").value;
    if(userInputPlz.startsWith("5" ) === true){
        postNumberHelp.innerHTML= "Geben Sie eine Adresse im Abholungegebiet 51xxx ein";
        if(userInputPlz.startsWith("51") === true){
            postNumberHelp.innerHTML= "OK";
            document.getElementById("postNumberHelp").style.color = "green";

        }else{
            postNumberHelp.innerHTML = "Ihre Adresse liegt nicht im Abholungsgebiet";
            document.getElementById("postNumberHelp").style.color = "black";
        }}

})





