var factory = require("../public/javascripts/factorydecorator.js")
var qunit = require("../public/javascripts/vendor/qunit.js")

exports.index = function(req, res){
  res.render('index', { title: 'Buy laptop' });
};

exports.purchase = function(req, res){
	res.render('purchase', { title: 'Purchase' });
};

exports.quotes = function(req, res){
	res.render('quotes', { title: 'Quotes' });
};

exports.addLaptop = function(req, res){
	console.log(req.body);
	
	var base = factory.included();
	console.log(base);
	
	var diff = factory.decorate(req.body.screen, 
								req.body.drive, 
								req.body.ram, 
								base);
	console.log(diff);

	var mongoose = require('mongoose');

	var Schema = mongoose.Schema;

	var QuoteSchema = new Schema({
		screenSize : String,
		hdd : String,
		ram: String,
		price: Number,
	});
	mongoose.model('Quote', QuoteSchema);

	var Quote = mongoose.model('Quote');
	
	var diffQuote = new Quote ( {
		screenSize: diff.screenSize,
		hdd: diff.hddSize,
		ram: diff.ramSize,
		price: diff.price
	});
	
	diffQuote.save(function (err) {
    if(err) {
      console.log(err)
    } else {
      	console.log(diff);
      	res.render('purchase', { title: 'Purchase', 
      							 screenSize: diff.screenSize, 
      							 hddSize: diff.hddSize, 
      							 ramSize: diff.ramSize, 
      							 price: diff.price }); 
    }

  	});
};


exports.getQuotes = function(req, res) {

	var mongoose = require('mongoose');

	var Schema = mongoose.Schema;

	var QuoteSchema = new Schema({
		screenSize : String,
		hdd : String,
		ram: String,
		price: Number,
	});

	mongoose.model('Quote', QuoteSchema);
	
	var Quote = mongoose.model('Quote');
	Quote.find(function(req,quotes) {
		console.log(Quote.screenSize);
		res.render('quotes', {
			title: 'Quotes' ,
			quotes: quotes
		});
	});
};

