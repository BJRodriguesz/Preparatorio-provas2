const idade = parseInt(prompt("Digite sua idade:"));
const estudante = prompt("Você é estudante? (sim ou não)").toLowerCase();

let tarifa = "Tarifa normal";

if (idade < 5) {
    tarifa = "Tarifa grátis";
} else if (idade >= 60) {
    tarifa = "Tarifa reduzida";
} else if (estudante === "sim") {
    tarifa = "Tarifa estudantil";
}

alert(`Sua tarifa é: ${tarifa}`);
