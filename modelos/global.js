//Criando um botão de login


function logar() {

  const nome = document.querySelector("#nome").value;
  const senha = document.querySelector("#senha").value;

  if (nome == "admin" && senha == "123") {
    alert("Logado com sucesso!");
    window.location.href = "modelos/principal.html";
  } else {
    alert("Usuário ou Senha incorreto! Tente novamente.");
  }
}

//Adicionando o evento click no botao de clicar para ch
