/*estructura general*/

function traducir (element) {
/*console.log(element);*/ 

     //TRADUCCIONES ESPAÑOL
    
     let idioma = element.id;
     if (idioma == "esp") {
         diccionarioNavEspaniol.forEach ((palabra, i) =>{ //traduccion nav español
             let id = i + 1;
             id = "" + id;
             document.getElementById(id).innerHTML = palabra;
         } ) 
         diccionarioFormEspaniol.forEach ((palabra, i) =>{ //traduccion nav ingles
            let id = i + 6;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } ) 
         diccionarioFooterEspaniol.forEach ((palabra, i) =>{ //traduccion nav ingles
            let id = i + 16;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } ) 
         //TRADUCCIONES INGLES

     } else if (idioma == "eng") { //traduccion nav
         diccionarioNavIngles.forEach ((palabra, i) =>{ //traduccion nav ingles
             let id = i + 1;
             id = "" + id;
             document.getElementById(id).innerHTML = palabra;
         } ) 
         diccionarioFormIngles.forEach ((palabra, i) =>{ //traduccion nav ingles
            let id = i + 6;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } ) 
         diccionarioFooterIngles.forEach ((palabra, i) =>{ //traduccion nav ingles
            let id = i + 16;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } ) 
     }
 }

//arreglo nav
let diccionarioNavIngles = ["Home", "Log in", "Change language", "Spanish", "English"];
let diccionarioNavEspaniol = ["Inicio", "Iniciar sesión", "Cambiar idioma", "Español", "Inglés"];

//arreglo form
let diccionarioFormEspaniol = [
    "Recolección de datos", "Digite su edad <input type=\"number\">",

    "Elija su sexo <select><option disabled selected</option>  <option>Male</option>  <option>Female</option></select>",
     "Digite su peso", "Digite su altura (centímetros)"
];
let diccionarioFormIngles = [
    "Data collection", "Type your age <input type=\"number\">",

    "Choose your gender <select><option disabled selected</option>  <option>Male</option>  <option>Female</option></select>",
    "Type your weigth", "Type your heigth"

];

//arreglo footer 
let diccionarioFooterEspaniol = [
    "Síguenos en nuestras redes sociales", 
    "2022 Todos los derechos reservados",
    "Contáctenos"
];

let diccionarioFooterIngles = [
    "Follow us on our social networks",
    "2022 All Rights Reserved",
    "Contact Us"
];