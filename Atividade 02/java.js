/*
    Faça um algoritmo que receba dois numeros e indique qual é o maior
*/

var numeroum = parseFloat(prompt("Digite o primeiro número"));
var numerodois = parseFloat(prompt("Digite o segundo número"));

if (numeroum > numerodois) {
    alert("O maior é o primeiro número digitado: " + numeroum);
} else if (numeroum < numerodois) {
    alert("O maior é o segundo número digitado: " + numerodois);
} else {
    alert("Os números são iguais");
}