Feature: MacroDroid Automation

  Scenario: TC1: Verify that the user is able to add a macro (dont need to add macro name) (add 3 macros)
    Given the user open the Macro Page
    When the user add a Trigger - Application Removed
    Then the user should see the Trigger with text "Application Removed"
    When the user add an Action - Clear Log
    Then the user should see the Action with text "Clear Log"
    When the user add a Constraint - Airplane Mode Disabled
    Then the user should see the Constraint with text "Airplane Mode Disabled"
    When the user add a Local Variable - Test Case
    Then the user should see the Local Variable with text "Test Case"
    When the user input "1" to Local Variable
    Then the user should see the Local Variable with value "1"

  Scenario: TC2: Verify that the user is able to add an action block (add 3 action blocks)
    Given the user opens the Action Block Page
    When the user adds a new action block
    And the user inputs the name "test name"
    And the user inputs the description "test description"
    And the user adds an input variable "inputvar"
    And the user edits the input variable
    Then the input variable name should be "inputvar"
    And the input variable value should be "Default: True"
    When the user adds actions
    Then the action name should be "Clear Log"
    And the action value should be "System Log"
    When the user adds an output variable "outputvar"
    And the user edits the output variable with "This is a testing string"
    Then the output variable name should be "outputvar"
    And the output variable value should be "Default: This is a testing string"
    When the user confirms the addition
    Then the action block name should be "test name"
    And the action block description should be "test description"

Scenario: TC3: Verify that the user is able to add a macro with Macro Wizard (add Triggers and Actions without Constraints)
    Given I open the Macro Wizard
    When I add a Trigger with "Change Dark Theme"
    And I tap on Action Tab
    And I add an Action with "Stopwatch" and name "stopwatch"
    And I tap the Accept button
    And I enter the Macro name "testing"
    And I skip ads if they appear
    And I tap on Macros tab on the Homepage
    Then I should see the created Macro with name "testing"
    When I open the created Macro
    Then I should see the Trigger with name "Dark Theme Change" and details "Disabled"
    And I should see the Action with name "Stopwatch (Pause)" and details "stopwatch"

Scenario: TC4: Verify that the user is able to delete a macro in Macros Tab
    Given the user has added a macro using Macro Wizard
    When the user navigates to the Macros tab
    And the user selects a macro from the list
    And the user taps on the more options button
    And the user taps on the delete macro button
    And the user confirms the deletion
    Then the macro should be removed from the list