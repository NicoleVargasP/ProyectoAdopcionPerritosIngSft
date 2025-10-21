

const form = document.querySelector("#mascota-form");
const nombreInput = document.querySelector("#nombre");

const registroDiv = document.querySelector("#registro-mascotas");
const mostrarFormBtn = document.querySelector("#mostrar-form-btn");

const mascotas = [];

// Mostrar el formulario al presionar el botón
mostrarFormBtn.addEventListener("click", () => {
  form.style.display = "block";
  mostrarFormBtn.style.display = "none";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value;


  registroDiv.innerHTML="Por favor, completa todos los campos."

  
});