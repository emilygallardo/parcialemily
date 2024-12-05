const track = document.querySelector('.carousel-track');
const dots = Array.from(document.querySelectorAll('.dot'));
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const slideWidth = 391 + 10; // Ancho de cada imagen más el margen derecho
const positions = [0, 2, 4, 5]; // Índices iniciales de cada grupo
let currentIndex = 0;

// Función para actualizar la posición del carrusel
function updateCarousel() {
  const offset = positions[currentIndex] * slideWidth;
  track.style.transform = `translateX(-${offset}px)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

// Flecha derecha
rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % positions.length;
  updateCarousel();
});

// Flecha izquierda
leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + positions.length) % positions.length;
  updateCarousel();
});

// Clic en los puntos
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});
