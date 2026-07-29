
Feature: Loctors

    Background: Common steps
        Given I Launch the browser
        Then  I Launch the test automation appliation

@Assertion1
    Scenario: Verify playwright locators
     #   Given I Launch the browser
     #   Then  I Launch the test automation appliation
        And   I verify playwright locators
        Then I close the browser

@Assertion1
    Scenario: Verify selenium locators
     ##   Given I Launch the browser
     #   Then  I Launch the test automation appliation
        And   I verify selenium  locators
        Then I close the browser

@Assertion1
    Scenario: Verify selenium xpath locators
     #   Given I Launch the browser
     #   Then  I Launch the test automation appliation
        And   I verify selenium  xpath locators
        Then I close the browser
        
@Assertion1
    Scenario: Verify selenium xpath axes locators
     #   Given I Launch the browser
     #   Then  I Launch the test automation appliation
        And   I verify selenium  xpath axes locators
        Then I close the browser


