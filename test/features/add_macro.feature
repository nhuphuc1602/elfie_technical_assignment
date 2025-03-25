Feature: Add a Macro
  As a user
  I want to create a new macro in MacroDroid
  So that I can automate tasks

  Scenario: Successfully add a macro
    Given I am on the Macro page
    When I add a new macro
    Then I should see the macro added successfully
