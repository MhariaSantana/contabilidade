
function fnSaudacao(){
    let nomeCompleto = ""
nomeCompleto = prompt("Informe seu nome completo")
alert("Seja bem vindo(a) " + nomeCompleto + " ao meu site")
}


console.log(nomeCompleto)
alert("Seja bem vindo(a) " + nomeCompleto)
document.write("Seja bem vindo(a)" + nomeCompleto)

function fnTrocarCorDeFundo(){
let cor = prompt("Informe uma cor \n 1 azul \n 2 vermelho \n 3 preto \n 4 rosa \n 5 verde \n 6 branco")
let corDeFundo = null
if(cor == "1"){
    corDeFundo = "blue"
}
else if(cor == "2"){
    corDeFundo = "red"
}
else if(cor == "3"){
    corDeFundo = "black"
}
else if(cor == "4"){
    corDeFundo = "pink"
}
else if(cor == "5"){
    corDeFundo = "green"
}
else if(cor == "6"){
    corDeFundo = "white"
}

document.body.style.backgroundColor = corDeFundo
}


