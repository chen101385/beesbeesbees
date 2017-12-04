var ForagerBee = function(color, food) {

  HoneyMakerBee.call(this, color, food);
	this.age = 10;
	this.job = 'find pollen';
	this.canFly = true;
	this.treasureChest = [];
};


ForagerBee.prototype = Object.create(HoneyMakerBee.prototype);
ForagerBee.prototype.constructor = ForagerBee;
ForagerBee.prototype.forage = function() {
  this.treasureChest.push('treasure');
}



