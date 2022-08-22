//traduccion nav

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
        creditosEspaniol.forEach ((palabra, i) =>{
            let id = i + 11;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } )
        diccionarioSeccion2Espaniol.forEach ((palabra, i) =>{
            let id = i + 12;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } )
        derechosEspaniol.forEach ((palabra, i) =>{
            let id = i + 13;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } )
        contactenosEspaniol.forEach ((palabra, i) =>{
            let id = i + 14;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } )



    } else if (idioma == "eng") {
        diccionarioNavIngles.forEach ((palabra, i) =>{
            let id = i + 1;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } ) 
        diccionarioSeccion1Ingles. forEach ((palabra, i) =>{
            let id = i + 6;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } )
        creditosIngles. forEach ((palabra, i) =>{
            let id = i + 11;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } )
        diccionarioSeccion2Ingles. forEach ((palabra, i) =>{
            let id = i + 12;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } )
        derechosIngles. forEach ((palabra, i) =>{
            let id = i + 13;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } )
        contactenosIngles. forEach ((palabra, i) =>{
            let id = i + 14;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } )

    }
}
//diccionario de nav en ingles
let diccionarioNavIngles = ["Sign in", "Log in", "Change language", "Spanish", "English"];
let diccionarioNavEspaniol = ["Registrarse", "Iniciar sesión", "Cambiar idioma", "Español", "Inglés"];
//diccionario seccion 1
let diccionarioSeccion1Ingles = ["Log in", "Email <input type=\"text\">", "Password <input type=\"text\">", "Back", "Enter"];
let diccionarioSeccion1Espaniol = ["Iniciar sesión", "Correo electrónico <input type=\"text\">", "Contraseña <input type=\"text\">", "Regresar", "Entrar"];
//creditos imagenes 
let creditosIngles = ["Background image taken from pexels.com"];
let creditosEspaniol = ["Imagen de fondo extraída de pexels.com"];
//diccionario seccion 2 follow us
let diccionarioSeccion2Ingles = ["Follow us on our social networks"];
let diccionarioSeccion2Espaniol = ["Siguenos en nuestras redes sociales"];
//diccionario todos derechos
let derechosIngles = ["2022 All rights reserved"];
let derechosEspaniol = ["2022 Todos los derechos reservados"];
//contactenos
let contactenosIngles = ["Contact Us"]
let contactenosEspaniol =["Contáctenos"]