const loginButton = document.getElementById('login');
const loginContainer = document.querySelector('.login-container');

loginButton.addEventListener('click', function() {
  loginContainer.classList.add('show');
});

// Como criar um toggle com essa classe show?


// como acessar uma página do projeto atraves de um botão?

document.querySelector('#logar').addEventListener('click', function() {
  window.location.href = '../../atleta/modelo.html';
});