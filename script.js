alert("chupenme la pija");
var botonEncriptar = document.querySelector(".btnEncriptar");
var botonDesencriptar = document.querySelector(".btnDesencriptar");
var mono = document.querySelector(".mono");
var contenedor = document.querySelector(".previo");
var resultado = document.querySelector(".textoResultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var textoPrincipal = recuperarTexto();
    resultado.textContent = encriptarTexto(textoPrincipal);
}

function desencriptar(){
    ocultarAdelante();
    var textoPrincipal = recuperarTexto();
    resultado.textContent = desencriptarTexto(textoPrincipal);
}

function recuperarTexto(){
    var textoPrincipal = document.querySelector(".textoPrincipal");
    return textoPrincipal.value;
}

function ocultarAdelante(){
    mono.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
    
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const botonCopiar = document.querySelector(".btnCopiar");
    botonCopiar.addEventListener("click", copiar = () => {
        var contenido = document.querySelector(".textoResultado").textContent;
        navigator.clipboard.writeText(contenido);
        console.log("hola");
    });