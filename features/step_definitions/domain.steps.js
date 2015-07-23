'use strict';

var expect = require('chai').expect;

module.exports = function() {
    this.World = require('../support/world.js').World;

    this.Given(/^the main window of the application$/, function (next) {
        this.waitFor("#mod-tabs-1 > a");
        this.driver.findElement({ css: "#mod-tabs-1 > a" }).click();
        next();
    });

    this.When(/^I click on Create new domain$/, function(next) {
        this.waitFor("#mod-tabs-1 > div > div:nth-child(3)");
        this.driver.findElement({ css: "#mod-tabs-1 > div > div:nth-child(3)" }).click();
        next();
    });

    this.When(/^I write a (.*)$/, function(domainName, next) {
        this.waitForXpath("//input[@data-type='domain-name']");
        this.driver.findElement({ xpath: "//input[@data-type='domain-name']" }).sendKeys(domainName);
        next();
    });

    this.When(/^I Write a (.*)$/, function(description, next) {
        this.driver.findElement({ xpath: "//div[@class='field']/textarea" }).sendKeys(description);
        next();
    });

    this.When(/^I click on save button$/, function (next) {
        this.driver.findElement({ xpath: "//button[@data-type='save-domain']" }).click();
        next();
    });

    this.Then(/^a domain called (.*) is saved$/, function (domainName, next) {
        this.waitForXpath("//h1[@contenteditable='true']", 5000);
        this.driver.findElement({ xpath: "//h1[@contenteditable='true']" }).getText().then(function (textInH1) {
            expect(textInH1).equals(domainName);
        });

        next();
    });



};
