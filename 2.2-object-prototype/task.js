'use strict'

String.prototype.isPalindrome = function () {
	const string = this.toLowerCase().join('').replace(/\s/g, '').split(' ');
	console.log(string);
	console.log(string.reverse());
	return string === string.reverse();	
}


	

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let sum = 0;
    let average;
    let summaryMark;
    if (marks.length === 0) {
    	return 0
    } else {
      for (let i = 0; i < marks.length; i++) {
	  	sum += marks[i];
	  }
	summaryMark = sum;
    average = summaryMark/marks.length;
   	let roundedAverage = Math.round(average);
   	return roundedAverage;
   }
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}