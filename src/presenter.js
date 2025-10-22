import registrarMascota from "./registrarMascota";


const form = document.querySelector("#mascota-form");
const nombreInput = document.querySelector("#nombre");
const edadInput = document.querySelector("#edad");

const registroDiv = document.querySelector("#registro-mascotas");
const mostrarFormBtn = document.querySelector("#mostrar-registrar-btn");

const mascotas = [];

// Mostrar el formulario al presionar el botón
mostrarFormBtn.addEventListener("click", () => {
  form.style.display = "block";
  mostrarFormBtn.style.display = "none";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value;
  const edad = edadInput.value;
  const mascota = registrarMascota(nombre,edad);

  if (typeof mascota === "string") {
    registroDiv.innerHTML = mascota;
  } else {
    registroDiv.innerHTML =`<p> Nombre: ${mascota.nombre} `+`<p> Edad: ${mascota.edad} `  
    form.reset();
  }

  
});