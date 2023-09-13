let login = toString(prompt("Digite o login"))
let senha = Number(prompt("Digite sua senha:"))


if (login != "Pedrolindo" && senha != "12345"){
    console.log("login e senha incorretos");
}
else  {
    console.log("correto pode entrar");
}