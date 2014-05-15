exports = module.exports = {};
//factory design patter: because it's easy to instantiate an object with a lot of properties
//with a factory.


exports.included = function(){
	var included = {
		screenSize:"11 inches",
		hddSize:"128 GB",
		ramSize:"8 GB",
		price:1000
	};
	return included;
}

exports.decorate = function(screen, drive, ram, decorated){
	if(screen == "15"){
		decorated.screenSize = "15 inches";
		decorated.price = decorated.price + 200;
	}
	if(drive == "256"){
		decorated.hddSize = "256 GB";
		decorated.price = decorated.price + 200;
	}
	if(ram == "16"){
		decorated.ramSize = "16 GB";
		decorated.price = decorated.price + 200;
	}
	return decorated;
}
