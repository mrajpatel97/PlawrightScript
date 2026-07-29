
Feature: Reading data from feature file

    @data
    Scenario: Feature file data reading playwright
        Given I Launch the browser
        Then I Launch the test automation appliation
        Then I verify the  feature datareading into playwright script "<name>","<email>","<phone>","<address>"
        Then I close the browser

        Examples:
            | name     | email             | phone       | address    |
            | Nagaraju | raj97@gmail.com   | 99866411205 | Hyderabad  |
            | SISIRA   | SIS@gmail.com     | 99866411206 | Secndrabad |
            | Lokesh   | llokesh@gmail.com | 9987896547  | Vijayawada |



