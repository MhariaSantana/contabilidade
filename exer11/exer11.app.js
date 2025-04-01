let nt1 = prompt("Informe a sua primeira nota ")
let nt2 = prompt("Informe a segunda nota")
let nt3 = prompt("Informe a terceira nota")
let nt4 = prompt("Informe a quarta nota ")

let resultado = nt1 + nt2 + nt3 + nt4 / 4

if (resultado >= 5){
     
    alert("Sua media foi," + resultado + ", você esta aprovado")
}
else if (resultado <5){
     
    alert("Sua media foi," + resultado + ", você esta reprovado ")
}