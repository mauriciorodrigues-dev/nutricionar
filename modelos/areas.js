// Gráfico de evolução de peso
// Seus dados de peso corporal (substitua pelos seus próprios dados)
var dadosPeso = [65, 67, 68, 70, 72, 71, 73, 79];

// Configurar o contexto do gráfico
var ctx = document.getElementById("grafico-peso").getContext("2d");

// Criar o gráfico de linha
var graficoPeso = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Semana 1",
      "Semana 2",
      "Semana 3",
      "Semana 4",
      "Semana 5",
      "Semana 6",
      "Semana 7",
      "Semana 8",
    ],
    datasets: [
      {
        label: "Peso na Semana",
        data: dadosPeso,
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  },
});

//Consumo diário de macronutrientes - Gráfico
const graficoMacros = {
  labels: ["Gordura", "Proteína", "Carbo"],
  datasets: [
    {
      label: " Quantidade (%)",
      data: [20, 30, 50],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

let ctc2 = document.getElementById("grafico-macros").getContext("2d");

const config = {
  type: "doughnut",
  data: graficoMacros,
};

const grafico = new Chart(ctc2, config);

//Consumo calórico - Gráfico

var dadosKcal = [2650, 2750, 2820, 2870, 2955, 3098, 3115, 3250];

// Configurar o contexto do gráfico
var ctx = document.getElementById("grafico-kcal").getContext("2d");

// Criar o gráfico de linha
var graficoKcal = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Semana 1",
      "Semana 2",
      "Semana 3",
      "Semana 4",
      "Semana 5",
      "Semana 6",
      "Semana 7",
      "Semana 8",
    ],
    datasets: [
      {
        label: "Kcal",
        data: dadosKcal,
        borderColor: "#92FE9D",
        backgroundColor: ["#92FE9D"],
        borderWidth: 2,
        fill: false,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  },
});

// menu mobile
function toggleMenu() {
  const menuMobile = document.querySelector('#menuMobile');
  if(menuMobile.className ==='menu-mobile-active'){
    menuMobile.className='menu-mobile'
  }else{
    menuMobile.className='menu-mobile-active'
  }
}

