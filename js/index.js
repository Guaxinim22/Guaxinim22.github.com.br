var primeiroValor = parseInt(prompt ("digite o primeiro valor:"))
var segundoValor = parseInt (prompt ("digite o segundo valor:"))
var resultado = primeiroValor / segundoValor

var operacao = prompt("Digite 1 para fazer a divisão, 2 para multiplicação, 3 para soma e 4 para subtração: ")

if (operacao == 1 ) {var resultado = primeiroValor / segundoValor 
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>") } else if (operacao == 2) {var resultado = primeiroValor * segundoValor 
  document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>") 
} else if (operacao == 3) {var resultado = primeiroValor + segundoValor 
  document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>") } else if (operacao == 4) {var resultado = primeiroValor - segundoValor 
  document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>") }


