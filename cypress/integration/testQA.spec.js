


describe('CENÁRIOS - MÓDULO DE AUTENTICAÇÃO PARA ACESSAR A CONTA', () => {

    it('1. LOGIN', () => {
        cy.visit("https://b2b.ewally.com.br/login");
        cy.get('[data-test=username]').type('teste');
        cy.get('[data-test=password]').type('teste');
        cy.get('[data-test=submit]').click();
    });

    it('2. ESQUECI SENHA', () => {
        cy.visit("https://b2b.ewally.com.br/login");
        cy.get('[data-test=link-reset]').click();
        cy.get('[data-test=username]').type('77514205535');
        cy.get('[data-test=username-submit]').click();
    });

    it('3. VALIDAR FRASIOLOGIA DA TELA HOME DESLOGADA', () => {
        cy.visit("https://b2b.ewally.com.br/login");
        cy.get('.sc-kGXeez').should('be.visible');
        cy.get('.sc-kGXeez > :nth-child(1)').should('be.visible');
        cy.get('.sc-cpmLhU').should('be.visible');
        cy.get('.form-horizontal').should('be.visible');
        cy.get('[for="username"]').should('be.visible');
        cy.get('[for="password"]').should('be.visible');
        cy.get('[data-test=link-reset]').should('be.visible');
        cy.get('[data-test=submit]').should('be.visible');
        cy.get('[data-test=link-register]').should('be.visible');
    });
});