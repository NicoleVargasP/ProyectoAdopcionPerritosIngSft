export default function mostrarAplicaciones(aplicaciones) {
  if (!aplicaciones || aplicaciones.length === 0) {
    return "<p>No hay Aplicaciones de Adopcion registradas todavía.</p>";
  }

  return aplicaciones
    .map((m,index) => {
      return `
      <div style="border:1px solid #ccc; padding:10px; border-radius:10px; margin:8px 0;">
        <p><b>Id Mascota:</b> ${m.IdMascota}</p>
        <p><b>Nombre Mascota:</b> ${m.nomMascota}</p>
        <p><b>CI:</b> ${m.ci}</p>
        <p><b>Nombre:</b> ${m.nombre}</p>
        <p><b>Correo:</b> ${m.correo}</p>
        <p><b>Numero:</b> ${m.numero}</p>
        <p><b>Razon:</b> ${m.razon}</p>
        <p><b>Estado:</b> ${m.estado}</p>

        ${
          m.estado === "Pendiente"
            ? `
              <button 
                class="btn-aceptar" 
                data-id-mascota="${m.IdMascota}"
                data-index-aplicacion="${index}" 
                style="background:#3ead76; color:white; border:none; padding:6px 10px; border-radius:5px; cursor:pointer;">
                Aceptar Peticion
              </button>

              <button 
                class="btn-negar" 
                data-aplicacion="${m}"
                style="background:#D62727; color:white; border:none; padding:6px 10px; border-radius:5px; cursor:pointer;">
                Negar Peticion
              </button>
            `
            : ""
        }
      </div>`;
    })
    .join("");
}