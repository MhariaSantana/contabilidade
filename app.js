console.log("Mharia")
console.log(20)
console.warn("atenção")
console.error("um erro")

let nome = "Mharia"
let idade = 38
console.log(nome, idade)
nome = "Mharia"
console.log(nome)

let nomeCompleto = ""
nomeCompleto = prompt("Informe seu nome completo")
console.log(nomeCompleto)
alert("Seja bem vindo(a) " + nomeCompleto)
document.write("Seja bem vindo(a)" + nomeCompleto)

let cor = prompt("Informe uma cor \n 1 azul \n 2 vermelho \n 3 preto \n 4 rosa \n 5 verde \n 6 laranja")
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
else if(cor == 4){
    corDeFundo == "rose"
}



document.body.style.backgroundColor = corDeFundo


