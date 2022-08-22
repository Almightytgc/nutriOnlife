let español, english;

lang = sessionStorage.getItem("lang");
console.log(lang)

if(!lang){
    lang = sessionStorage.setItem("lang", "es");
}

español = [];
english = [];
english[0] = [];
español[0] = [];


english[0]["titulo"] = "Translate this";
english[0]["parrafo"] = "Hello People";
english[0]["elegir"] = "Select Language";


español[0]["titulo"] = "Traduce esto";
español[0]["parrafo"] = "Hola Gente";
español[0]["elegir"] = "Elegir Idioma";

let elementosTraducir= ["titulo", "parrafo", "elegir"]

function  traducir(element) {
    console.log(element)
    if(element.id == "idioma-ingles"){   
        // element.src = "en.webp";

       sessionStorage.setItem("lang", "en");
       lang = sessionStorage.getItem("lang");
        

       elementosTraducir.forEach((element, i) =>{
        document.getElementById(elementosTraducir[i]).innerHTML = english[0][elementosTraducir[i]]
    })


    }
    else if(element.id == "idioma-español"){
       sessionStorage.setItem("lang", "es");
       lang = sessionStorage.getItem("lang");
    //    element.src = "es.webp";


       elementosTraducir.forEach((element, i) =>{

    
        document.getElementById(elementosTraducir[i]).innerHTML = español[0][elementosTraducir[i]]
    })

    }
    console.log(lang)
}

document.querySelector(".wrapper-caja").addEventListener("click", ()=>{
    document.querySelector(".options").classList.toggle("mostrar");
})