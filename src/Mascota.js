// Mascota.js
export default class Mascota {
  constructor(id, nombre, edad, especie, descripcion, contacto) {
    this.id = Number(id);
    this.nombre = nombre.trim();
    this.edad = edad;
    this.especie = especie;
    this.descripcion = descripcion.trim();
    this.contacto = contacto;
    this.estado = "Disponible"; // Disponible | Adoptada
  }
}
