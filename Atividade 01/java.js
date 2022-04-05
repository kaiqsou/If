
var notaum = parseFloat (prompt("Digite a nota um") );
var notadois = parseFloat (prompt("Digite a nota dois") );
var notatres = parseFloat (prompt("Digite a nota tres") );
var notaquatro = parseFloat (prompt("Digite a nota quatro") );

var media = (notaum + notadois + notatres + notaquatro) / 4;

alert("Sua média foi de: " + media);

if (media>=7) {
    alert("Você foi aprovado!");
} else {
    alert("Você foi reprovado!");
}