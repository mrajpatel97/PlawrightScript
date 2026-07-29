
Feature: Verify the playwright waits


@awaits
    Scenario: Verify the waits
        Given I Launch the browser
        Then  I Launch the facebook appliation
        Then  I verify the playwight awaits
    #    Then I close the browser



