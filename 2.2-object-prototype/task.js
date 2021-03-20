'use strict'

String.prototype.isPalindrome = function () {
	this.isPalindrome = string.toLowerCase();
	const valid = true;
	for (const i = 0, j = string.length - 1; i < string.length; i++, j--) {
		if (string[i] !== string[j]) {
			valid = false; 
			break;
		}
	}
	return valid;
}
string.isPalindrome();
// const String = function(str) {
// 	this.str = str.toLowerCase();
// }
// const str = new String (str);
// String.prototype.isPalindrome = function(str){
// 	let valid = true;
// 	for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
// 		if (str[i] !== str[j]) {
// 			valid = false; 
// 			break;
// 		}
// 	}
// 	return valid;
// }

// str.prototype = Object.create(String.prototype);
// String.isPalindrome();
// console.log(string.str);



	

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let sum = 0;
    let average;
      for (let i = 0; i < marks.length; i++) {
	  	sum += marks[i];
	  }
    average = sum/marks.length;
   let roundedAverage = Math.round(average);
   return roundedAverage;
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}