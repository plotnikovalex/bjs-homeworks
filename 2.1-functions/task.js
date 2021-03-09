'use strict';

function getSolutions(a, b, c) {
	let d = b**2 - 4*a*c;
	if (d < 0) {
		return {D: d, roots: []};
	} else if (d === 0) {
    let x1 = -b/(2*a);
    return {D: d, roots: [x1]};
  } else {
      let x1 = (-b + Math.sqrt(d))/(2*a);
      let x2 = (-b - Math.sqrt(d))/(2*a);
      return {D: d, roots: [x1, x2]};
  }
}
//getSolutions(1, 2, 3);



function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
   if (result.D < 0) {
     console.log('Уравнение не имеет вещественных корней');
  } else if (result.D === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]} `);
  } else {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }
}

//showSolutionsMessage(7, 20, -3);

//задача 2

function getAverageScore(data) {

let arr = [];
let result = {};
for (let key in data) {
  let averageMark = getAverageMark(data[key]);
  result[key] = averageMark;
  arr.push(averageMark);
}
result['average'] = getAverageMark(arr);
return result;
}
// console.log(getAverageScore({
//   algebra: [],
//   geometry: [],
//   russian: []
  // physics: [5, 5],
  // music: [2, 2, 6],
  // english: [4, 4, 3],
  // poetry: [5, 3, 4],
  // chemistry: [2],
  // french: [4, 4]
// }));


function getAverageMark(marks) {
	let sum = 0;
  let diff;
  if (marks.length === 0) {
    diff = 0;
  } else {
	  for (let i = 0; i < marks.length; i++) {
	  	sum += marks[i];
	  }
    diff = sum/marks.length;
  }
  return diff; 
}

getAverageMark([4, 2, 3]);