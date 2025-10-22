describe("Registrar Mascotas", () => {
    beforeEach(() => {
    cy.visit("/"); // abre la página principal (usa baseUrl del config)
    cy.get("#mostrar-registrar-btn").click(); // muestra los inputs
  });



  it("Si el nombre esta vacio, debe mostrar un mensaje de error", () => {
    // Dejar el campo vacío
    cy.get("#nombre").clear();
    cy.get("#edad").type(23);
    cy.get('input[type="submit"]').click(); // presiona el botón para enviar
    // Verificar mensaje de error
    cy.get("#registro-mascotas").should("contain", "Por favor, completa todos los campos.");
  });
  
  it("Si llena el campo nombre y edad indica que se guardo como nombre y edad", () => {
    // Dejar el campo vacío
    cy.get("#nombre").type("Firulais");
     cy.get("#edad").type("13");
    cy.get('input[type="submit"]').click(); // presiona el botón para enviar
    // Verificar mensaje de error
    cy.get("#registro-mascotas").should("contain", "Nombre: Firulais");
  });


  it("Si la edad esta vacia, debe mostrar un mensaje de error", () => {
    // Dejar el campo vacío
    cy.get("#nombre").type("fifi");
    cy.get("#edad").clear();
    cy.get('input[type="submit"]').click(); // presiona el botón para enviar
    // Verificar mensaje de error
    cy.get("#registro-mascotas").should("contain", "Por favor, completa todos los campos.");
  });
   
});