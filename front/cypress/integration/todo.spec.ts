describe("My First Test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("/");

    cy.wait(500);

    const todoLabel = `Todo ${new Date().getTime()}`;

    cy.get("#priority").select("MEDIUM");
    cy.get("#message").should("not.be.disabled");
    cy.get("#message").type(`${todoLabel}{enter}`);

    cy.get(".todoList").contains(todoLabel).should("exist");
    cy.get(".todoList").contains(todoLabel).should("have.class", "doable");
    cy.get(".todoList").contains(todoLabel).click();
    cy.get(".todoList").contains(todoLabel).should("not.have.class", "doable");
  });
});
