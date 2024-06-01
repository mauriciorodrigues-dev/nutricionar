// Dados para a tabela de informações iniciais
const initialData = [
  { label: "Nome Completo", value: "Mauricio Rodrigues" },
  { label: "Idade", value: "36 anos" },
  { label: "Gênero", value: "Masculino" },
  { label: "Peso Atual", value: "89kg" },
  { label: "Altura", value: "170cm" },
  { label: "IMC", value: "30.8 - Obesidade" },
  { label: "Objetivo", value: "Cutting" }
];

// Dados para a tabela TMB
const tmbData = [
  { label: "FA", value: "1.6" },
  { label: "Fórm Usada", value: "Herris-Benedict" },
  { label: "Estratégia", value: "High Carb/Protein Media/Low Fat" },
  { label: "TMB", value: "1899 cal" },
  { label: "GET", value: "3038 kcal" },
  { label: "Déf / Sup", value: "Défict - 750kcal" },
  { label: "VET", value: "2288 kcal" }
];

// Função para popular a tabela
function populateTable(tableId, data) {
  const table = document.getElementById(tableId);
  data.forEach(item => {
      const row = document.createElement("tr");

      const cellLabel = document.createElement("td");
      cellLabel.className = "bold";
      cellLabel.textContent = item.label;
      row.appendChild(cellLabel);

      const cellValue = document.createElement("td");
      cellValue.textContent = item.value;
      row.appendChild(cellValue);

      table.appendChild(row);
  });
}

// Populando as tabelas com os dados
populateTable("d_initial", initialData);
populateTable("tmb_calc", tmbData);
