let basicSalary = prompt("Enter basic salary:");
let benefits = prompt("Enter benefits:");

const taxRate = 0.3;
let payee = taxRate * basicSalary;

const nhifRate = 0.05;
let nhifDeductions = nhifRate * basicSalary;

const nssfRate = 0.06;
let nssfDeductions = nssfRate * basicSalary;

let grossSalary = parseFloat(basicSalary) + parseFloat(benefits);

let netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

console.log('Basic Salary: ${basicSalary}');
console.log('Benefits: ${benefits}');
console.log('Payee (tax): ${payee}');
console.log('NHIF deductions: ${nhifDeductions}');
console.log('NSSF deductions: ${nssfDeductions}');
console.log('Gross Salary: ${grossSalary}');
console.log('Net salary: ${netSalary}');