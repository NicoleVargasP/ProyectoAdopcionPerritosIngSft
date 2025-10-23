import mostrarMascotas from "./mostrarMascotas.js";

describe("Función mostrarMascotas", () => {
  
  test("Debe devolver el mensaje si no hay mascotas", () => {
    const resultado = mostrarMascotas([]);
    expect(resultado).toBe("<p>No hay mascotas registradas todavía.</p>");
  });
  });
  