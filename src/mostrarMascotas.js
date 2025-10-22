export default function mostrarMascotas(id,nom,edad,especie,descripcion,contacto) {
  return {
    id: id.trim(),
    nombre: nom.trim(),
    edad: edad.trim(),
    especie: especie.trim(),
    descripcion: descripcion.trim(),
    contacto: contacto.trim()
  };
}