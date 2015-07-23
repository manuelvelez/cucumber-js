Feature: domain creation	
  As an user
  I want to create a domain
  So that I can get the result of an operation

Scenario Outline: Create a domain
	Given the main window of the application
	When I click on Create new domain
	And I write a <domainName>
	And I Write a <description>
	And I click on save button
	Then a domain called <domainName> is saved

Examples:
	| domainName | description | 
	|   name1    | domdescprip |
	|   name2    | domdescprip |
	|   name3    | domdescprip |
	|   name4    | domdescprip |
	|   name5    | domdescprip |
	|   name6    | domdescprip |
	|   name7    | domdescprip |
	|   name8    | domdescprip |
	|   name9    | domdescprip |
	|   name10   | domdescprip |
	|   name11   | domdescprip |
	|   name12   | domdescprip |
	|   name13   | domdescprip |
	|   name14   | domdescprip |
