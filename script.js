// =====================
// EFEITO DE DIGITAÇÃO
// =====================
const textos = [
  "Automação Industrial",
  "Inteligência Artificial",
  "Desenvolvimento Web",
  "Criador de Soluções"
];

let indicTexto = 0;
let indicLetra = 0;
let digitando = true;

const elementoDigitacao = document.querySelector(".digitacao");

// Cria o cursor piscante
const cursor = document.createElement("span");
cursor.classList.add("cursor");
cursor.textContent = "_";
elementoDigitacao.after(cursor);

function digitar() {
  const textoAtual = textos[indicTexto];

  if (digitando) {
    elementoDigitacao.textContent = textoAtual.substring(0, indicLetra + 1);
    indicLetra++;

    if (indicLetra === textoAtual.length) {
      digitando = false;
      setTimeout(digitar, 2000);
      return;
    }
  } else {
    elementoDigitacao.textContent = textoAtual.substring(0, indicLetra - 1);
    indicLetra--;

    if (indicLetra === 0) {
      digitando = true;
      indicTexto = (indicTexto + 1) % textos.length;
    }
  }

  setTimeout(digitar, digitando ? 80 : 40);
}

digitar();

// =====================
// ANIMAÇÃO DE ENTRADA DAS SEÇÕES
// =====================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visivel");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll("section:not(.hero)").forEach(sec => {
  observer.observe(sec);
});