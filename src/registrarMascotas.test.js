import registrarMascota from "./registrarMascota.js";

describe("Función registrarMascota", () => {

  test("Debe devolver mensaje de error si falta algún campo", () => {
    const resultado = registrarMascota("", "Firulais", 3, "Perro", "Muy juguetón", "555-123");
    expect(resultado).toBe("Por favor, completa todos los campos.");
  });
});