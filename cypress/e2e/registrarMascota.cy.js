describe("Registrar Mascotas", () => {
  it("Si el campo nombre está vacío, debe mostrar un mensaje de error", () => {
    cy.visit("/"); // entra a la página principal
    cy.get("#mostrar-form-btn").click(); // muestra el formulario

    // Dejar el campo vacío
    cy.get("#nombre").clear();
    cy.get('input[type="submit"]').click(); // presiona el botón para enviar

    // Verificar mensaje de error
    cy.get("#registro-mascotas").should("contain", "Por favor, completa todos los campos.");
  });
});