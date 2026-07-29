

Feature: Verify the Postman methods


@API
Scenario: Verify the postman methods
Given    I send the get request
Then     I verify the api response



@API1
Scenario: Verify the postman post methods
Given    I send the post request body
"""
{
      "id": "13",
      "email": "john@reqres.in",
      "first_name": "john",
      "last_name": "first",
      "avatar": "https://reqres.in/img/faces/12-image.jpg"
}
"""
Then     I verify the api post response


@API1
Scenario: Verify the postman put methods
Given    I send the put request body
"""
{
      "id": "12",
      "email": "john@reqres.in",
      "first_name": "john",
      "last_name": "first",
      "avatar": "https://reqres.in/img/faces/12-image.jpg"
}
"""
Then     I verify the api put response



@API11
Scenario: Verify the postman patch methods
Given    I send the patch request body
"""
{
      "id": "13",
      "email": "john@reqres.in",
      "first_name": "john",
      "last_name": "first",
      "avatar": "https://reqres.in/img/faces/12-image.jpg"
}
"""
Then     I verify the api patch response



@API1
Scenario: Verify the postman delete method
Given   I send the delete request
Then    I verify the api delete response



