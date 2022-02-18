var readline = require('readline');
const { cripto } = require('./cifradetrilho');

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Escreva uma Frase para ser criptografad?\n", function(answer) {
  cripto(answer)
  leitor.close();
});