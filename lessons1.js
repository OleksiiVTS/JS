let weight = "88,3";
let height = "1.75";

weight = Number(weight.replace(",", "."));
height = Number(height.replace(",", "."));


console.log(weight);
console.log(height);

const bmi = Number((weight / Math.pow(height, 2)).toFixed(1)); 
console.log(bmi);
