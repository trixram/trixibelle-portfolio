document.addEventListener("DOMContentLoaded", () => {
  const animatedTitles = document.querySelectorAll(".featured-title");

  window.addEventListener("scroll", () => {
    animatedTitles.forEach(title => {
      const titleTop = title.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.85;

      if (titleTop < triggerPoint) {
        title.classList.add("active");
      }
    });
  });
});
