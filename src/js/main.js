// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

//Import the picture for our Logo from our assets
//source: https://www.iconfinder.com/search?q=clothing&price=free
import Icon  from '../assets/5548711_apparel_clothes_clothing_fashion_shirt_icon.png'

// Adding the image for the logo
let logoField = document.getElementById("logoField");
let image = document.createElement('img');
image.src= Icon;
image.width = 60;
image.height = 54;
logoField.appendChild(image);

//direct delivery selected functionality

