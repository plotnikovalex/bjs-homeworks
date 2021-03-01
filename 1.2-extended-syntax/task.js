'use strict';
function getResult(a,b,c){
    // код для задачи №1 писать 
    let d = b**2 - 4*a*c;
    let x = [];
    if (d === 0) {
      let x1 = (-b + Math.sqrt(d))/2*a;
      x.push(x1);     
    } else if (d > 0) {
      let x1 = (-b + Math.sqrt(d))/2*a;
      let x2 = (-b - Math.sqrt(d))/2*a;
      x.push(x1,x2);
    }
    return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать 
    let arr = marks;
    let averageMark;
    let sum = 0;
    if (arr.length === 0) {
      averageMark = 0;
    } else {
      arr = arr.slice(0, 5);
      for (let i = 0; i < arr.length; i++){
        sum += arr[i];
      }
      averageMark = sum/arr.length;
	}
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    let result = '';
    if (age < 18) {
      result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    } else {
      result = `Не желаете ли олд-фэшн, ${name}?`
    }
    return result;
    // return result;
}