"use strict"
//Задача: решение квадратных уравнений
function solveEquation(a, b, c) {
  let discriminant = b ** 2 - 4 * a * c;
  let arr = [];
  if (discriminant < 0) {
    return []
  } else if (discriminant === 0) {
    let root = -b / (2 * a)
    arr.push(root);
  } else if (discriminant > 0) {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
  }
  return arr;
}

//Задача: калькулятор для расчёта выплат по ипотеке
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12;
  let S = amount - contribution;
  let monthlyPayment = S * (P + (P / (((1 + P) ** countMonths) - 1)));
  let total = monthlyPayment * countMonths;
  let roundedTotal = Number(total.toFixed(2));
  return roundedTotal;
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 0, 20000, 24));
console.log(calculateTotalMortgage(10, 1000, 20000, 24));
console.log(calculateTotalMortgage(10, 20000, 20000, 24));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36));
