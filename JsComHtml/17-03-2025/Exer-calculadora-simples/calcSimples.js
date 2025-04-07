let num01 = parseFloat(prompt("Digite o primeiro numero"));
let num02 = parseFloat(prompt("Digite o segundo numero"));
let op = prompt("Escolha uma das oporecões matematicas (+ , - , * , /)");
switch (op){
	case "/":
		if (num02===0) {
			document.write("Nao e possivel fazer esta opercão");
		}else{
			document.write(num01 / num02);
		}
		break;
	case "+":
		document.write(num01 + num02);
		break;
	case "-":
		document.write(num01 - num02);
		break;
	case "*":
		document.write(num01 * num02);
		break;
	default:
		document.write("Não e uma opercão valida!");
}