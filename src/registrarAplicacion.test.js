import  registrarAplicacion  from "./registrarAplicacion";

describe("Función registrarMascota", () => {

  test("Debe devolver mensaje de error si falta algún campo", () => {
    const resultado = registrarAplicacion(8,"Pelula",null, "Jorge","jorge@email.com" , 789456, "Me Gustan los perritos", "555-123");
    expect(resultado).toBe("Ingrese todos los parametros requeridos porfavor");
  });
});