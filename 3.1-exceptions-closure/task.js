
'use strict'
//задача1

function parseCount(count) {
	 count = Number.parseInt(count);
		if (Number.isNaN(count)) {
			throw new Error('Невалидное значение');
			 
		}
		return count;
}

function validateCount(count) {
  try {
      return parseCount(count);
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
    if ((a + b) < c || (a + c) < b || (c + b) < a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }

  getPerimeter() {
   return Number(this.a + this.b + this.c);
  }


  getArea() {
    const p = 0.5 * this.getPerimeter();
    const s = Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c)).toFixed(3);
    return +s;
  }
}



function getTriangle(a,b,c) {
  try{
    return new Triangle(a,b,c);
  }
  catch {
    const obj = {
     getPerimeter() {return 'Ошибка! Треугольник не существует'},
     getArea() {return 'Ошибка! Треугольник не существует'}
   };
   return obj;
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