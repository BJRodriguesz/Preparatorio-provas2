let nota = prompt("Digite qual foi sua nota!");
/*Possivel resolucão usando parseFloat(prompt("txt)); não seria necessario usar o nota = Number(nota)"*/
nota = Number(nota);

if (nota < 5) {
	console.log("Você foi reprovado!");
	alert("Você foi reprovado!");

} else if (nota === 5) {
	console.log("Você está na média!");
	alert("Você está na média!");

} else {
	console.log("Você foi aprovado");
	alert("Você foi aprovado");
} 