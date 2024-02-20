var codificador = "";
var decodificador = "";
var quantidadePalavras;
var palavra = "ola pessoal"

function copiarTexto(tipo){
    codificador = document.querySelector(".codificador").value;
    decodificador = document.querySelector(".decodificador").value;
    if (tipo == "codificador"){
    navigator.clipboard.writeText(codificador)
} else {
        navigator.clipboard.writeText(decodificador);
    }
}

async function colarTexto(tipo){    
    codificador = document.querySelector(".codificador");
    decodificador = document.querySelector(".decodificador");
    if (tipo == "codificador"){
        const colar = await navigator.clipboard.readText();
        codificador.value = colar;
    } else { 
        const colar = await navigator.clipboard.readText();
        decodificador.value = colar;
    }
}

function decodificarTexto(){
    codificador = document.querySelector(".codificador");
    var textoDecodificado = String(document.querySelector(".decodificador").value);
    textoDecodificado = textoDecodificado.replace(/ai/g, "a");
    textoDecodificado = textoDecodificado.replace(/enter/g, "e");
    textoDecodificado = textoDecodificado.replace(/imes/g, "i");
    textoDecodificado = textoDecodificado.replace(/ober/g, "o");
    textoDecodificado = textoDecodificado.replace(/ufat/g, "u");
    codificador.value = textoDecodificado;
    console.log(codificador);
}

function codificarTexto(){
    let textoCodificado = "";
    codificador = String(document.querySelector(".codificador").value);
    decodificador = document.querySelector(".decodificador");
    quantidadePalavras = codificador.length;
    decodificador.value = "";
    for (let index = 0; index < quantidadePalavras; index++) {
        switch (codificador[index]) {
            case "a":
                textoCodificado += "ai";
                break;
            case "e":
                textoCodificado += "enter";
                break;
            case "i":
                textoCodificado += "imes";
                break;
            case "o":
                textoCodificado += "ober";
                break;
            case "u":
                textoCodificado += "ufat";
                break;
        
            default:
                textoCodificado += codificador[index];
                break;
        }
    }
    decodificador.value = textoCodificado;
}