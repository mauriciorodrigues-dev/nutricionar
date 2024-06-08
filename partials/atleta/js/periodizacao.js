const btPeriod = document.querySelector("#btnIniciar");
const inpTeste = document.querySelector("#teste");

btPeriod.addEventListener("click", function () {
  const inpDate = document.querySelector("#periodData").value;
  inpTeste.innerHTML = `Iniciando a Periodização em ${inpDate}`;
});
