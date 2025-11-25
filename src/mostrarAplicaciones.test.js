import mostrarAplicaciones from "./mostrarAplicaciones.js";
import mostrarMascotas from "./mostrarMascotas.js";

describe("Función mostrarAplicaciones", () => {
  
  test("Debe devolver el mensaje si no hay aplicaciones", () => {
    const resultado = mostrarAplicaciones([]);
    expect(resultado).toBe("<p>No hay Aplicaciones de Adopción registradas todavía.</p>");
  });
  

  test("Debe mostrar correctamente una aplicacion", () => {
    const aplicacion = [
      {
        IdMascota: "1",
        nomMascota: "Firulais",
        ci:987654,
        nombre:"Jose",
        correo:"jose@gmail.com",
        numero:"75757575",
        razon :"Me gustan los perros",
        estado:"Pendiente"
      }
    ];

    const resultado = mostrarAplicaciones(aplicacion);

    expect(resultado).toContain("<p><b>Id Mascota:</b> 1</p>");
    expect(resultado).toContain("<p><b>Nombre Mascota:</b> Firulais</p>");
    expect(resultado).toContain("<p><b>Nombre:</b> Jose</p>");
    
  });

  test("Debe mostrar múltiples aplicaciones correctamente", () => {
    const mascotas = [
      {
        IdMascota: "1",
        nomMascota: "Firulais",
        ci:987654,
        nombre:"Jose",
        correo:"jose@gmail.com",
        numero:"75757575",
        razon :"Me gustan los perros",
        estado:"Negado"
      },
      {
        IdMascota: "2",
        nomMascota: "michi",
        ci:987654,
        nombre:"Jose",
        correo:"jose@gmail.com",
        numero:"75757575",
        razon :"Me gustan los perros",
        estado:"Aceptado"
      }
    ];

    const resultado = mostrarAplicaciones(mascotas);

    expect(resultado.match(/<div/g).length).toBe(2); // hay 2 tarjetas
    expect(resultado).toContain("Firulais");
    expect(resultado).toContain("michi");
  });

  test("Debe generar botones si la aplicacion esta Pendiente", () => {
    const aplicacion = [
      {
        IdMascota: "1",
        nomMascota: "Firulais",
        ci:987654,
        nombre:"Jose",
        correo:"jose@gmail.com",
        numero:"75757575",
        razon :"Me gustan los perros",
        estado:"Pendiente"
      }
    ];

    const resultado = mostrarAplicaciones(aplicacion);

    expect(resultado).toContain("Aceptar Petición");
    expect(resultado).toContain("Negar Petición");
  });

test("NO Debe generar botones si la aplicacion esta ya fue Negada", () => {
    const aplicacion = [
      {
        IdMascota: "1",
        nomMascota: "Firulais",
        ci:987654,
        nombre:"Jose",
        correo:"jose@gmail.com",
        numero:"75757575",
        razon :"Me gustan los perros",
        estado:"Negado"
      }
    ];

    const resultado = mostrarAplicaciones(aplicacion);

    expect(resultado).not.toContain("Aceptar Peticion");
  });

  });
