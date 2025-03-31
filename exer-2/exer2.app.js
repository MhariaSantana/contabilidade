let num1 = prompt ("Escolha o primeiro número ")
let num2 = prompt ("Escolha o segundo número  ")

let operacao = prompt("Escolha a operação. \n  + \n  - \n  / \n  * ")


if(operacao == "+"){
    let resultado = parseFloat(num1) + parseFloat(num2)
    alert("O resultado da e " + resultado)
}
else if(operacao == "-"){
    resultado = num1 - num2
    alert("O resultado da e " + resultado)

}
else if(operacao == "/"){
    resultado = num1 / num2
    alert("O resultado da e " + resultado)
}
else if(operacao == "*"){
    resultado = num1 * num2
    alert("O resultado da e " + resultado)
}

