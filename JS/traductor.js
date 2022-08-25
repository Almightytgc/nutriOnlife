//estructura general

// function traducir (element) {
//     /*console.log(element);*/ 
//     let idioma = element.id;
//     if (idioma == "esp") {
//         diccionarioNavEspaniol.forEach ((palabra, i) =>{
//             let id = i + 1;
//             id = "" + id;
//             document.getElementById(id).innerHTML = palabra;
//         } ) 
// } else if (idioma == "eng") { //traduccion nav
//     diccionarioNavIngles.forEach ((palabra, i) =>{
//         let id = i + 1;
//         id = "" + id;
//         document.getElementById(id).innerHTML = palabra;
//     } ) 


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
        diccionarioSeccion1Espaniol.forEach ((palabra, i) =>{ //traduccion seccion 1 español
            let id = i + 6;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra; 
        })
        diccionarioSeccion2Espaniol.forEach ((palabra, i) =>{ //traduccion seccion 2 español
            let id = i + 10;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra; 
        })
        diccionarioSeccion3Espaniol.forEach ((palabra, i) =>{ //traduccion seccion 3 español
            let id = i + 12;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra; 
        })
        diccionarioSeccion4Espaniol.forEach ((palabra, i) =>{ //traduccion seccion 4 espaniol
            let id = i + 18;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        })
        diccionarioSeccion5Espaniol. forEach ((palabra, i) =>{ //traduccion seccion 5 español
            let id = i + 28;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        })
        diccionarioSeccion6Espaniol. forEach ((palabra, i) =>{ //traduccion seccion 6 español
            let id = i + 35;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        })
        diccionarioSeccion7Espaniol. forEach ((palabra, i) =>{ //traduccion seccion 7 español
            let id = i + 45;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        })
        diccionarioFooterEspaniol. forEach ((palabra, i) =>{ //traduccion footer español
            let id = i + 47;
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
        diccionarioSeccion1Ingles.forEach ((palabra, i) =>{ //traduccion seccion 1 ingles
            let id = i + 6;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra; 
        })
        diccionarioSeccion2Ingles.forEach ((palabra, i) =>{ //traduccion seccion 2 español
            let id = i + 10;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra; 
        })
        diccionarioSeccion3Ingles.forEach ((palabra, i) =>{ //traduccion seccion 3 ingles
            let id = i + 12;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra; 
        })
        diccionarioSeccion4Ingles. forEach ((palabra, i) =>{ //traduccion seccion 4 ingles
            let id = i + 18;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        })
        diccionarioSeccion5Ingles. forEach ((palabra, i) =>{ //traduccion seccion 5 ingles
            let id = i + 28;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        })
        diccionarioSeccion6Ingles. forEach ((palabra, i) =>{ //traduccion seccion 6 ingles
            let id = i + 35;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        })
        diccionarioSeccion7Ingles. forEach ((palabra, i) =>{ //traduccion seccion 7 ingles
            let id = i + 45;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        })
        diccionarioFooterIngles. forEach ((palabra, i) =>{ //traduccion footer ingles
            let id = i + 47;
            id = "" + id;
            document.getElementById(id).innerHTML = palabra;
        })
    }
}

//arreglos

//arreglo nav
let diccionarioNavIngles = ["Sign in", "Log in", "Change language", "Spanish", "English"];
let diccionarioNavEspaniol = ["Registrarse", "Iniciar sesión", "Cambiar idioma", "Español", "Inglés"];


//arreglo seccion 1

let diccionarioSeccion1Espaniol = [
    "Un exterior saludable inicia en tu interior",
    "Con NutriOnlife aprende a ejercitarte y alimentarte de forma consciente. Te brindaremos dietas y ejercicios según tus datos.", 
    "Recuerda que la mejor opción siempre será visitar a un nutricionista", 
    "Las imágenes utilizadas han sido extraída de pexels.com y unsplash.com"
];

let diccionarioSeccion1Ingles = [
    "A healthy exterior starts within you", 
    "With NutriOnlife learn to exercise and eat consciously. We will provide you with diets and exercises according to your data.", 
    "Remember that the best option will always be to visit a nutritionist", 
    "The images used have been extracted from pexels.com and unsplash.com"
];

//arreglo seccion 2
let diccionarioSeccion2Espaniol = [
    "¿Quiénes somos?", 
    "Somos una empresa que busca mejorar ser una ayuda práctica para aquellos que buscan cuidar de su salud  la salud, este proyecto surge con el pensar de lo importante que es tener un buen estado físico y una alimentación saludable para el diario vivir. <br><br> NutriOnLife es más que una herramienta, es un estilo de vida"
];
let diccionarioSeccion2Ingles = 
[
    "About us?",
    "We are a company that seeks to improve being a practical help for those who seek to take care of their health, this project arises from the thought of how important it is to have a good physical condition and a healthy diet for daily living. NutriOnLife is more than a tool, it is a lifestyle."
];

//arreglo seccion 3 (por qué elegir nutrionlife?)
let diccionarioSeccion3Espaniol = [
    "¿Por qué elegir NutriOnlife?",
    "Ejercicios desde tu casa y a tu ritmo",
    "Te brindaremos distintos ejercicios prácticos, sencillos, efectivos para mejorar tus condiciones físicas y tener una vida más activa",
    "Dieta personalizada",
    "Te diseñaremos una saludable dieta personalizada para ayudarte a perder peso de forma rápida y equilibrada,  asi mismo brindandoteuna serie de ejercicios para mantenerte en forma y mejorar tus condiciones salud.",
    "Recuerda que la mejor opción siempre será visitar a un nutricionista"
];
let diccionarioSeccion3Ingles = [
    "Why choose NutriOnlife?",
    "Exercises from home and at your own pace",
    "We will provide you with different practical, simple, effective exercises to improve your physical conditions and have a more active life.",
    "personalized diet",
    "We will design a healthy personalized diet to help you lose weight quickly and in a balanced way, as well as providing you with a series of exercises to keep you fit and improve your health conditions.",
    "Remember that the best option will always be to visit a nutritionist"
];


//arreglo seccion 4 (por que realizar plan nutricional)
let diccionarioSeccion4Espaniol = [
    "¿Por qué realizar un plan nutricional?",
    "Porque un plan nutricional le ayudará a:",
    "Mejorar su salud física y mental",
    "Tener más energía","Descansar mejor",
    "Disminuir el estrés y la ansiedad",
    "Fortalecer los Huesos y músculos",
    "Estimular el sistema inmune",
    "Ayudar al funcionamiento del sistema digestivo",
    "Reducir el riesgo de las enfermedades del corazón, la diabetes tipo 2 y algunos tipos de cáncer"
]

let diccionarioSeccion4Ingles = [
    "Why make a nutritional plan?", 
    "Because a nutritional plan will help you:", 
    "Improve your physical and mental health.", 
    "Have more energy.", 
    "Rest better.", 
    "Reduce stress and anxiety.", 
    "Strengthen bones and muscles.", 
    "Stimulate the immune system.", 
    "Help the functioning of the digestive system.", 
    "Reduce the risk of heart disease, type 2 diabetes, and some types of cancer."
    ];


//arreglo seccion 5 
let diccionarioSeccion5Espaniol = [
    "Imagen extraída de pexels.com", 
    "Tips para evitar exceso de hambre", 
    "Tomar abundante agua", 
    "Evitar el estrés", 
    "Evitar bebidas azucaradas", 
    "Consuma más fibra", 
    "Coma fruta"
    ];

let diccionarioSeccion5Ingles = [
    "Image taken from pexels.com", 
    "Tips to avoid excess hunger", 
    "Drink enough water", 
    "Avoid stress", 
    "Avoid sugary drinks",
    "Eat more fiber", 
    "Eat fruit"
    ];

//arreglo seccion 6
let diccionarioSeccion6Espaniol = [
    "Alimentos que benefician al cerebro", 
    "Una de las principales necesidades del cuerpo para rendir al máximo es a través de una buena alimentación. A continuación algunos alimentos que benefician a su cerebro:",
    "Nueces", "Salmón", "Yogurt", "Espinaca", 
    "Moras", "Fresas", "Menta", "Naranja", 
    "Cambios pequeños hacen grandes resultados", 
    "Recuerda que la mejor opción siempre será visitar a un nutricionista",
]; 

let diccionarioSeccion6Ingles = [
    "Foods that benefit the brain", 
    "One of the main needs of the body to perform at its best is through a good diet. Here are some foods that benefit your brain:", 
    "Walnuts", "Salmon", "Yogurt", "Spinach", "Blackberries", 
    "Strawberry", "Mint", "Oranje", "Small changes make big results", 
    "Remember that the best option will always be to visit a nutritionist."
];

//arreglo seccion 7

let diccionarioSeccion7Espaniol = [
    "Cambios pequeños hacen grandes resultados", 
    "Recuerda que la mejor opción siempre será visitar a un nutricionista"
];

let diccionarioSeccion7Ingles = [
    "Small changes make big results", 
    "Remember that the best option will always be to visit a nutritionist"
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


