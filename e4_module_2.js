/*Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство 
с данным именем. Функция должна возвращать true или false. */

myStr1 = 'bark'
myStr2 = 'kick'
myFunc = {jump: '1', scream: '2', bark: '3'}

function checkProperty(str, obj) {
    let result;
	for (let item in obj){
		if(item === str){
			result = true;
		}
		else {
			result = false;
		}
	}
  console.log(result);
}

checkProperty(myStr1, myFunc)
checkProperty(myStr2, myFunc)