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

//submission and final validation
let registryForm = document.getElementById("registryForm");
let selectedClothing = document.getElementById("selectedClothing")
let selectedRegion = document.getElementById("selectedRegion");
registryForm.addEventListener("submit", (evt) =>{
    evt.preventDefault()

    let adress = adressField.value;
    let zip = postNumberField.value;
    let clothing = selectedClothing.value;
    let region = selectedRegion.value;

    confirm("Vielen Dank für Ihre Spende! Ihre Spende wird registriert. Bitte überprüfen Sie abschließend Ihre Angaben." + "\n"
            + "\n" +
            "Art der gespendeten Kleidung:" + clothing + "\n" +
            "Ausgewähltes Krisengebiet" + region + "\n" +
            "Abholungsadresse:" + adress + "\n" +
            "Postleitzahl:" + zip + "\n" +
            + "\n" +
            "Registriert um:");
   // registryForm.submit();
})






