function move() {
  var elem = document.getElementById("myBar");   
  var width = 0;
  var id = setInterval(frame, 50);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      document.getElementById("label").innerHTML = width * 1  + '%'; // Atualiza o contador
    }
  }
}

function entrarModoTelaCheia() {
  var elemento = document.documentElement;

  if (elemento.requestFullscreen) {
      elemento.requestFullscreen();
  } else if (elemento.mozRequestFullScreen) { /* Firefox */
      elemento.mozRequestFullScreen();
  } else if (elemento.webkitRequestFullscreen) { /* Chrome, Safari e Opera */
      elemento.webkitRequestFullscreen();
  } else if (elemento.msRequestFullscreen) { /* IE/Edge */
      elemento.msRequestFullscreen();
  }
}

window.onload = function() {
  var resposta = confirm("Esta página funciona melhor em tela cheia. Clique em OK para entrar em modo de tela cheia.");
  if (resposta) {
      entrarModoTelaCheia();
  }
};