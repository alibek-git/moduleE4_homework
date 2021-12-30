/* Написать функцию, которая создает пустой объект, но без прототипа. */

function objCreator(){
  return {}
}

let myObj = objCreator()
console.log(myObj)