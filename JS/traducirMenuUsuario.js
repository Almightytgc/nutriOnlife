function traducir (element) {
    /*console.log(element);*/ 
    let idioma = element.id;
    if (idioma == "esp") {
        diccionarioNavEspaniol.forEach ((palabra, i) =>{
            let id = i + 1;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } ) 
        diccionarioSeccion1Espaniol.forEach ((palabra, i) =>{
            let id = i + 6;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } ) 
        diccionarioSeccion2Espaniol.forEach ((palabra, i) =>{
            let id = i + 8;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } ) 
        diccionarioSeccion3Espaniol.forEach ((palabra, i) =>{
            let id = i + 11;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } ) 
        derechosEspaniol.forEach ((palabra, i) =>{
            let id = i + 12;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } ) 
        contactenosEspaniol.forEach ((palabra, i) =>{
            let id = i + 13;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } ) 
                




    } else if (idioma == "eng") {
        diccionarioNavIngles.forEach ((palabra, i) =>{
            let id = i + 1;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } ) 
        diccionarioSeccion1Ingles.forEach ((palabra, i) =>{
            let id = i + 6;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } ) 
        diccionarioSeccion2Ingles.forEach ((palabra, i) =>{
            let id = i + 8;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } ) 
        diccionarioSeccion3Ingles.forEach ((palabra, i) =>{
            let id = i + 11;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } ) 
        derechosIngles.forEach ((palabra, i) =>{
            let id = i + 12;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } ) 
        contactenosIngles.forEach ((palabra, i) =>{
            let id = i + 13;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } ) 
    }
}

let diccionarioNavIngles = ["Home", "Log in", "Change language", "Spanish", "English"];
let diccionarioNavEspaniol = ["Inicio", "Iniciar sesión", "Cambiar idioma", "Español", "Inglés"];

let diccionarioSeccion1Ingles = ["see exercise routines", "See diets"];
let diccionarioSeccion1Espaniol = ["Ver rutinas de ejercicios", "Ver dietas"];

let diccionarioSeccion2Ingles = ["Back","Remember that the best option will always be to visit a nutritionist","Background image taken from pexels.com"];
let diccionarioSeccion2Espaniol = ["Regresar","Recuerda que la mejor opción siempre será visitar a un nutricionista","Imagen de fondo extraída de pexels.com"];

let diccionarioSeccion3Ingles = ["Follow us on our social networks"];
let diccionarioSeccion3Espaniol = ["Siguenos en nuestras redes sociales"];

let derechosIngles = ["2022 All rights reserved"];
let derechosEspaniol = ["2022 Todos los derechos reservados"];

let contactenosIngles = ["Contact Us"]
let contactenosEspaniol =["Contáctenos"]
