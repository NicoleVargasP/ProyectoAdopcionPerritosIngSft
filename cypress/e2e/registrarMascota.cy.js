describe("Registrar Mascotas", () => {
    beforeEach(() => {
    cy.visit("/"); // abre la página principal (usa baseUrl del config)
    cy.get("#mostrar-registrar-btn").click(); // muestra los inputs
  });



  it("Si el campo nombre está vacío, debe mostrar un mensaje de error", () => {
    // Dejar el campo vacío
    cy.get("#nombre").clear();
    cy.get('input[type="submit"]').click(); // presiona el botón para enviar
    // Verificar mensaje de error
    cy.get("#registro-mascotas").should("contain", "Por favor, completa todos los campos.");
  });
  
  it("Si llena el campo nombre indica que se guardo como nombre", () => {
    // Dejar el campo vacío
    cy.get("#nombre").type("Firulais");
    cy.get('input[type="submit"]').click(); // presiona el botón para enviar
    // Verificar mensaje de error
    cy.get("#registro-mascotas").should("contain", "Nombre: Firulais");
  });
});