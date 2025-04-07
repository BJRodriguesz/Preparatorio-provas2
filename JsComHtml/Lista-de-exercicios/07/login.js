const usuario = prompt("Digite o nome de usuário:");
const senha = prompt("Digite a senha:");

if (usuario === "admin" && senha === "1234") {
    alert("Login bem-sucedido! Bem-vindo, admin.");
} else {
    alert("Erro: Usuário ou senha incorretos.");
}
