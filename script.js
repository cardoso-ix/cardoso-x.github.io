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

const elementoDigitacao = document.querySelector(".hero p");

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
// CURSOR PISCANTE
// =====================
const cursor = document.createElement("span");
cursor.textContent = "_";
cursor.style.color = "#00ffff";
cursor.style.textShadow = "0 0 8px #00ffff";
cursor.style.fontWeight = "bold";
cursor.style.animation = "piscar 0.8s step-end infinite";
elementoDigitacao.after(cursor);

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

document.querySelectorAll("section").forEach(sec => {
  if (!sec.classList.contains("hero")) {
    observer.observe(sec);
  } else {
    sec.classList.add("visivel");
  }
});