// Teste seguindo os moldes da aula 24-02-25


let frase = "  O Brasil e um pais maravilhoso!!   ";
let removerEspacos= frase.replace(/\s+/g,"");
let tudoMaiusculo = removerEspacos.toUpperCase();
let numCaracteres= tudoMaiusculo.length;
let adc10= tudoMaiusculo + 10;
let numCaracteres2= adc10.length;
console.log(frase) ;
console.log(tudoMaiusculo) ;
console.log(numCaracteres) ;
console.log(adc10) ;
console.log(numCaracteres2) ;

let convercao = numCaracteres2.toString();
console.log(convercao + 3);
let convercaoDaConvercao = Number(convercao);


console.log(convercaoDaConvercao + 3);
console.log(typeof numCaracteres2);
console.log(typeof convercao);
console.log(typeof convercaoDaConvercao);
console.log(numCaracteres2 == convercao); // retonar true
console.log(numCaracteres2 === convercao); // retonar false pois eles por mais que tenham valores iguais um e uma string e outro um 'Number'
console.log(numCaracteres2 !== convercao);
console.log(numCaracteres2 + convercao);
console.log(++numCaracteres2)
