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

        //TRADUCCIONES INGLES

    } else if (idioma == "eng") { //traduccion nav
        diccionarioNavIngles.forEach ((palabra, i) =>{ //traduccion nav ingles
            let id = i + 1;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } ) 

    }
}

//arreglo nav
let diccionarioNavIngles = ["Sign in", "Log in", "Change language", "Spanish", "English"];
let diccionarioNavEspaniol = ["Registrarse", "Iniciar sesión", "Cambiar idioma", "Español", "Inglés"];
