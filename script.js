// ==============================
// MENU MOBILE
// ==============================
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// ==============================
// ANIMAÇÃO AO ROLAR
// ==============================
const reveals = document.querySelectorAll('.reveal');

function revealElements() {
  const windowHeight = window.innerHeight;

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealElements);
revealElements();

// ==============================
// CONTADOR ANIMADO
// ==============================
const counters = document.querySelectorAll('.counter');

const startCounter = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const increment = target / 200;

    const updateCounter = () => {
      const current = +counter.innerText;

      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}`;
        setTimeout(updateCounter, 15);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
};

// inicia ao aparecer
let started = false;

window.addEventListener('scroll', () => {
  const statsSection = document.querySelector('.stats');

  const sectionTop = statsSection.offsetTop;

  if (scrollY > sectionTop - 500 && !started) {
    startCounter();
    started = true;
  }
});

// ==============================
// BOTÃO VOLTAR AO TOPO
// ==============================
const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {

  if (window.scrollY > 300) {
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }
});

topBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ==============================
// VALIDAÇÃO FORMULÁRIO
// ==============================
const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Preencha todos os campos.');
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    alert('Digite um e-mail válido.');
    return;
  }

  alert('Mensagem enviada com sucesso!');

  form.reset();
});