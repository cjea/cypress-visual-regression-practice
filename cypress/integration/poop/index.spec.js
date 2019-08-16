describe("bun", () => {
  it("features BUN", () => {
    cy.visit("localhost:3000")
      .document()
      .toMatchImageSnapshot();
  });
});
