'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
	let p = parseInt(percent) / 100 / 12;
    let c = parseInt(contribution);
    let a = parseInt(amount);
  
	let s = a - c;
  let today = new Date();
  let n = date.getMonth() - today.getMonth() + (12*(date.getFullYear() - today.getFullYear()));
  let pay = s*(p+p/(((1+p)**n)-1));
  let totalAmount = (pay * n).toFixed(2);
  return +totalAmount;
    // код для задачи №1 писать здесь
    // return totalAmount;
}


function getGreeting(name) {
	let greeting;
	if (name == false) {
		greeting = 'Привет, мир! Меня зовут Аноним';
	} else {
		let nameToUpper = name.substr(0, 1).toUpperCase() + name.substr(1);
		greeting = `Привет, мир! Меня зовут ${nameToUpper}`;
	}

    // код для задачи №2 писать здесь
    return greeting;
}