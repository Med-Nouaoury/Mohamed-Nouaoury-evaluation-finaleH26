describe("Bibliothèque - Test E2E des emprunts", () => {

  it("affiche les emprunts d'un utilisateur après soumission du formulaire", () => {
    // 1. Ouvre la page emprunts
    cy.visit("http://localhost:5173/emprunts");

    // 2. Remplit le formulaire avec un email utilisateur
    cy.get('input[type="email"]').type("jean.dupont@biblio.com");

    // 3. Soumet le formulaire
    cy.contains("button", "Voir mes emprunts").click();

    // 4. Vérifie l'affichage des emprunts (titre + auteur + dates)
    cy.contains("Le Petit Prince").should("be.visible");
    cy.contains("Antoine de Saint-Exupéry").should("be.visible");
    cy.contains("2026").should("exist");
  });

});