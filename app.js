const sections = document.querySelectorAll(".section");
const sectionButtons = document.querySelectorAll(".controlls");
const secBtns = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransition() {
  // Button click active class
  for (let i = 0; i < secBtns.length; i++) {
    secBtns[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        " active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }
  // Sections active class
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      // remove selected from the other buttons
      sectionButtons.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      // hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

PageTransition();
