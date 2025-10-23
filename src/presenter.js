import registrarMascota from "./registrarMascota";
import mostrarMascotas from "./mostrarMascotas";

const mascotasGlobales = [];
const mascotaInicial = {
  id: "4848",
  nombre: "Pelula",
  edad: "8",
  especie: "Gato",
  descripcion: "Muy juguetóna, amigable y dormilona.",
  contacto: "12345678"
};
mascotasGlobales.push(mascotaInicial)

const Registrarform = document.querySelector("#mascota-form");
const IdInput = document.querySelector("#id");
const nombreInput = document.querySelector("#nombre");
const edadInput = document.querySelector("#edad");
const especieInput = document.querySelector("#especie");
const descripcionInput = document.querySelector("#descripcion");
const contactoInput = document.querySelector("#contacto");

const registroDiv = document.querySelector("#registro-mascotas");

const mostrarFormBtn = document.querySelector("#mostrar-registrar-btn");
const mostrarMascotasBtn = document.querySelector("#mostrar-mascotas-btn");


const infoMascotaAdoptar =document.querySelector("#info-mascota-adoptar")
const formularioAdopcion =document.querySelector("#adoptar-form")



// Mostrar el formulario al presionar el botón
mostrarFormBtn.addEventListener("click", () => {
  Registrarform.style.display = "block";
  mostrarFormBtn.style.display = "none";
  mostrarMascotasBtn.style.display = "none";
  registroDiv.innerHTML=" ";
});

// Registrar una nueva mascota
Registrarform.addEventListener("submit", (event) => {
  event.preventDefault();

  const id = IdInput.value;
  const nombre = nombreInput.value;
  const edad = edadInput.value;
  const especie = especieInput.value;
  const descripcion = descripcionInput.value;
  const contacto = contactoInput.value;

  const mensaje = registrarMascota(id, nombre, edad, especie, descripcion, contacto);

  registroDiv.style.display = "block";
  registroDiv.innerHTML = `<p>${mensaje}</p>`;

  // Si faltan datos, mantener el formulario visible
  if (mensaje === "Por favor, completa todos los campos.") {
    Registrarform.style.display = "block";
    mostrarFormBtn.style.display = "none";
    mostrarMascotasBtn.style.display = "none";
    return;
  }

  // Si se registró correctamente, guardar mascota y volver a los botones
  const mascota = { id, nombre, edad, especie, descripcion, contacto };
  mascotasGlobales.push(mascota);

  Registrarform.reset();
  Registrarform.style.display = "none";
  mostrarFormBtn.style.display = "block";
  mostrarMascotasBtn.style.display = "block";
});

// Mostrar todas las mascotas registradas
mostrarMascotasBtn.addEventListener("click", () => {
  const html = mostrarMascotas(mascotasGlobales);
  registroDiv.innerHTML = html;
});
//si se presiona el boton adoptar
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-adoptar")) {
    const id = e.target.dataset.id;
    const nombreMascota = e.target.dataset.nombre;
    registroDiv.innerHTML=""
    formularioAdopcion.style.display="block";
    infoMascotaAdoptar.innerHTML="Id Mascota: "+id+"<p>                   Nombre Mascota: "+nombreMascota



  }
});
