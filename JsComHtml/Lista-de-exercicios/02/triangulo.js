const l01 = parseInt(prompt("DIgite o valor do lado 01"));
const l02 = parseInt(prompt("DIgite o valor do lado 02"));
const l03 = parseInt(prompt("DIgite o valor do lado 03"));

if (l01 === l02 && l02 === l03) {
	alert("O triangulo e equilatero");
} else if (l01=== l02 || l01 === l03 || l01 === l03) {
	alert("O triangulo é isósceles");
} else{
	alert("O triangulo é escaleno");
}

