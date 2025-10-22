export default function registrarMascota(id,nom,edad,especie,descripcion,contacto) {
  // validaciones
  if (!id || !nom || !edad || !especie || !descripcion || !contacto) {
    return "Por favor, completa todos los campos.";
  }

  return {
    id: id.trim(),
    nombre: nom.trim(),
    edad: edad.trim(),
    especie: especie.trim(),
    descripcion: descripcion.trim(),
    contacto: contacto.trim()
  };
}