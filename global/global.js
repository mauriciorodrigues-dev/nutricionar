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

