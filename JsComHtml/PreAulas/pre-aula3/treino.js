

let treino2 = "       Nao sei oq estou escrevendo e apenas um teste para treinar  !   !";
let treino2SemEspaco= treino2.replace(/\s+/g, '');
let treino2ComUpperCase = treino2SemEspaco.toUpperCase()
let qntCaracteres2= treino2ComUpperCase.length
console.log(qntCaracteres2)
