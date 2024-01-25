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
let typeOfDelivery = "Abholung";
let postNumberHelp = document.getElementById("postNumberHelp");
directDelivery.addEventListener("click",(evt) => {
    if(directDelivery.checked === true){
        adressField.setAttribute("disabled", "");
        postNumberField.setAttribute("disabled", "");
        takeaway.removeAttribute("checked");
        postNumberField.value = "51141";
        adressField.value = "Geschäftsstelle";
        typeOfDelivery = "Übergabe an der Geschäftsstelle"
        postNumberHelp.innerHTML= "OK";
        postNumberHelp.style.color = "green";
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
            postNumberHelp.style.color = "green";

        }else{
            postNumberHelp.innerHTML = "Ihre Adresse liegt nicht im Abholungsgebiet";
            postNumberHelp.style.color = "red";
        }}

})
//submission and final validation
let registryForm = document.getElementById("registryForm");
let selectedClothing = document.getElementById("selectedClothing")
let selectedRegion = document.getElementById("selectedRegion");
registryForm.addEventListener("submit", (evt) =>{
    evt.preventDefault() //prevents form from auto submitting

    let adress = adressField.value;
    let zip = postNumberField.value;
    let clothing = selectedClothing.value;
    let region = selectedRegion.value;

  if(confirm("Vielen Dank für Ihre Spende! Ihre Spende wird registriert. Bitte überprüfen Sie abschließend Ihre Angaben." + "\n"
            + "\n" +
            "Art der Übergabe:"+ " " + typeOfDelivery + " " + "\n" +
            "Art der gespendeten Kleidung:" + " "+ clothing + "\n" +
            "Ausgewähltes Krisengebiet:" + " " + region + "\n" +
            "Abholungsadresse:"+ " " + adress + "\n" +
            "Postleitzahl:" + " " + zip + "\n" +
            + "\n" + "Registriert um:" + " " + formattedTime + " " + "Uhr" + " " + "am" + " " + day + " " + "den" + " " + formattedDate + " ") === true ){

      registryForm.submit();

  }else{
      evt.preventDefault()
  }
})

//function to generate type of delivery text
function setTypeOfDelivery(){

    if(takeaway.checked === true ){
        typeOfDelivery = "Abholung";
    }else{
        typeOfDelivery = "Übergabe an der Geschäftsstelle";
    }
}

takeaway.addEventListener("change", setTypeOfDelivery);

//Date and time of submission
const currentDate = new Date();
let formattedDate = currentDate.toLocaleDateString("de");

let day = currentDate.toLocaleString('de', {  weekday: 'long' })

let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

const formattedTime = hours + ":" + minutes + ":" + seconds;
