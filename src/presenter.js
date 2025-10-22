import registrarMascota from "./registrarMascota";


const form = document.querySelector("#mascota-form");
const IdInput = document.querySelector("#id");
const nombreInput = document.querySelector("#nombre");
const edadInput = document.querySelector("#edad");
const especieInput = document.querySelector("#especie");
const descripcionInput = document.querySelector("#descripcion");
const contactoInput = document.querySelector("#contacto");

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

  const id = IdInput.value;
  const nombre = nombreInput.value;
  const edad = edadInput.value;
  const especie = especieInput.value;
  const descripcion = descripcionInput.value;
   const contacto = contactoInput.value;
  const mascota = registrarMascota(id,nombre,edad,especie,descripcion,contacto);

  if (typeof mascota === "string") {
    registroDiv.innerHTML = mascota;
  } else {
    registroDiv.innerHTML =`<p> Id: ${mascota.id} `+`<p> Nombre: ${mascota.nombre} `+`<p> Edad: ${mascota.edad} ` 
    +`<p> Especie: ${mascota.especie} ` +`<p> Descripcion: ${mascota.descripcion} `+`<p> Contacto: ${mascota.contacto} `
    form.reset();
  }

});