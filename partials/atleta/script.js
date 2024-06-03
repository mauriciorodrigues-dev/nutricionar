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

//Carrousel
document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const slides = document.querySelector(".gallery");
  const totalSlides = slides.children.length;
  const visibleSlides = totalSlides / 2; // Porque duplicamos

  function showSlide(index) {
    if (index >= totalSlides - visibleSlides) {
      slides.style.transition = "none";
      currentIndex = index - visibleSlides;
      slides.style.transform = `translateX(${
        (-currentIndex * 100) / visibleSlides
      }%)`;
      setTimeout(() => {
        slides.style.transition = "transform 0.5s ease-in-out";
        currentIndex++;
        slides.style.transform = `translateX(${
          (-currentIndex * 100) / visibleSlides
        }%)`;
      }, 50);
    } else if (index < 0) {
      slides.style.transition = "none";
      currentIndex = totalSlides - visibleSlides;
      slides.style.transform = `translateX(${
        (-currentIndex * 100) / visibleSlides
      }%)`;
      setTimeout(() => {
        slides.style.transition = "transform 0.5s ease-in-out";
        currentIndex--;
        slides.style.transform = `translateX(${
          (-currentIndex * 100) / visibleSlides
        }%)`;
      }, 50);
    } else {
      currentIndex = index;
      slides.style.transform = `translateX(${
        (-currentIndex * 100) / visibleSlides
      }%)`;
    }
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  document.querySelector(".btn-next").addEventListener("click", nextSlide);
  document.querySelector(".btn-prev").addEventListener("click", prevSlide);

  // Iniciar carrossel no índice zero
  showSlide(currentIndex);
});
