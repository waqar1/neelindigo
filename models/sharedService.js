myApp.factory('sharedService', function() {
  
  var fabric;
  var position;
  var mordent;
  var material;
  var time;
  var sub;
  var mordentVal;
  var materialVal;
  var swatchesCollection = [];
  
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
  var setSubMenu = function(sub){
    this.sub = sub;
  };
  var getSubMenu = function(){
    return this.sub;
  };
  var setMaterial = function(material){
  	this.material = material;
  };
  var getMaterial = function(){
  	return this.material;
  };
  var setTime = function(time){
    this.time = time;
  };
  var getTime = function(){
    return this.time;
  };

  var setMordentVal = function(val){
    this.mordentVal = val;
  };

  var getMordentVal = function(){
    return this.mordentVal;
  };

  var setMaterialVal = function(val){
    this.materialVal = val;
  };

  var getMaterialVal = function(){
    return this.materialVal;
  }

  var toString = function(){
  	return 'Fabric: ' + this.getFabric() + ', Position: ' + this.getPosition() + ', Mordent: ' + this.getMordent() + ', Material: ' + this.getMaterial() + ', Time: ' + this.getTime() + ', Sub Menu: '+ this.getSubMenu();
  };

  var storeCollection = function(obj){
    swatchesCollection.push(obj);
  };

  var getCollection = function(){
    return swatchesCollection;
  };

  return {
  	setFabric: setFabric,
  	getFabric: getFabric,
  	setPosition: setPosition,
  	getPosition: getPosition,
  	setMordent: setMordent,
  	getMordent: getMordent,
  	setMaterial: setMaterial,
  	getMaterial: getMaterial,
    setTime: setTime,
    getTime: getTime,
    setSubMenu: setSubMenu,
    getSubMenu: getSubMenu,
    setMordentVal:setMordentVal,
    getMordentVal:getMordentVal,
    setMaterialVal: setMaterialVal,
    getMaterialVal: getMaterialVal,
    storeCollection: storeCollection,
    getCollection: getCollection,
  	toString: toString
  };

});