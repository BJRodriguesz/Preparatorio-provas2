const temperatura = parseInt(prompt("Digite a temperatura atual em °C:"));
let roupa;

if (temperatura <= 5) {
    roupa = "Use casaco pesado e luvas.";
} else if (temperatura <= 15) {
    roupa = "Use jaqueta e calça.";
} else if (temperatura <= 25) {
    roupa = "Roupas leves e confortáveis.";
} else {
    roupa = "Vista-se com roupas de verão.";
}

alert(roupa);
