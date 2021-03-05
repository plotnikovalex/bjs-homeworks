'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
	let p = parseInt(percent) / 100 / 12; //процентная ставка
    let c = parseInt(contribution); 	  //начальный взнос	
    let a = parseInt(amount);  			  //общая стоимость	
  	if (p === 'NaN' || p < 0) {
   		return `Параметр "процентная ставка" содержит неправильное значение ${percent}`;
   	} else if (c === NaN || c < 0) {
   		return `Параметр "начальный взнос" содержит неправильное значение ${contribution}`;
   	} else if (a === NaN || a < 0) {
   		return `Параметр "общая стоимость" содержит неправильное значение ${amount}`;
   	} else {
			
  		let today = new Date();
  		if (today.getFullYear() > date.getFullYear()) {
			return `Параметр "срок ипотеки" содержит неправильное значение ${date}`;
		} else {
			let s = a - c;						  //тело кредита
  			let n = date.getMonth() - today.getMonth() + (12*(date.getFullYear() - today.getFullYear())); //срок кредита в месяцах
  			let pay = s*(p+p/(((1+p)**n)-1));			//ежемесячная оплата
  			let totalAmount = (pay * n).toFixed(2);
  			console.log(totalAmount);
 			return +totalAmount;
 		}	
    }
}



function getGreeting(name) {

	if (name === false || name === ' ' || name === '' || name === undefined ) {
		name = 'Привет, мир! Меня зовут Аноним.';
	} else {
		name = `Привет, мир! Меня зовут ${name}.`;
	}
	// код для задачи №2 писать здесь
    return name;
}