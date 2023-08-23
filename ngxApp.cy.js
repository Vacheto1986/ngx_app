/// <reference types="cypress" />

describe('ngx platform', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it.skip('verify "Using the Grid" form', () => {

        
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid')
            .find('[for="inputEmail1"]')
            .should('contain', 'Email')

        cy.contains('nb-card', 'Using the Grid')
            .find('[for="inputPassword2"]')
            .should('contain', 'Password')

    })

    it.skip('verify "Basic form" form', () => {

        
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

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

    it('Theme color change button', () => {

        // cy.get('nav nb-select').click()
        // cy.get('.options-list')
        //     .contains('Dark')
        //     .click()
        // cy.get('nav nb-select')
        //     .should('contain', 'Dark')
        // cy.get('nb-layout-header nav')
        //     .should('have.css', 'background-color', 'rgb(34, 43, 69)')
        
        cy.get('nav nb-select').then( dropdown => {
            cy.wrap(dropdown).click()
            cy.get('.options-list')
            cy.get('nb-option').each( (listItem, index) => {
                const itemText = listItem.text().trim()

                const colors = {
                    "Light": "rgb(255, 255, 255)",
                    "Dark": "rgb(34, 43, 69)",
                    "Cosmic": "rgb(50, 50, 89)",
                    "Corporate": "rgb(255, 255, 255)"
                }

                cy.wrap(listItem).click()
                cy.wrap(dropdown).should('contain', itemText)
                cy.get('nb-layout-header nav').should('have.css', 'background-color', colors[itemText])

                if(index < 3) {
                    cy.wrap(dropdown).click()
                }

            })

        })

    })

})