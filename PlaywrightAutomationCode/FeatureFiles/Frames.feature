

Feature: Verify the Frames


Scenario: Verifying the frames

        Given I Launch the browser
        Then  I Verify the frames methods
        Then I close the browser
        

    Scenario: Verify the Fileupload Handling
        Given I Launch the browser
        Then  I Launch the test automation appliation
        Then  I Verify the playwright Fileupload
       Then I close the browser

@Frames
    Scenario: Verify the Download file Handling
        Given I Launch the browser
        Then  I Verify the playwright FileDownload
       Then I close the browser