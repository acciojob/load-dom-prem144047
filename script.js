describe('DOM Load Test', () => {
    it('should display "DOM load success" on DOM load', () => {
        cy.visit(baseUrl);
        cy.contains('DOM load success').should('exist');
    });
});