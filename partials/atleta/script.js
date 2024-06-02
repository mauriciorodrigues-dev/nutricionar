document.addEventListener("DOMContentLoaded", function () {
  const buttons = {
    btnDashboard: "atleta__dashboard",
    btnTreino: "atleta__treino",
    btnDieta: "atleta__dieta",
    btnMedidas: "atleta__medidas",
    btnHome: "atleta__medidas",
  };

  Object.keys(buttons).forEach((buttonId) => {
    document.getElementById(buttonId).addEventListener("click", function () {
      // Remove active class from all sections
      document
        .querySelectorAll(".section")
        .forEach((section) => section.classList.remove("active"));

      // Add active class to the selected section
      document.getElementById(buttons[buttonId]).classList.add("active");
    });
  });
});

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
