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
          .forEach((section) => section.classList.remove("activee"));

        // Add activee class to the selected section
        document.getElementById(sectionId).classList.add("activee");

        // Add or remove the activee class from the footer
        if (sectionId === 'atleta__home') {
          footer.classList.remove('activee');
        } else {
          footer.classList.add('activee');
        }
      });
    }
  });

  // Initial check to hide the footer if the initial activee section is "Home"
  if (document.getElementById('atleta__home').classList.contains('activee')) {
    footer.classList.remove('activee');
  } else {
    footer.classList.add('activee');
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('.btn');
  const footer = document.querySelector('footer');

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove activee class from all sections
      document
        .querySelectorAll(".section")
        .forEach((section) => section.classList.remove("activee"));

      // Get the section ID from the data-section attribute
      const sectionId = button.getAttribute('data-section');
      
      // Add activee class to the selected section
      document.getElementById(sectionId).classList.add("activee");

      // Show or hide the footer based on the section
      if (sectionId === 'atleta__home') {
        footer.classList.remove('activee');
      } else {
        footer.classList.add('activee');
      }
    });
  });

  // Initial check to hide the footer if the initial activee section is "Home"
  if (document.getElementById('atleta__home').classList.contains('activee')) {
    footer.classList.remove('activee');
  } else {
    footer.classList.add('activee');
  }
});



// const faqs = document.querySelectorAll(".faq");

// faqs.forEach((faq) => {
//   faq.addEventListener("click", () => {
//     faq.classList.toggle("active");
//   });
// });

//Carrousel
let slideIndex = 0;
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



showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 8000); // Change image every 2 seconds
}