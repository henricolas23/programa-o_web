console.log("teste em JavaScript");

//varíaveis
var animal = "gato";
console.log(animal);

let nomeCompleto = "fulano da silva"
console.log(nomeCompleto)

var valor1;
const valor0 = 10;
console.log(valor0)

valor1 = 12;
valor1 = '15'; //var, permite reatribuição
//valor0 = 14; -- const, nao permite reatribuição

//verificação de tipos
console.log(typeof valor1);

//algoritimo: entrada + processamento + saída
var nome = window.prompt("Nome");
console.log("seja bem vindo " + nome + " aproveite");
console.log(`seja-bem-vindo ${nome}. aproveite!`);//template literal
document.writeln (`seja-bem-vindo ${nome}. aproveite!\n`);

//operadores aritméticos: + - * / **
// 2 + 4 * 2


//operadores de comparção: < > <= >= == != === !==
console.log(5 == "5"); // igaldade -> olha apenas os valores
console.log(5 === '5'); // estritamente igual -> olha para o tipo e valor

//criar um algoritimo que realize a soma de dois numeros
var n1 = parseFloat (window.prompt("n1"));

var n2 = parseFloat (window.prompt("n2"));
var resultado = n1 + n2 ;
console.log (resultado);


// estruturas condicionais: if-else, switch-case
var idade = 10;
if (idade >=18){
    console.log("maior de idade");
} else { 
    console.log("menor de idade");
}

var hora = 10
if (hora < 12){
    console.log("bom dia")
}else if(hora > 18){
    console.log("boa tarde")
}else{
    console.log("boa noite");
}

var diaSemana = 3
switch (diaSemana){
    case 1:
        console.log("domingo");
    case 2:
        console.log("segunda-feira");
        break;
    default:
        console.log("escolha uma opção");
}

//estrutura de repetição: for e while
for(let i=0; i<5;i++){
    console.log("interação:" + i);
}

var i = 5;
while(i<5) {
    console.log("inetração: " +i);
    i++;
}