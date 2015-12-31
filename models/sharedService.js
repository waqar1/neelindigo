myApp.factory('sharedService', function() {
  
  var fabric;
  var position;
  var mordent;
  var material;
  
  var setFabric = function(selection){
  	this.fabric = selection;
  };
  var getFabric = function(){
  	return this.fabric;
  };
  var setPosition = function(position){
  	this.position = position;
  };
  var getPosition = function(){
  	return this.position;
  };
  var setMordent = function(mordent){
  	this.mordent = mordent;
  };
  var getMordent = function(){
  	return this.mordent;
  };
  var setMaterial = function(material){
  	this.material = material;
  };
  var getMaterial = function(){
  	return this.material;
  };

  var toString = function(){
  	return 'Fabric: ' + this.getFabric() + ', Position: ' + this.getPosition() + ', Mordent: ' + this.getMordent() + ', Material: ' + this.getMaterial();
  }

  return {
  	setFabric: setFabric,
  	getFabric: getFabric,
  	setPosition: setPosition,
  	getPosition: getPosition,
  	setMordent: setMordent,
  	getMordent: getMordent,
  	setMaterial: setMaterial,
  	getMaterial: getMaterial,
  	toString: toString
  };

});