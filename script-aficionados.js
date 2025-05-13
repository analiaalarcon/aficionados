  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }
  });
  document.querySelectorAll("section:not(.hero-section)").forEach(sec => {
    sec.classList.add("fade-in-up");
  });
  
const sections = document.querySelectorAll('.section');


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
 
  threshold: 0.60 
});

sections.forEach(section => {
  observer.observe(section);
});

  
