/* Atividade de Média */


var nota1 = parseFloat(prompt("Digite a primera nota"));
var nota2 = parseFloat(prompt("Digite a segunda nota"));
var nota3 = parseFloat(prompt("Digite a terceira nota"));
var media = (nota1 + nota2 + nota3) /3

if (media >= 7){
    alert("Parabéns! Sua média foi de " + media + ", portanto, você foi aprovado.")
}else if (5  > media){
    alert("Sua média foi de " + media + ", portanto, está reprovado.")
}else {
    alert ("Sua média foi de " + media + ". Está de recuperação!")
}