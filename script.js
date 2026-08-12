const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active"));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add("active");
      }
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0
  }
);

sections.forEach((section) => observer.observe(section));
