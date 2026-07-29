
Feature: Veriy the Alerts

@Alert1
Scenario: Verify the Playwright Alerts

       Given I Launch the browser
        Then  I Launch the test automation appliation
        Then  I verify playwright Alerts methods
       Then I close the browser

@Alert1
Scenario: Verify the Playwright Confirmation Alerts

       Given I Launch the browser
        Then  I Launch the test automation appliation
        Then  I verify playwright Confrimation Alerts methods
       Then I close the browser

@Alert
Scenario: Verify the Playwright Promt Alerts

       Given I Launch the browser
        Then  I Launch the test automation appliation
        Then  I verify playwright promt Alerts methods
       Then I close the browser