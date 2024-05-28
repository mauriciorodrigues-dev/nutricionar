function entrarModoTelaCheia() {
  let elemento = document.documentElement;

  if (elemento.requestFullscreen) {
    elemento.requestFullscreen();
  } else if (elemento.mozRequestFullScreen) {
    elemento.mozRequestFullScreen();
  } else if (elemento.webkitRequestFullscreen) {
    elemento.webkitRequestFullscreen();
  } else if (elemento.msRequestFullscreen) {
    elemento.msRequestFullscreen();
  }
}

function move() {
  return new Promise((resolve, reject) => {
    let elem = document.getElementById("myBar");
    let width = 0;
    let id = setInterval(frame, 50);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        resolve();
      } else {
        width++;
        elem.style.width = width + "%";
        document.getElementById("label").innerHTML = width + "%";
      }
    }
  });
}

function mostrarSecao(idAtual, idProxima) {
  if (idAtual) {
    let secaoAtual = document.getElementById(idAtual);
    secaoAtual.style.display = "none";
  }
  let secaoProxima = document.getElementById(idProxima);
  secaoProxima.style.display = "block";
  secaoProxima.scrollIntoView({ behavior: "smooth" });
}

function iniciarSequencia() {
  move().then(() => {
    mostrarSecao(null, 'sct-login');
    document.getElementById('cont-main').style.display = 'none';
    setTimeout(() => {
      mostrarSecao('sct-login', 'tela-login');
    }, 5000);
  });
}

function confirmarSaida() {
  if (confirm("Gostaria realmente de sair do Nutricionar?")) {
    window.close();
  }
}