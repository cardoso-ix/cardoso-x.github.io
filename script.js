// Efeito de aparecimento suave ao rolar a página
const secoes = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visivel');
    }
  });
}, { threshold: 0.2 });

secoes.forEach(secao => {
  observer.observe(secao);
});