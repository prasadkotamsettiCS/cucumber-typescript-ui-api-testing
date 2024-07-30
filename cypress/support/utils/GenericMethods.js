/// <reference types="cypress" />
// The GenericMethods class provides reusable methods that can be used across the framework.

class GenericMethods {

    clickOnElementMethod(element) {
        if (element) {
            cy.get(element)
                .should('be.visible')
                .should('not.be.disabled')
                .click();
        } else {
            cy.get(element)
                .click({ force: true });
        }

    }

    clickOnElementContainsTextMethod(element, text) {
        if (element) {
            cy.get(element)
                .should("be.visible")
                .contains(text)
                .click();
        }
        else {
            cy.get(element)
                .contains(text)
                .click({ force: true });

        }

    }

    passTextValueMethod(element, text) {
        cy.get(element)
            .should('be.visible')
            .type(text);

    }

    assertElementText(element, text) {
        cy.get(element)
            .contains(text);

    }

    assertArrayListItems(element, number) {
        cy.get(element)
            .should('be.visible')
            .should('have.length.greaterThan', number);

    }

}

export default GenericMethods