//objetos
const pessoa = {
    nome: "fulano",
    idade: 10,
    status: true
}; //objeto

console.log(pessoa);

//acessa as propriedades do objetos 
console.log(pessoa.nome)

const veiculo = {};
veiculo.marca = "fiat"; 
veiculo.ano = "2023";
console.log(veiculo);

veiculo.marca = "BYD"
console.log(veiculo);


//construtor-> cria diversas instancias
class veiculo2 {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }
};

const c1 = new veiculo2("BYD", 2025);
const c2 = new veiculo2("GWM", 2024);
console.log(c2.marca);


//modificadores de acesso 
class contaBancaria{
    #saldo =0;
    constructor(saldoInicial){
        this.saldo = saldoInicial;
    };

    //metodo 
    getSaldo(){
        return this.#saldo;
    };

    const conta = new contaBancaria(100);
    //
}


const pessoa2 = []; //array