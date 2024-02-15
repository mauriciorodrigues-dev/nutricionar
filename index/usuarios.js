//Criando um botão de login
const usuarios = [
  { user: "Mauricio", pass: "1234", pagina: "user___.html" },
  { user: "gabriel", pass: "1235", pagina: "principal2.html" },
  { user: "usuario3", pass: "1236", pagina: "principal3.html" },
];

function logar() {
  const nome = document.querySelector("#nome").value;
  const senha = document.querySelector("#senha").value;

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].user === nome && usuarios[i].pass === senha) {
      alert("Logado com sucesso!");
      window.location.href = "modelos/" + usuarios[i].pagina;
      return; // Sai da função após encontrar correspondência
    }
  }

  // Se o loop não encontrar correspondência
  alert("Usuário ou Senha incorreto! Tente novamente.");
}