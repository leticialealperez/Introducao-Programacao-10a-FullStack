/**
 * 
 *Crie duas variáveis usando let. Na primeira coloque um total de minutos e defina um valor para ela (por exemplo, minutos = 120). Na segunda coloque o total em segundos destes minutos armazenados na primeira variável let. Apresente no documento html a seguinte informação: "_ minutos equivale à _ segundos!" 
 * 
 * 
 */

let totalMinutos = parseInt(prompt("Digite a quantidade de minutos: ").replace('.', '').replace(',', '.'))
let totalSegundos = totalMinutos * 60;

document.write(`<h2>${totalMinutos} minutos equivale á ${totalSegundos} segundos!</h2>`)