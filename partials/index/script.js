function entrarModoTelaCheia() {
  let elemento = document.documentElement;

  if (elemento.requestFullscreen) {
    elemento.requestFullscreen();
  } else if (elemento.mozRequestFullScreen) {
    /* Firefox */
    elemento.mozRequestFullScreen();
  } else if (elemento.webkitRequestFullscreen) {
    /* Chrome, Safari e Opera */
    elemento.webkitRequestFullscreen();
  } else if (elemento.msRequestFullscreen) {
    /* IE/Edge */
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
        resolve(); // Resolve a promise quando a animação estiver concluída
      } else {
        width++;
        elem.style.width = width + "%";
        document.getElementById("label").innerHTML = width * 1 + "%"; // Atualiza o contador
      }
    }
  });
}

function mostrarSecao(id) {
  let secao = document.getElementById(id);
  let lgn = document.getElementsByClassName('.container-main')
  secao.style.display = "block";
  secao.scrollIntoView({ behavior: "smooth" });
  lgn.style.display = 'none'
}
