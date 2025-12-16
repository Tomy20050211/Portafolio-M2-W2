
alert("¡Bienvenido a mi portafolio!");

const tarjetaInfo = document.querySelector(".tarjeta2 p");
const boton = document.createElement("button");

const mensajeOriginal = tarjetaInfo.textContent;
const mensajeAlterno = "ME  GUISTAN LOS ANIMALES Y TEENGO MUCHAS MASCOTAS, LAS PUEDES VER EN LA SECCION DE PETS";

let estado = true;

boton.textContent = "MAS";
boton.style.marginTop = "2rem";
boton.style.padding = "0.7rem 1.2rem";
boton.style.borderRadius = "0.8rem";
boton.style.border = "none";
boton.style.cursor = "pointer";

boton.addEventListener("click", () => {
  if (estado) {
    tarjetaInfo.textContent = mensajeAlterno;
  } else {
    tarjetaInfo.textContent = mensajeOriginal;
  }
  estado = !estado;
});

// ===== INSERTAR BOTÓN =====
tarjetaInfo.parentElement.appendChild(boton);
