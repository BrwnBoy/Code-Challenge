function calcnetSalary(netSalary){

const taxRate = 0.25;
let payee = taxRate * basicSalary;

const nhifRate = 0.02;
let nhifDeductions = nhifRate * basicSalary;

const nssfRate = 0.12;
let nssfDeductions = nssfRate * basicSalary;

let grossSalary = parseFloat(basicSalary) + parseFloat(benefits);

let netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

console.log(`Basic Salary: ${basicSalary}`);
console.log(`Benefits: ${benefits}`);
console.log(`Payee (tax): ${payee}`);
console.log(`NHIF deductions: ${nhifDeductions}`);
console.log(`NSSF deductions: ${nssfDeductions}`);
console.log(`Gross Salary: ${grossSalary}`);
console.log(`Net salary: ${netSalary}`);
}