const VALOR_ENCRIP_ENTR = "enter";
const VALOR_ENCRIP_IMES = "imes";
const VALOR_ENCRIP_AI = "ai";
const VALOR_ENCRIP_OBER = "ober";
const VALOR_ENCRIP_UFAT = "ufat";

const VALOR_DESENCRIP_ENTR = "e";
const VALOR_DESENCRIP_IMES = "i";
const VALOR_DESENCRIP_AI = "a";
const VALOR_DESENCRIP_OBER = "o";
const VALOR_DESENCRIP_UFAT = "u";

function actualizarTextoEncriptado(texto) {
    document.getElementById("texto").value = texto;
}

function actualizarMensaje(titulo, parrafo) {
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let Parrafo = document.getElementById("parrafo");

    tituloMensaje.textContent = titulo;
    Parrafo.textContent = parrafo;
}

function animateTypingEffect(element) {
    element.style.animation = 'typing 1s steps(40), blinking 0.5s step-end infinite alternate';
}

function encriptar() {
    let textoEntrada = document.getElementById("texto").value;
    let textoCifrado = textoEntrada
    .replace(/e/gi, VALOR_ENCRIP_ENTR)
    .replace(/i/gi, VALOR_ENCRIP_IMES)
    .replace(/a/gi, VALOR_ENCRIP_AI)
    .replace(/o/gi, VALOR_ENCRIP_OBER)
    .replace(/u/gi, VALOR_ENCRIP_UFAT);

    if (textoEntrada.length !== 0) {
    let textoElement = document.getElementById("texto");
    animateTypingEffect(textoElement);
    setTimeout(function () {
        actualizarTextoEncriptado(textoCifrado);
        actualizarMensaje("Texto Encriptado Con Éxito", "");
        textoElement.style.animation = ""; // Restablecer la animación
    }, 1000);
    } else {
    actualizarMensaje(
        "Ningún Mensaje Fue Encontrado",
        "Ingresa El Texto que Deseas Encriptar o desencriptar"
    );
    swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}

function desencriptar() {
    let textoEntrada = document.getElementById("texto").value;
    let textoDesencriptado = textoEntrada
    .replace(/enter/gi, VALOR_DESENCRIP_ENTR)
    .replace(/imes/gi, VALOR_DESENCRIP_IMES)
    .replace(/ai/gi, VALOR_DESENCRIP_AI)
    .replace(/ober/gi, VALOR_DESENCRIP_OBER)
    .replace(/ufat/gi, VALOR_DESENCRIP_UFAT);

    if (textoEntrada.length !== 0) {
    let textoElement = document.getElementById("texto");
    animateTypingEffect(textoElement);
    setTimeout(function () {
        actualizarTextoEncriptado(textoDesencriptado);
        actualizarMensaje("Texto Desencriptado Con Éxito", "");
        textoElement.style.animation = ""; // Restablecer la animación
    }, 1000);
    } else {
    actualizarMensaje(
        "Ningún Mensaje Fue Encontrado",
        "Ingresa El Texto que Deseas Encriptar o desencriptar"
    );
    swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}

