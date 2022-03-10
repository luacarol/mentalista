const elementoResultado = document.getElementById("resultado");
const elementoChutar = document.getElementById("chutar");
const elementoChute = document.getElementById("valor");
const elementoVidas = document.getElementById("vidas");

Reiniciar();

function Reiniciar() {
    numeroSecreto = parseInt(Math.random() * 11);
    tentativas = 3;

    elementoChute.value = "";
    elementoResultado.innerHTML = "";
    elementoChutar.innerHTML = "Chutar";
    elementoChutar.setAttribute("onclick", "Chutar()");
    elementoChute.removeAttribute("disabled");
    elementoChute.setAttribute("class", " ");
    elementoChutar.setAttribute("class", "fundoAzul");

    console.log("RESPOSTA: " + numeroSecreto);
    document.body.style.backgroundImage = "url('https://i.imgur.com/y4XFv2r.jpg')";
    VerificaVidas();
}

function Chutar() {
    while(tentativas > 0) {
        const chute = parseInt(elementoChute.value);
        if(chute < 0 || chute > 10 || isNaN(chute)) {
            alert("Você deve chutar um número entre 0 e 10");
            return;
        }
        tentativas--; 
        if(chute == numeroSecreto) {
            elementoResultado.innerHTML = "Você ACERTOU!<br> Era o nº " + numeroSecreto;
            document.body.style.backgroundImage = "url('https://i.imgur.com/SPtLzzW.jpg')";
            elementoChute.setAttribute("class", "fundoVerde");
            ResetButton();
            return;
        }
        else if(numeroSecreto < chute && tentativas > 0) {
            elementoResultado.innerHTML = "É menor que "+ chute;
            VerificaVidas();
            return;
        }
        else if(numeroSecreto > chute && tentativas > 0) {
            elementoResultado.innerHTML = "É maior que " + chute;
            VerificaVidas();
            return;
        }
    }
    elementoResultado.innerHTML = "Você PERDEU!<br> Era o nº " + numeroSecreto;
    VerificaVidas();
    ResetButton();
}

function ResetButton() {
    elementoChutar.setAttribute("onclick", "Reiniciar()");
    elementoChute.setAttribute("disabled", "disabled");
    elementoChutar.innerHTML = "Reiniciar";
}

function VerificaVidas() {
    if(tentativas == 2) {
        elementoVidas.style.objectPosition = "-24px";
    }
    else if(tentativas == 1) {
        elementoVidas.style.objectPosition = "-48px";
    }
    else if(tentativas == 0) {
        elementoVidas.style.objectPosition = "-72px";
    }
    else {
        elementoVidas.style.objectPosition = "0px";
    }
}

// Código que chama a função chutar se o usuário apertar ENTER
elementoBotãoChutar.addEventListener("keyup", function(e) {
    var key = e.which || e.keyCode;
    if (key == 13) {
        Chutar();
    }
});