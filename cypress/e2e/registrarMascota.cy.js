describe("Registrar Mascotas", () => {
    beforeEach(() => {
    cy.visit("/"); // abre la página principal (usa baseUrl del config)
    cy.get("#mostrar-registrar-btn").click(); // muestra los inputs
  });
it("Si el id y el nombre estan vacio, debe mostrar un mensaje de error", () => {
    // Dejar el campo vacío
    cy.get("#id").clear();
    cy.get("#nombre").clear();
    cy.get("#edad").type(2);
    cy.get("#especie").type("Perro");
    cy.get("#descripcion").type("El perrito es muy cariñoso");
    cy.get("#contacto").type(7498657);
    cy.get('input[type="submit"]').click(); // presiona el botón para enviar
    // Verificar mensaje de error
    cy.get("#registro-mascotas").should("contain", "Por favor, completa todos los campos.");
  });
   it("Si la edad esta vacia, debe mostrar un mensaje de error", () => {
    // Dejar el campo vacío
    cy.get("#id").type(12345);
    cy.get("#nombre").type("fifi");
    cy.get("#edad").clear();
    cy.get("#especie").type("Perro");
    cy.get("#descripcion").type("El perrito es muy cariñoso");
    cy.get("#contacto").type(7498657);
    cy.get('input[type="submit"]').click(); // presiona el botón para enviar
    // Verificar mensaje de error
    cy.get("#registro-mascotas").should("contain", "Por favor, completa todos los campos.");
  });

it("Si la especie esta vacia, debe mostrar un mensaje de error", () => {
    // Dejar el campo vacío
    cy.get("#id").type(12345);
    cy.get("#nombre").type("fifi");
    cy.get("#edad").type("5");
    cy.get("#especie").clear();
    cy.get("#descripcion").type("El perrito es muy cariñoso");
    cy.get("#contacto").type(7498657);
    cy.get('input[type="submit"]').click(); // presiona el botón para enviar
    // Verificar mensaje de error
    cy.get("#registro-mascotas").should("contain", "Por favor, completa todos los campos.");
  });
  it("Si la descripcion y el contacto estan vacios, debe mostrar un mensaje de error", () => {
    // Dejar el campo vacío
    cy.get("#id").type(12345);
    cy.get("#nombre").type("fifi");
    cy.get("#edad").type("5");
    cy.get("#especie").type("Perro");
    cy.get("#descripcion").clear();
    cy.get("#contacto").clear();
    cy.get('input[type="submit"]').click(); // presiona el botón para enviar
    // Verificar mensaje de error
    cy.get("#registro-mascotas").should("contain", "Por favor, completa todos los campos.");
});

  it("Si llena el campo nombre y edad indica que se guardo como nombre y edad", () => {
    // Dejar el campo vacío
    cy.get("#nombre").type("Firulais");
     cy.get("#edad").type("13");
     cy.get("#id").type(12345);
    cy.get("#especie").type("Perro");
    cy.get("#descripcion").type("El perrito es muy cariñoso");
    cy.get("#contacto").type(7498657);
    cy.get('input[type="submit"]').click(); // presiona el botón para enviar
    // Verificar mensaje de error
    cy.get("#registro-mascotas").should("contain", "Nombre: Firulais", "Edad: 13");
});
 it("Si llena el campo id y especie indica que se guardo como id y especie", () => {
    // Dejar el campo vacío
    cy.get("#nombre").type("Firulais");
     cy.get("#edad").type("13");
    cy.get("#id").type(12345);
    cy.get("#especie").type("Perro");
    cy.get("#descripcion").type("El perrito es muy cariñoso");
    cy.get("#contacto").type(7498657);
    cy.get('input[type="submit"]').click(); // presiona el botón para enviar
    // Verificar mensaje de error
    cy.get("#registro-mascotas").should("contain", "Id: 12345", "Especie: Perro");
  });
   it("Si llena el campo descripcion y contacto indica que se guardo como id y especie", () => {
    // Dejar el campo vacío
    cy.get("#nombre").type("Firulais");
     cy.get("#edad").type("13");
    cy.get("#id").type(12345);
    cy.get("#especie").type("Perro");
    cy.get("#descripcion").type("El perrito es muy cariñoso");
    cy.get("#contacto").type(7498657);
    cy.get('input[type="submit"]').click(); // presiona el botón para enviar
    // Verificar mensaje de error
    cy.get("#registro-mascotas").should("contain", "Descripcion: El perrito es muy cariñoso", "Contacto: 7498657");
});
});