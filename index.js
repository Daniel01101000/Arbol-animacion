const container = document.getElementById('container');
const titulo = document.getElementById('titulo');

const CWidth = container.offsetWidth;
const CHeight = container.offsetHeight;

for (let i = 0; i < 135; i++) {
  let numRandom = Math.floor(Math.random() * 4) + 1;

  let color;
  switch (numRandom) {
    case 1:
      color = "rgb(96, 214, 41)";
      break;
    case 2:
      color = "rgb(72, 163, 30)";
      break;
    case 3:
      color = "rgb(63, 134, 31)";
      break;
    case 4:
      color = "rgb(79, 204, 21)";
      break;
    default:
      color = "rgb(0, 0, 0)";
      break;
  }

  // Tamaño
  let randomWidth = Math.floor(Math.random() * 170) + 65;
  let randomHeight = randomWidth;

  // Posición
  let randomTop = Math.floor(Math.random() * (CHeight - randomHeight));
  let randomLeft = Math.floor(Math.random() * (CWidth - randomWidth));

  // Crear el div
  const newDiv = document.createElement('div');

  // Estilo básico
  newDiv.style.backgroundColor = `${color}`;
  newDiv.style.borderRadius = '50%';
  newDiv.style.width = `${randomWidth}px`;
  newDiv.style.height = `${randomHeight}px`;
  newDiv.style.position = 'absolute';
  newDiv.style.top = `${randomTop}px`;
  newDiv.style.left = `${randomLeft}px`;

  // Sombra aleatoria
  let shadowOffsetX = Math.floor(Math.random() * 10) - 5;
  let shadowOffsetY = Math.floor(Math.random() * 10) - 5;
  let shadowBlur = Math.floor(Math.random() * 20) + 5;
  let shadowColor = `rgba(0, 0, 0, 0.5)`;
  newDiv.style.boxShadow = `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px ${shadowColor}`;

  // Color aleatorio para los keyframes
  let numRandom2 = Math.floor(Math.random() * 5) + 1;
  let color2;
  switch (numRandom2) {
    case 1:
      color2 = "rgb(178, 34, 34)";
      break;
    case 2:
      color2 = "rgb(124, 53, 2)";
      break;
    case 3:
      color2 = "rgb(218, 165, 32)";
      break;
    case 4:
      color2 = "rgb(209, 43, 43)";
      break;
    case 5:
      color2 = "rgb(139, 69, 19)";
      break;
  }

  // Keyframes únicos
  let animationName = `example-${i}`;
  let keyframes = `
    @keyframes ${animationName} {
      0% {
        background-color: ${color};
        ${titulo} = "Hola"
      }
      50% {
        background-color: ${color2};
      }
      100% {
        background-color: ${color};
      }
    }
  `;

  // Agregar keyframes al documento
  let styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerHTML = keyframes;
  document.head.appendChild(styleSheet);

  // Aplicar la animación
  newDiv.style.animation = `${animationName} 20s infinite`;

  // Agregar el div al contenedor
  container.appendChild(newDiv);
}