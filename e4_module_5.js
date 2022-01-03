/* Переписать консольное приложение из предыдущего юнита на классы. */

class ElectricAppliance {
  constructor(name, amp, watt, inSocket = false) {
	this.name = name,
	this.amp = amp,
	this.watt = watt,
    this.inSocket = inSocket,
    this.switchPower = function(){ 
		if(inSocket === false){
			inSocket = true;
			console.log(`The ${name} is on`)
		}
		else {
			inSocket = true;
			console.log(`The ${name} is off`)
		}
	}
	console.log(`The ${name} uses ${amp} ampers and ${watt} watts`)
  }
}

ElectricAppliance.prototype.makeNoise = function (noise){
	console.log(`${this.name} goes ${noise}`)
}


// Функция-конструктор "Кухонные приборы", прототипом которых является родительская функция ElectricAppliance
class KitchenAppliance extends ElectricAppliance {
	constructor(name, amp, watt, weight, inSocket = false){
	this.name = name,
	this.weight = weight,
	this.amp = amp,
	this.watt = watt,
    this.inSocket = inSocket,
	console.log(`${name} is a kitchen appliance that weights ${weight} kilos`)
	}
}
// KitchenAppliance.prototype = new ElectricAppliance();
KitchenAppliance.prototype.isOld = function(yearOfManufacturing){
	if(yearOfManufacturing > 2010){
		console.log(`${this.name} is a relatively new appliance that was produced in ${yearOfManufacturing}`)
	}
	else{
		console.log(`${this.name} is a relatively old appliance that was produced in ${yearOfManufacturing}, please consider replacing itt`)
	}
}



// Инструменты, прототипом которых является родительская функция ElectricAppliance
class ToolAppliances extends ElectricAppliance{
	constructor(name, amp, watt, countryOfOrigin, inSocket = false){
	this.name = name,
	this.amp = amp,
	this.watt = watt,
	this.countryOfOrigin = countryOfOrigin,
    this.inSocket = inSocket,
    console.log(`This ${name} was manufactured in ${countryOfOrigin}`)
	}
}
// ToolAppliances.prototype = new ElectricAppliance();
ToolAppliances.prototype.consumedPower = function(){
	console.log(`The power of ${this.name} is ${this.watt} watts`)
}


const dryer = new ElectricAppliance('Hair Dryer', 1.5, 75);
const oven = new KitchenAppliance('Oven', 1.0, 100, 6);
const drill = new ToolAppliances('Drill', 2.0, 150, 'Germany')


dryer.switchPower()
dryer.switchPower()
dryer.makeNoise("BRRRRRR")
oven.isOld(2007)
drill.consumedPower()
oven.makeNoise('UUuUUUuUUu')
drill.makeNoise('DrrrDrrddRrrrr')

