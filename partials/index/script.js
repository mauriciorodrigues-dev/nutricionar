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
    mostrarSecao(null, "sct-login");
    document.getElementById("cont-main").style.display = "none";
    setTimeout(() => {
      mostrarSecao("sct-login", "tela-login");
    }, 5000);
  });
}

function abrirDialogo() {
  let dialogo = document.getElementById("confirmacaoDialog");
  dialogo.showModal();
}

function confirmarSaidaDialog(confirmacao) {
  let dialogo = document.getElementById("confirmacaoDialog");
  dialogo.close();
  if (confirmacao) {
    window.close();
  } else {
    entrarModoTelaCheia(); // Retornar ao modo de tela cheia se o usuário cancelar
  }
}

// LOGIN
document.addEventListener("DOMContentLoaded", function () {
  const usuarios = [
    { user: "Mauricio", pass: "1234", pagina: "user___.html" },
    { user: "gabriel", pass: "1235", pagina: "principal2.html" },
    { user: "modelo", pass: "1234", pagina: "modelo.html" },
  ];

  document.getElementById("btn-login").addEventListener("click", logar);

  function logar() {
    const nome = document.querySelector("#nome").value;
    const senha = document.querySelector("#senha").value;

    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].user === nome && usuarios[i].pass === senha) {
        alert("Logado com sucesso!");
        window.location.href = "partials/atleta/" + usuarios[i].pagina;
        return; // Sai da função após encontrar correspondência
      }
    }

    // Se o loop não encontrar correspondência
    alert("Usuário ou Senha incorreto! Tente novamente.");
  }

  function abrirDialogo() {
    // Ação para o botão "Sair"
    alert("Você clicou em sair");
  }
});

