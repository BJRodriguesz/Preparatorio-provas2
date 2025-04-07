let txt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur tempus massa et sollicitudin. Etiam eros neque, ultricies a augue et, laoreet ullamcorper tellus. Proin sit amet augue sit amet urna pharetra semper sit amet vel diam. Suspendisse et ligula quis eros congue ullamcorper non vel orci. Sed sodales fermentum pretium. Mauris venenatis neque magna, vel imperdiet massa hendrerit quis. Sed pulvinar arcu id scelerisque lobortis. Mauris vestibulum ut purus vel convallis. Donec eu risus quam. Cras vestibulum semper volutpat. Nam finibus velit quis porta pretium. Nunc pharetra nunc ut auctor ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur tempus massa et sollicitudin. Etiam eros neque, ultricies a augue et, laoreet ullamcorper tellus. Proin sit amet augue sit amet urna pharetra semper sit amet vel diam. Suspendisse et ligula quis eros congue ullamcorper non vel orci. Sed sodales fermentum pretium. Mauris venenatis neque magna, vel imperdiet massa hendrerit quis. Sed pulvinar arcu id scelerisque lobortis. Mauris vestibulum ut purus vel convallis. Donec eu risus quam. Cras vestibulum semper volutpat. Nam finibus velit quis porta pretium. Nunc pharetra nunc ut auctor ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur tempus massa et sollicitudin. Etiam eros neque, ultricies a augue et, laoreet ullamcorper tellus. Proin sit amet augue sit amet urna pharetra semper sit amet vel diam. Suspendisse et ligula quis eros congue ullamcorper non vel orci. Sed sodales fermentum pretium. Mauris venenatis neque magna, vel imperdiet massa hendrerit quis. Sed pulvinar arcu id scelerisque lobortis. Mauris vestibulum ut purus vel convallis. Donec eu risus quam. Cras vestibulum semper volutpat. Nam finibus velit quis porta pretium. Nunc pharetra nunc ut auctor ultrices.";

function contarLetras(txt) {
    // Converte o texto para minúsculas
    txt = txt.toLowerCase();

    // Define as vogais
    const vogais = ["a", "e", "i", "o", "u"];

    // Inicializa os contadores
    let contadorVogais = 0;
    let contadorConsoantes = 0;

    // Itera sobre cada caractere do texto
    for (let letra of txt) {
        // Verifica se é uma letra do alfabeto
        if (/[a-z]/.test(letra)) {
            if (vogais.includes(letra)) {
                contadorVogais++; // É uma vogal
            } else {
                contadorConsoantes++; // É uma consoante
            }
        }
    }

    // Retorna o resultado como um objeto
    return {
        vogais: contadorVogais,
        consoantes: contadorConsoantes
    };
}

// Teste
let resultado = contarLetras(txt);
console.log(resultado);