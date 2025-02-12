var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;

function ajustaJanelaJogo() {
  altura = window.innerHeight;
  largura = window.innerWidth;
}

ajustaJanelaJogo();

var cronometro = setInterval(function () {
  tempo -= 1;

  if (tempo < 0) {
    clearInterval(cronometro);
    clearInterval(criaMosca);
    alert("Vitoria");
  } else {
    document.getElementById("cronometro").innerHTML = tempo;
  }
}, 1000);

function posicaoRandom() {
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();

    if (vidas > 3) {
      window.location.href = "fim_jogo.html";
    } else {
      document.getElementById("v" + vidas).src = "img/coracao_vazio.png";

      vidas++;
    }
  }

  var posicaoX = Math.floor(Math.random() * largura) - 90;
  var posicaoY = Math.floor(Math.random() * altura) - 90;

  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  console.log(posicaoX, posicaoY);

  var mosquito = document.createElement("img");
  mosquito.src = "img/mosca.png";
  mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();
  mosquito.style.left = posicaoX + "px";
  mosquito.style.top = posicaoY + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  mosquito.onclick = function () {
    this.remove();
  };

  document.body.appendChild(mosquito);
}

function tamanhoAleatorio() {
  var classe = Math.floor(Math.random() * 3);

  switch (classe) {
    case 0:
      return "mosquito01";

    case 1:
      return "mosquito02";

    case 2:
      return "mosquito03";
  }
}

function ladoAleatorio() {
  var classe = Math.floor(Math.random() * 2);

  switch (classe) {
    case 0:
      return "ladoA";

    case 1:
      return "ladoB";
  }
}
