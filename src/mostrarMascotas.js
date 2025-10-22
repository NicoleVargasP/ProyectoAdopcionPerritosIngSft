export default function mostrarMascotas(mascotas) {
  if (!mascotas || mascotas.length === 0) {
    return "<p>No hay mascotas registradas todavía.</p>";
  }

  return mascotas
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
}
