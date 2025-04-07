const numero = parseInt(prompt("Digite o numero o qual deseja verificar."));
let soma = 0;
for (let i = 1; i < numero; i++) {
	numero % i=== 0 ? (soma += i) : null;
}
switch (soma === numero){
	case true:
		alert(`${numero} é perfeito.`);
		break;
	default:
		alert(`${numero} não e perfeito.`)

}

// 1. Faça um algoritmo que verifique se um número é perfeito ou não. Um número é considerado perfeito quando a soma de seus divisores (exceto ele mesmo) é igual a ele. Por exemplo, o número 6 é perfeito porque seus divisores são 1, 2 e 3, e 1 + 2 + 3 = 6.
let num2 = parseInt(prompt("Digite o numero o qual deseja verificar."));
let soma2 = 0;
for (let i = 1; i < num2; i++) {
	num2 % i === 0 ? (soma2 += i) : null;
}
switch (soma2 === num2) {
	case true:
		alert(`${num2} é perfeito.`);
		break;
	default:
		alert(`${num2} não é perfeito.`);
}
// 2. Faça um algoritmo que verifique se um número é primo ou não. Um número é considerado primo quando ele é divisível apenas por 1 e por ele mesmo. Por exemplo, o número 7 é primo porque seus únicos divisores são 1 e 7.
let num3 = parseInt(prompt("Digite o numero o qual deseja verificar."));
let primo = true;
for (let i = 2; i < num3; i++) {
	if (num3 % i === 0) {
		primo = false;
		break;
	}
}
switch (primo) {
	case true:
		alert(`${num3} é primo.`);
		break;
	default:
		alert(`${num3} não é primo.`);
}
// 3. Faça um algoritmo que calcule o fatorial de um número. O fatorial de um número n é o produto de todos os números inteiros de 1 a n. Por exemplo, o fatorial de 5 é 5! = 5 * 4 * 3 * 2 * 1 = 120.
let num4 = parseInt(prompt("Digite o numero o qual deseja verificar."));
let fatorial = 1;
for (let i = 1; i <= num4; i++) {
	fatorial *= i;
}
switch (num4) {
	case 0:
		alert(`O fatorial de ${num4} é 1.`);
		break;
	default:
		alert(`O fatorial de ${num4} é ${fatorial}.`);
}	
// 4. Faça um algoritmo que calcule a soma dos números de 1 a n. Por exemplo, a soma dos números de 1 a 5 é 1 + 2 + 3 + 4 + 5 = 15.
let num5 = parseInt(prompt("Digite o numero o qual deseja verificar."));
let soma5 = 0;
for (let i = 1; i <= num5; i++) {
	soma5 += i;
}
switch (num5) {
	case 0:
		alert(`A soma dos números de 1 a ${num5} é 0.`);
		break;
	default:
		alert(`A soma dos números de 1 a ${num5} é ${soma5}.`);
}	
// 5. Faça um algoritmo que calcule a média de uma lista de números. O algoritmo deve solicitar ao usuário a quantidade de números e, em seguida, solicitar os números um por um, calculando a média ao final.
let quantidade = parseInt(prompt("Digite a quantidade de números que deseja calcular a média."));
let soma6 = 0;
for (let i = 1; i <= quantidade; i++) {
	let numero = parseInt(prompt(`Digite o ${i}º número:`));
	soma6 += numero;
}
let media = soma6 / quantidade;
switch (quantidade) {
	case 0:
		alert(`A média dos números é 0.`);
		break;
	default:
		alert(`A média dos números é ${media}.`);
}	
// 6. Faça um algoritmo que verifique se uma string é um palíndromo. Um palíndromo é uma palavra ou frase que pode ser lida da mesma forma de trás para frente. Por exemplo, "arara" e "ana" são palíndromos.
let string = prompt("Digite uma string para verificar se é um palíndromo.");
let stringInvertida = string.split("").reverse().join("");
switch (string === stringInvertida) {
	case true:
		alert(`${string} é um palíndromo.`);
		break;
	default:
		alert(`${string} não é um palíndromo.`);
}
// 7. Faça um algoritmo que conte quantas vogais e consoantes existem em uma string. O algoritmo deve solicitar ao usuário uma string e, em seguida, contar e exibir o número de vogais e consoantes presentes na string.
let string2 = prompt("Digite uma string para contar as vogais e consoantes.");
let vogais = 0;
let consoantes = 0;	
for (let i = 0; i < string2.length; i++) {
	let letra = string2[i].toLowerCase();
	if (letra.match(/[aeiou]/)) {
		vogais++;
	} else if (letra.match(/[bcdfghjklmnpqrstvwxyz]/)) {
		consoantes++;
	}	
}
switch (vogais) {
	case 0:
		alert(`A string "${string2}" nao possui vogais.`);
		break;
	default:
		alert(`A string "${string2}" possui ${vogais} vogais e ${consoantes} consoantes.`);	
}	
// 8. Faça um algoritmo que inverta uma string. O algoritmo deve solicitar ao usuário uma string e, em seguida, exibir a string invertida.
let string3 = prompt("Digite uma string para inverter.");
let stringInvertida2 = string3.split("").reverse().join("");
switch (string3) {
	case "":
		alert(`A string "${string3}" está vazia.`);
		break;
	default:
		alert(`A string invertida é "${stringInvertida2}".`);
}

// 9. Faça um algoritmo que verifique se um número é par ou ímpar. O algoritmo deve solicitar ao usuário um número e, em seguida, exibir se o número é par ou ímpar.	
let num7 = parseInt(prompt("Digite um número para verificar se é par ou ímpar."));
switch (num7 % 2 === 0) {
	case true:
		alert(`${num7} é par.`);
		break;
	default:
		alert(`${num7} é ímpar.`);
}
// 10. Faça um algoritmo que calcule a tabuada de um número. O algoritmo deve solicitar ao usuário um número e, em seguida, exibir a tabuada desse número de 1 a 10.
let num8 = parseInt(prompt("Digite um número para calcular a tabuada."));
let tabuada = "";
for (let i = 1; i <= 10; i++) {
	tabuada += `${num8} x ${i} = ${num8 * i}\n`;
}	
switch (num8) {
	case 0:
		alert(`A tabuada de 0 é 0 x 1 = 0.`);
		break;
	default:
		alert(`A tabuada de ${num8} é:\n${tabuada}`);
}	
// 11. Faça um algoritmo que calcule a soma dos números pares de 1 a n. O algoritmo deve solicitar ao usuário um número n e, em seguida, calcular e exibir a soma dos números pares de 1 a n.
let num9 = parseInt(prompt("Digite um número para calcular a soma dos números pares de 1 a n."));
let somaPares = 0;
for (let i = 1; i <= num9; i++) {
	if (i % 2 === 0) {
		somaPares += i;
	}
}
switch (num9) {
	case 0:
		alert(`A soma dos números pares de 1 a ${num9} é 0.`);
		break;
	default:
		alert(`A soma dos números pares de 1 a ${num9} é ${somaPares}.`);
}
// 12. Faça um algoritmo que calcule a soma dos números ímpares de 1 a n. O algoritmo deve solicitar ao usuário um número n e, em seguida, calcular e exibir a soma dos números ímpares de 1 a n.
let num10 = parseInt(prompt("Digite um número para calcular a soma dos números ímpares de 1 a n."));
let somaImpares = 0;
for (let i = 1; i <= num10; i++) {
	if (i % 2 !== 0) {
		somaImpares += i;
	}
}
switch (num10) {
	case 0:
		alert(`A soma dos números ímpares de 1 a ${num10} é 0.`);
		break;
	default:
		alert(`A soma dos números ímpares de 1 a ${num10} é ${somaImpares}.`);
}
// 13. Faça um algoritmo que calcule a soma dos números de Fibonacci até n. O algoritmo deve solicitar ao usuário um número n e, em seguida, calcular e exibir a soma dos números de Fibonacci até n.
let num11 = parseInt(prompt("Digite um número para calcular a soma dos números de Fibonacci até n."));
let a = 0;
let b = 1;
let somaFibonacci = 0;
for (let i = 0; i < num11; i++) {
	somaFibonacci += a;
	let temp = a;
	a = b;
	b = temp + b;
}
switch (num11) {
	case 0:
		alert(`A soma dos números de Fibonacci até ${num11} é 0.`);
		break;
	default:
		alert(`A soma dos números de Fibonacci até ${num11} é ${somaFibonacci}.`);

}
// 14. Faça um algoritmo que calcule a soma dos números primos até n. O algoritmo deve solicitar ao usuário um número n e, em seguida, calcular e exibir a soma dos números primos até n.
let num12 = parseInt(prompt("Digite um número para calcular a soma dos números primos até n."));
let somaPrimos = 0;
for (let i = 2; i <= num12; i++) {
	let primo = true;
	for (let j = 2; j < i; j++) {
		if (i % j === 0) {
			primo = false;
			break;
		}
	}
	if (primo) {
		somaPrimos += i;
	}
}
switch (num12) {
	case 0:
		alert(`A soma dos números primos até ${num12} é 0.`);
		break;
	default:
		alert(`A soma dos números primos até ${num12} é ${somaPrimos}.`);
}
// 15. Faça um algoritmo que calcule a soma dos dígitos de um número. O algoritmo deve solicitar ao usuário um número e, em seguida, calcular e exibir a soma dos dígitos desse número.
let num13 = parseInt(prompt("Digite um número para calcular a soma dos dígitos."));
let somaDigitos = 0;
let num13String = num13.toString();
for (let i = 0; i < num13String.length; i++) {
	somaDigitos += parseInt(num13String[i]);
}
switch (num13) {
	case 0:
		alert(`A soma dos dígitos de ${num13} é 0.`);
		break;
	default:
		alert(`A soma dos dígitos de ${num13} é ${somaDigitos}.`);
}
// 16. Faça um algoritmo que calcule a soma dos números de uma lista. O algoritmo deve solicitar ao usuário os números da lista e, em seguida, calcular e exibir a soma dos números.	
let quantidade2 = parseInt(prompt("Digite a quantidade de números que deseja somar."));
let soma7 = 0;
for (let i = 1; i <= quantidade2; i++) {
	let numero = parseInt(prompt(`Digite o ${i}º número:`));
	soma7 += numero;
}
alert(`A soma dos números da lista é ${soma7}.`);
// 17. Faça um algoritmo que calcule a média de uma lista de números. O algoritmo deve solicitar ao usuário os números da lista e, em seguida, calcular e exibir a média dos números.
let quantidade3 = parseInt(prompt("Digite a quantidade de números que deseja calcular a média."));
let soma8 = 0;
for (let i = 1; i <= quantidade3; i++) {
	let numero = parseInt(prompt(`Digite o ${i}º número:`));
	soma8 += numero;
}
alert(`A média dos números da lista é ${soma8 / quantidade3}.`);
