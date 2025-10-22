export default function registrarMascota(id, nom, edad, especie, descripcion, contacto) {
  // Validaciones
  if (!id || !nom || !edad || !especie || !descripcion || !contacto) {
    return "Por favor, completa todos los campos.";
  } else {
    return "Se registró la mascota con éxito";
  }
}
