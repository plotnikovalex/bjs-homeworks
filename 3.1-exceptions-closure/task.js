
'use strict'
//задача1

function parseCount(count) {
	 count = Number.parseInt(count);
		if (Number.isNaN(count) === true) {
			const result = new Error('Невалидное значение');
			throw result;
		}
		return count;
}

function validateCount(count) {
  try {
    if (typeof count === 'string' || typeof count === 'number') {
      return parseCount(count);
    } 
  }
  catch(error) {
     return error;
  } 
}

//задача 2

class Triangle {

  constructor(a,b,c){
    this.a = a;
    this.b = b;
    this.c = c;
    this.perimeter = 0;
    if ((a + b) < c || (a + c) < b || (c + b) < a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }

  getPerimeter() {
    this._perimeter = this.a + this.b + this.c;
    return +this._perimeter;
  }


  getArea() {
    const p = 0.5 * this._perimeter;
    const s = Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c)).toFixed(3);
    return +s;
  }
}



function getTriangle(a,b,c) {
  let triangle;
   try {
    triangle = new Triangle(a,b,c);
    return triangle;
  }
  catch(error) {
    console.log(error);
  }
}


// второй вариант решения задачи 2



// class Triangle {

//   constructor(a,b,c){
//     this.a = a;
//     this.b = b;
//     this.c = c;
//     //this.perimeter = 0;
//     if ((a + b) < c || (a + c) < b || (c + b) < a) {
//       throw new Error('Треугольник с такими сторонами не существует');
//     }
//   }

//   getPerimeter() {
//     const perimeter = this.a + this.b + this.c;
//     return Number(perimeter);
//   }


//   getArea() {
//     const perimeter = this.a + this.b + this.c;
//     const p = 0.5 *perimeter;
//     const s = Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c)).toFixed(3);
//     return Number(s);
//   }
// }
// const tr = new Triangle(2,2,3);
// console.log(tr.getArea());
// function getTriangle(a,b,c) {
//   let triangle;
//    try {
//     triangle = new Triangle(a,b,c);
//     return triangle;
//   }
//   catch(error) {
//     throw new Error('Ошибка! Треугольник не существует');
//     console.log(error);
//   }
// }