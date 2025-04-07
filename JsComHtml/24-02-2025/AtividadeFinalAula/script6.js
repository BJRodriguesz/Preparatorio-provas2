// toUpperCase() / toLowerCase() / length / trim() / Number/
// Métodos básicos auto explicativo exceto trim que remove espacos e number converte string para numero

//exercicio 01 

let Brasil = "    O Brasil e um pais lindo           "
console.log(Brasil)

let BrasilSemEspaco = Brasil.trim()
console.log(BrasilSemEspaco)

let TudoMaisculo = BrasilSemEspaco.toUpperCase( )
console.log(TudoMaisculo)

let NumeroLetras = TudoMaisculo.length
console.log(NumeroLetras)

let pt10 = Brasil + 10
console.log(pt10)

let convercao = "234"
let convertido = Number(convercao)
console.log(typeof convertido)
console.log(convertido)
console.log(++convertido)
console.log(convertido)

console.log(convercao == convertido)
console.log(convercao === convertido)
console.log(convercao >= convertido)
console.log(convercao <= convertido)
console.log(convercao > convertido)
console.log(convercao < convertido)