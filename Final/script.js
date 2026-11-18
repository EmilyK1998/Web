
  const slides = Array.from(document.querySelectorAll(".slide"));
  const status = document.querySelector("#slide-status");
  let currentIndex = 0;

  function showSlide(index) {
    slides[currentIndex].classList.remove("is-active");
    currentIndex = (index + slides.length) % slides.length;
    slides[currentIndex].classList.add("is-active");
    status.textContent = `${currentIndex + 1} / ${slides.length}`;
  }

  document.querySelector("#previous").addEventListener("click", () => {
    showSlide(currentIndex - 1);
  });

  document.querySelector("#next").addEventListener("click", () => {
    showSlide(currentIndex + 1);
  });
  setInterval(() => showSlide(currentIndex + 1), 4000);