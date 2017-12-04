var ForagerBee = function() {
	this.age = 10;
	this.job = 'find pollen';
	this.canFly = true;
	//has own treasureChest array that masks prototype's treasureChest array
	this.treasureChest = [];
};


ForagerBee.prototype = Object.create(HoneyMakerBee.prototype);
ForagerBee.prototype.constructor = ForagerBee;
ForagerBee.prototype.forage = function() {
  this.treasureChest.push('treasure');
}
ForagerBee.prototype.treasureChest = [];

