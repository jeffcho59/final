var expect = require("chai").expect;
var assert = require('chai').assert;
var should = require('chai').should;

var factory = require("../public/javascripts/factorydecorator.js");

describe("factory", function(){
	it("should make a $1600 laptop", function(){
		var included = {
			screenSize:"11 inches",
			hddSize:"128 GB",
			ramSize:"8 GB",
			price:1000
		};
	    var results = factory.included();
        expect(results).to.be.a('array');
	});
