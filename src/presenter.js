import registrarMascota from "./registrarMascota";
import mostrarMascotas from "./mostrarMascotas";

const mascotasGlobales = [];

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

// Mostrar el formulario al presionar el botón
mostrarFormBtn.addEventListener("click", () => {
  Registrarform.style.display = "block";
  mostrarFormBtn.style.display = "none";
  mostrarMascotasBtn.style.display = "none";
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
  if (mascotasGlobales.length === 0) {
    registroDiv.innerHTML = "<p>No hay mascotas registradas todavía.</p>";
    return;
  }

  registroDiv.innerHTML = mascotasGlobales
    .map(
      (m) => `
      <div style="border:1px solid #ccc; padding:10px; border-radius:10px; margin:8px 0;">
        <p><b>Id:</b> ${m.id}</p>
        <p><b>Nombre:</b> ${m.nombre}</p>
        <p><b>Edad:</b> ${m.edad}</p>
        <p><b>Especie:</b> ${m.especie}</p>
        <p><b>Descripción:</b> ${m.descripcion}</p>
        <p><b>Contacto:</b> ${m.contacto}</p>
      </div>`
    )
    .join("");
});
