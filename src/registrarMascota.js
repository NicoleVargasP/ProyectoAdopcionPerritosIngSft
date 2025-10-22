export default function registrarMascota(id,nom,edad,especie) {
  // validaciones
  if (!id || !nom || !edad || !especie) {
    return "Por favor, completa todos los campos.";
  }

  return {
    id: id.trim(),
    nombre: nom.trim(),
    edad: edad.trim(),
    especie: especie.trim(),
  };
}