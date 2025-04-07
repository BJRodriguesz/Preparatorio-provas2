const ano = parseInt(prompt("Digite um ano:"));

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    alert(`${ano} é um ano bissexto.`);
} else {
    alert(`${ano} é um ano comum.`);
}
