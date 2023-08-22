/// <reference types="cypress" />

describe('ngx platform', () => {

    it('verify "Using the Grid" form', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid')
            .find('[for="inputEmail1"]')
            .should('contain', 'Email')

        cy.contains('nb-card', 'Using the Grid')
            .find('[for="inputPassword2"]')
            .should('contain', 'Password')

    })

    it.only('verify "Basic form" form', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        const formsFormLayouts = 

        // cy.contains('nb-card', 'Basic form')
        //     .find('[for="exampleInputEmail1"]')
        //     .should('contain', 'Email address')

        // cy.contains('nb-card', 'Basic form')
        //     .find('[for="exampleInputPassword1"]')
        //     .should('contain', 'Password')

        cy.contains('nb-card', 'Basic form').then( basicForm => {

            const emailLabelFirst = basicForm.find('[for="exampleInputEmail1"]').text()
            const passLabelFirst = basicForm.find('[for="exampleInputPassword1"]').text()
            expect(emailLabelFirst).to.equal('Email address')
            expect(passLabelFirst).to.equal('Password')

        })
    })

})