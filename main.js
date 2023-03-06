//somecode snippets obtained from stack Overflow
function animateSections() {
  const sections = document.querySelectorAll(".section");
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    if (sectionTop < window.innerHeight && sectionBottom > 0) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  }

  const container = document.querySelector(".container");
  const secondSection = document.querySelector(".section:nth-child(2)");
  const secondSectionTop = secondSection.getBoundingClientRect().top;
  if (secondSectionTop < window.innerHeight && secondSectionTop > 0) {
    container.classList.add("bgChange");
  } else {
    container.classList.remove("bgChange");
  }
}

window.addEventListener("scroll", function () {
  requestAnimationFrame(animateSections);
});

animateSections();
