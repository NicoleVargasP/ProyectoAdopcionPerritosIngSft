export function aceptarAplicacion(idMascota, indexAplicacion, listaMascotas = [], listaAplicaciones = []) {

  const mascota = listaMascotas.find(m => m.id == idMascota);
  if (mascota) {
    mascota.estado = "Adoptada";
  }

  const aplicacion = listaAplicaciones[indexAplicacion];
  if (aplicacion) {
    aplicacion.estado = "Aceptada";
  }
}

export function negarAplicacion(indexAplicacion, listaAplicaciones = []) {
  const aplicacion = listaAplicaciones[indexAplicacion];
  if (aplicacion) {
    aplicacion.estado = "Negada";
  }
}



