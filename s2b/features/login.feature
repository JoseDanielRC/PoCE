Feature: Entering S2B with an institutionId

  Background:
    Given I am on the settings page

  Scenario: As a user, I can enter the s2b and log in with my institutionId
    When I insert institutionId
    #When I select my camera
    #When I select my microphone
    #When I select my language
    Then display message "You passed"
    
  Scenario Outline: As a user, I can enter the s2b and log in with my institutionId
    #When I insert institutionId as "<institutionId>"
    #When I select my camera
    #When I select my microphone
    #When I select my language
    #Then I enter to my LMS login page

  Examples:
      | institutionId | message                        |
      | BBDEV05       | You logged into a secure area! |
      | foobar        |Your username is invalid!       |
