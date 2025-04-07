let valor = prompt("Digite o valor :");
valor = Number(valor);
let porcentagem = valor * (15/100);
let valorCImposto= valor + porcentagem;
alert(valorCImposto)
document.write(`O valor integral somado ao imposto e igual ${valorCImposto}!!`)