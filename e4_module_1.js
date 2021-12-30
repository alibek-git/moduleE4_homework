/*Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи 
и значения только собственных свойств. Данная функция не должна возвращать значение.*/

const vehicle = {
	wheels: 4
}

const myCar = Object.create(vehicle)

myCar.doors = 4;
myCar.year = 2015
myCar.steeringWheel = true;
myCar.brand = 'Audi';

function showOwnProperties(obj){
	for (let key in obj){
		if (obj.hasOwnProperty(key)){
			console.log(`${key}: ${obj[key]}`)
		}
	}
}

showOwnProperties(myCar)