export default function mostrarAplicaciones(aplicaciones) {
  if (!aplicaciones || aplicaciones.length === 0) {
    return "<p>No hay Aplicaciones de Adopción registradas todavía.</p>";
  }

  // Función auxiliar para crear botones
  const botonesPendiente = (aplicacion, index) => {
    if (aplicacion.estado !== "Pendiente") return "";

    return `
      <button 
        class="btn-aceptar"
        data-id-mascota="${aplicacion.IdMascota}"
        data-index-aplicacion="${index}" 
        style="background:#3ead76; color:white; border:none; padding:6px 10px; border-radius:5px; cursor:pointer;">
        Aceptar Petición
      </button>

      <button 
        class="btn-negar"
        data-id-mascota="${aplicacion.IdMascota}"
        data-index-aplicacion="${index}"
        style="background:#D62727; color:white; border:none; padding:6px 10px; border-radius:5px; cursor:pointer;">
        Negar Petición
      </button>
    `;
  };

  // Generar HTML de cada aplicación
  return aplicaciones
    .map((a, index) => `
      <div style="border:1px solid #ccc; padding:10px; border-radius:10px; margin:8px 0;">
        <p><b>Id Mascota:</b> ${a.IdMascota}</p>
        <p><b>Nombre Mascota:</b> ${a.nomMascota}</p>
        <p><b>CI:</b> ${a.ci}</p>
        <p><b>Nombre:</b> ${a.nombre}</p>
        <p><b>Correo:</b> ${a.correo}</p>
        <p><b>Numero:</b> ${a.numero}</p>
        <p><b>Razon:</b> ${a.razon}</p>
        <p><b>Estado:</b> ${a.estado}</p>
        ${botonesPendiente(a, index)}
      </div>
    `)
    .join("");
}
