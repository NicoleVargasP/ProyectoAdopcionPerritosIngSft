// --- Función interna para generar una tarjeta simple ---
function tarjetaMascota(m) {
  const id = m.id;
  const nombre = m.nombre;
  const edad = m.edad;
  const especie = m.especie;
  const descripcion = m.descripcion;
  const contacto = m.contacto;
  const estado = m.estado;

  // si está disponible, incluye botón
  const boton =
    estado === "Disponible"
      ? `<button
           class="btn-adoptar"
           data-id="${id}"
           data-nombre="${nombre}"
           style="background:#3ead76; color:white; border:none; padding:6px 10px; border-radius:5px; cursor:pointer;">
           Formulario Adopcion
         </button>`
      : "";

  return `
    <div style="border:1px solid #ccc; padding:10px; border-radius:10px; margin:8px 0;">
      <p><b>Id:</b> ${id}</p>
      <p><b>Nombre:</b> ${nombre}</p>
      <p><b>Edad:</b> ${edad}</p>
      <p><b>Especie:</b> ${especie}</p>
      <p><b>Descripción:</b> ${descripcion}</p>
      <p><b>Contacto:</b> ${contacto}</p>
      <p><b>Estado:</b> ${estado}</p>
      ${boton}
    </div>
  `;
}

// --- Función principal exportada ---
export default function mostrarMascotas(mascotas = []) {
  if (!mascotas || mascotas.length === 0) {
    return "<p>No hay mascotas registradas todavía.</p>";
  }

  return mascotas.map(tarjetaMascota).join("");
}
