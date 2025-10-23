import registrarMascota from "./registrarMascota.js";

describe("Función registrarMascota", () => {

  test("Debe devolver mensaje de error si falta algún campo", () => {
    const resultado = registrarMascota("", "Firulais", 3, "Perro", "Muy juguetón", "555-123");
    expect(resultado).toBe("Por favor, completa todos los campos.");
  });
});
  test("Debe registrar correctamente una mascota con todos los campos", () => {
    const resultado = registrarMascota(
      1,
      "Michi",
      2,
      "Gato",
      "Color blanco y ojos verdes",
      "maria@mail.com"
    );

    expect(resultado).toContain("Se registró la mascota con éxito");
  });
test("Debe devolver error si todos los campos son nulos", () => {
    const resultado = registrarMascota(null, null, null, null, null, null);
    expect(resultado).toBe("Por favor, completa todos los campos.");
  });
 test("Debe devolver error si el ID no es un número", () => {
    const resultado = registrarMascota("abc", "Firulais", 3, "Perro", "Juguetón", "555-123", []);
    expect(resultado).toBe("El ID debe ser un número.");
  });

  test("Debe devolver error si la edad no es un número", () => {
    const resultado = registrarMascota(1, "Firulais", "tres", "Perro", "Juguetón", "555-123", []);
    expect(resultado).toBe("La edad debe ser un número.");
  });

  test("Debe devolver error si el ID ya existe", () => {
    const mascotasRegistradas = [{ id: "1", nombre: "Rex" }];
    const resultado = registrarMascota("1", "Firulais", 2, "Perro", "Lindo", "555-000", mascotasRegistradas);
    expect(resultado).toBe("El ID ya está registrado.");
  });
