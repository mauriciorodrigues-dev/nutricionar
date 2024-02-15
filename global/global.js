
//Função que cumprimenta o atleta conforme o horário
document.addEventListener("DOMContentLoaded", function() {
  saudacao();
});

function saudacao() {
  const saud = document.querySelector("#saudacao");

  // Pegar Hora do sistema e criar uma saudação para o usuário
  let data = new Date(); // Pega a hora atual do sistema
  let horas = data.getHours(); // Obtém as horas da data

  if (horas >= 12 && horas < 18) {
    saud.innerHTML = "Boa Tarde, Mauricio!";
  } else if (horas >= 18) {
    saud.innerHTML = "Boa Noite, Mauricio!";
  } else {
    saud.innerHTML = "Bom Dia, Mauricio!";
  }
}


//função que comanda a troca de abas dentro da página do atleta
function ativarLinkDaSecaoAtiva() {
  // Pega a seção ativa
  var secaoAtiva = document.querySelector('.secao.ativo');

  // Remove a classe 'ativo' de todos os links na sidebar
  document.querySelectorAll('.sidebar a').forEach(link => {
    link.classList.remove('ativo');
  });

  // Adiciona a classe 'ativo' ao link correspondente na sidebar, se a seção estiver ativa
  if (secaoAtiva) {
    var secaoId = secaoAtiva.id;
    var linkAtivo = document.querySelector('.sidebar a[href="#' + secaoId + '"]');
    if (linkAtivo) {
      linkAtivo.classList.add('ativo');
    }
  }
}


function mostrarSecao(secao) {
  // Oculta todas as seções
  document.querySelectorAll('.secao').forEach(secaoItem => {
    secaoItem.style.display = 'none';
    secaoItem.classList.remove('ativo');
  });

  // Mostra apenas a seção desejada
  var secaoSelecionada = document.getElementById(secao);
  secaoSelecionada.style.display = 'block';
  secaoSelecionada.classList.add('ativo');

  // Ativa o link correspondente na sidebar
  ativarLinkDaSecaoAtiva();
}

// Inicialmente mostra a seção 'home'
mostrarSecao('home');





