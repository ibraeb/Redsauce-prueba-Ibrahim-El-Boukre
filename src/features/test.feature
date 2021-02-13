Feature: Check that the entire Redsauce team is in the 'about us' section

  Scenario: User goes to 'Nosotros' section
    Given I am in Redsauce main page "es"
    When I try to access to "nosotros" section
    Then I should see 17 profiles

  Scenario: User goes to 'About Us' section
    Given I am in Redsauce main page "en"
    When I try to access to "about_us" section
    Then I should see 17 profiles