document.addEventListener("DOMContentLoaded", function () {
  const buttons = {
    btnDashboard: "atleta__dashboard",
    btnTreino: "atleta__treino",
    btnHome: "atleta__home",
    btnDieta: "atleta__dieta",
  };

  const footer = document.querySelector('footer');

  Object.keys(buttons).forEach((buttonId) => {
    const buttonElement = document.getElementById(buttonId);
    const sectionId = buttons[buttonId];
    
    if (buttonElement && document.getElementById(sectionId)) {
      buttonElement.addEventListener("click", function () {
        // Remove active class from all sections
        document
          .querySelectorAll(".section")
          .forEach((section) => section.classList.remove("active"));

        // Add active class to the selected section
        document.getElementById(sectionId).classList.add("active");

        // Add or remove the active class from the footer
        if (sectionId === 'atleta__home') {
          footer.classList.remove('active');
        } else {
          footer.classList.add('active');
        }
      });
    }
  });

  // Initial check to hide the footer if the initial active section is "Home"
  if (document.getElementById('atleta__home').classList.contains('active')) {
    footer.classList.remove('active');
  } else {
    footer.classList.add('active');
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('.btn');
  const footer = document.querySelector('footer');

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all sections
      document
        .querySelectorAll(".section")
        .forEach((section) => section.classList.remove("active"));

      // Get the section ID from the data-section attribute
      const sectionId = button.getAttribute('data-section');
      
      // Add active class to the selected section
      document.getElementById(sectionId).classList.add("active");

      // Show or hide the footer based on the section
      if (sectionId === 'atleta__home') {
        footer.classList.remove('active');
      } else {
        footer.classList.add('active');
      }
    });
  });

  // Initial check to hide the footer if the initial active section is "Home"
  if (document.getElementById('atleta__home').classList.contains('active')) {
    footer.classList.remove('active');
  } else {
    footer.classList.add('active');
  }
});



// const faqs = document.querySelectorAll(".faq");

// faqs.forEach((faq) => {
//   faq.addEventListener("click", () => {
//     faq.classList.toggle("active");
//   });
// });

//Carrousel
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 
