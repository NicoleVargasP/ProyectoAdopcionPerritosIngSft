import  registrarAplicacion  from "./registrarAplicacion";

describe("Función registrarAplicacion", () => {

  test("Debe devolver mensaje de error si falta algún campo", () => {
    const resultado = registrarAplicacion(8,"Pelula",null, "Jorge","jorge@email.com" , 789456, "Me Gustan los perritos", "555-123");
    expect(resultado.mensaje).toBe("Ingrese todos los parametros requeridos porfavor");
  });

  test("Debe aceptar un número telefónico válido", () => {
    const resultado = registrarAplicacion(1, "Michi", "9876543", "Ana", "ana@mail.com", "555-123784", "Adopción");
    expect(resultado.mensaje).toContain("Se registró la aplicación con éxito");
  });

  test("Debe aceptar un correo electrónico válido", () => {
    const resultado = registrarAplicacion(2, "Toby", "6543210", "Carlos", "carlos@mail.com", "+59176543210", "Adopción");
    expect(resultado.mensaje).toContain("Se registró la aplicación con éxito");
  });

  test("Debe devolver error si el correo y número son inválidos", () => {
    const resultado = registrarAplicacion(3, "Rocky", "4567890", "Lucía", "correo_invalido", "numero123", "Adopción");
    expect(resultado.mensaje).toBe("Ingrese un número telefónico o correo electrónico válido.");
  });
});