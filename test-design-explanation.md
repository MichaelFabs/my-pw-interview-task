Test Design Explanation

1. Testing Approach
JavaScript and Playwright are used to demonstrate API and UI test automation within a unified framework. Tests are organised into separate directories to maintain structure and make individual test suites easier to execute and maintain. 

My approach involves testing important user journeys and API behaviour, covering both positive and negative scenarios. I prioritise meaningful coverage over the number of tests, focussing on reliability, maintainability, and clear test results.

I’ve prioritised a small number of meaningful end-to-end scenarios that demonstrate the core functionality, including positive and negative paths. These scenarios also include reusable structure and reporting. With more time, I’d expand coverage to include boundary conditions, invalid payloads, authentication, other data validation, and UI edge cases. 

2. API Testing – Swagger Petstore
Implementated scenario: Create and retrieve a pet, then perform a negative. 

The test covers the endpoints for creating and retrieving pets. 

Positive scenarios: 
-	Submit a valid pet payload using POST /pet. 
-	Verify a successful HTTP response. 
-	Validate that the returned ID, name, and status match the submitted data. 
-	Retrieve the newly created pet using GET /pet/{petId}. 
-	Verify that the created data is correct. 

Negative scenario: 
-	Request a pet using an invalid ID. 
-	Verify that the API returns HTTP 404 - failure. 

Rationale: 
This validates the basic create and retrieve lifecycle, ensuring the API accepts valid data and returns the expected information. It also checks how the API handles requests for unavailable data and ensures an appropriate error response is returned.

3. UI Testing – OrangeHRM
Implemented scenarios: successful login and invalid login.

Positive scenario:
-	Navigate to the OrangeHRM login page.
-	Verify the username and password fields are visible.
-	Enter valid data.
-	Submit the login.
-	Verify successful navigation to the dashboard.
-	Confirm the dashboard heading is displayed.

Rationale:
Login is a critical user journey. This test verifies successful authentication and access to the application.

Negative scenario:
-	Navigate to the login page.
-	Enter invalid data.
-	Submit the login.
-	Verify an appropriate error message is displayed.
-	Confirm the user remains on the login page.

Rationale:
This verifies incorrect authentication is handled correctly, provides meaningful feedback, and prevents access to authenticated areas.

Automation design:
For this UI tests I adopted a Page Object Model (POM) to separate page interactions from test logic.
Login-related locators and actions are maintained in my LoginPage.js, allowing them to be reused and updated independently of the test specifications.
Additionally, I have ensured that Chrome is the default browser for test execution. However, to verify the functionality of the other two browsers, you will need to specify them in the run call, which is all handled within my scripts in the package.json file.

4. Reporting and Maintainability
Playwright’s reporter provides an overview of test execution, including passed and failed tests. Screenshots, traces, and video recordings are used to capture additional failure evidence.
The project uses:
-	Separate API and UI test directories.
-	Reusable page objects for UI interactions.
-	Environment variables for configurable URLs and credentials.
-	Playwright assertions and automatic waiting to improve reliability.
-	Independent test execution to reduce dependencies between scenarios.

5. Limitations and Future Improvements
The assessment uses publicly available demo environments, so availability, test data and credentials may change or fail at runtime.

With more time, I could introduce:
-	Update an existing pet.
-	Delete a pet
-	Additional negative and boundary testing.
-	Logout

The current implementation provides a foundation that can be extended without significantly changing the project structure.
