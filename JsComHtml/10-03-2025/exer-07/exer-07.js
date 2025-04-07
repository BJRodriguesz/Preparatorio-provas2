let valor01 = prompt("Digite o primeiro valor :");
valor01 = Number(valor01);
let desconto = valor01 * (10/100);
let valorImpostado = (valor01 + desconto) - (valor01*(15/100))  ;
document.write(valorImpostado);
