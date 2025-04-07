const nota = parseInt(prompt("Digite a nota (0 a 100):"));

if (nota >= 90 && nota <= 100) {
    alert("Você tirou um A");
} else if (nota >= 80 && nota < 90) {
    alert("Você tirou um B");
} else if (nota >= 70 && nota < 80) {
    alert("Você tirou um C");
} else if (nota >= 60 && nota < 70) {
    alert("Você tirou um D");
} else {
    alert("Você tirou um F");
}
