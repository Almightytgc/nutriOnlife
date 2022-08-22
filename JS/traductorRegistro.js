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
        diccionarioSeccionFormEspaniol. forEach ((palabra, i) =>{ //traduccion formulario español
            let id = i + 6;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        })
        botonesEspaniol.forEach ((palabra, i) =>{ //traduccion botones español
            let id = i + 12;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        })
        creditospEspaniol.forEach ((palabra, i) =>{ //traduccion creditos español
            let id = i + 14;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        })
        diccionarioFooterEspaniol.forEach ((palabra, i) =>{ //traduccion footer español
            let id = i + 15;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        })


        //TRADUCCIONES INGLES

    } else if (idioma == "eng") { //traduccion nav
        diccionarioNavIngles.forEach ((palabra, i) =>{ //traduccion nav ingles
            let id = i + 1;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        } ) 
        diccionarioSeccionFormIngles. forEach ((palabra, i) =>{ //traduccion formulario ingles
            let id = i + 6;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        })
        botonesIngles.forEach ((palabra, i) =>{ //traduccion botones ingles
            let id = i + 12;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        })
        creditospIngles.forEach ((palabra, i) =>{ //traduccion creditos inglés
            let id = i + 14;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        })
        diccionarioFooterIngles.forEach ((palabra, i) =>{ //traduccion footer ingles
            let id = i + 15;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        })

    }
}



//arreglo nav
let diccionarioNavIngles = ["Home", "Log in", "Change language", "Spanish", "English"];
let diccionarioNavEspaniol = ["Inicio", "Iniciar sesión", "Cambiar idioma", "Español", "Inglés"];


//arreglo credito
let diccionarioCreditoEspaniol = ["Imagen de fondo extraída de pexels.com"];
let diccionarioCreditoIngles = ["Background image taken from pexels.com"];

//diccioario
let botonesEspaniol = ["Registrarse", "Regresar"];
let botonesIngles = ["Back","Sign in" ];

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
let diccionarioSeccionFormIngles = ["Sign in", "Type your names <input type=\"text\">", 
"Type ypur lastnames <input type=\"text\">", "Type your email <input type=\"email\">", 
"Type your password <input type=\"password\">", "Enter your phone number (optional) <input type=\"text\">" ];
let diccionarioSeccionFormEspaniol = ["Registrarse", "Digite sus nombres <input type=\"text\">", "Digite sus apellidos <input type=\"text\">",
"Digite su correo electronico <input type=\"mail\">", "Digite su contraseña <input type=\"password\">", "Digite su número telefónico (opcional) <input type=\"text\">"];

let creditospIngles = ["Background image taken from pexels.com"]
let creditospEspaniol = ["Imagen de fondo extraida de pexels.com"]