const container = document.getElementById('container');
const titulo = document.getElementById('titulo');

const CWidth = container.offsetWidth;
const CHeight = container.offsetHeight;

// Predefine los colores para reutilizarlos
const colors = [
  "rgb(96, 214, 41)",
  "rgb(72, 163, 30)",
  "rgb(63, 134, 31)",
  "rgb(79, 204, 21)",
];

if (!document.getElementById('global-keyframes')) {
  const keyframes = `
    @keyframes color-change-1 {
      0% { background-color: rgb(96, 214, 41); }
      50% { background-color: rgb(178, 34, 34); }
      100% { background-color: rgb(96, 214, 41); }
    }
    @keyframes color-change-2 {
      0% { background-color: rgb(72, 163, 30); }
      50% { background-color: rgb(124, 53, 2); }
      100% { background-color: rgb(72, 163, 30); }
    }
    @keyframes color-change-3 {
      0% { background-color: rgb(63, 134, 31); }
      50% { background-color: rgb(218, 165, 32); }
      100% { background-color: rgb(63, 134, 31); }
    }
    @keyframes color-change-4 {
      0% { background-color: rgb(79, 204, 21); }
      50% { background-color: rgb(209, 43, 43); }
      100% { background-color: rgb(79, 204, 21); }
    }
    @keyframes color-change-5 {
      0% { background-color: rgb(96, 214, 41); }
      50% { background-color: rgb(139, 69, 19); }
      100% { background-color: rgb(96, 214, 41); }
    }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.id = "global-keyframes";
  styleSheet.innerHTML = keyframes;
  document.head.appendChild(styleSheet);
}

for (let i = 0; i < 115; i++) {
  const numRandom = Math.floor(Math.random() * colors.length);
  const color = colors[numRandom];

  // Tamaño
  const randomWidth = Math.floor(Math.random() * 170) + 65;
  const randomHeight = randomWidth;

  // Posición
  const randomTop = Math.floor(Math.random() * (CHeight - randomHeight));
  const randomLeft = Math.floor(Math.random() * (CWidth - randomWidth));

  // Crear el div
  const newDiv = document.createElement('div');
  newDiv.style.cssText = `
    background-color: ${color};
    width: ${randomWidth}px;
    height: ${randomHeight}px;
    position: absolute;
    top: ${randomTop}px;
    left: ${randomLeft}px;
    border-radius: 50%;
    box-shadow: 7px 5px 20px rgba(0, 0, 0, 0.5);
  `;

  let shadowColor = `rgba(0, 0, 0, 0.5)`;
  newDiv.style.boxShadow = `7px 5px 20px ${shadowColor}`;

  // Aplicar la animación
  const animationName = `color-change-${Math.floor(Math.random() * 5) + 1}`;
  newDiv.style.animation = `${animationName} 20s infinite`;

  // Agregar el div al contenedor
  container.appendChild(newDiv);
}