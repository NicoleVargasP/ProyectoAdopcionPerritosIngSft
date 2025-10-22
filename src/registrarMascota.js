export default function registrarMascota(nom,edad) {
  // validaciones
  if (!nom || !edad) {
    return "Por favor, completa todos los campos.";
  }

  return {
    nombre: nom.trim(),
    edad: edad.trim()
  };
}