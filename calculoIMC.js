
/* O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/

//-- Resolução através do conceito de objeto

class pessoa {
    constructor (nome,altura,peso) {
        this.nome = nome; 
        this.altura = altura;
        this.peso = peso;
    }

    calculandoImc () {
        let massaCorporal = this.peso/ (this.altura * this.altura) ;
        return massaCorporal;
    }
    
    classificacaoPessoa () {
        let imc = this.calculandoImc();
    
        if (imc < 18.5){
            return  `${this.nome} está abaixo do peso.`;
        } else if (imc === 18.5 && imc <= 24.99) {
            return `${this.nome} está com o peso normal.`;
        } else if (imc >= 25 && imc <=29.99 ){
            return `${this.nome} está acima do peso`;
        } else if (imc >= 30 && imc <=39.99 ){
            return `${this.nome} está obeso`;
        } else {
            return `${this.nome} está com obesidade grave`;
        }
    }

}

let imcDePessoa = new pessoa ('Bartolomeu', 1.5 , 56);
console.log(imcDePessoa.classificacaoPessoa());

// --- Resolução simplificada 

//variaveis
const pesoPessoa = 20;
const alturaPessoa =2;
const nomePessoa = 'BabaYaga'

//função de calculo do IMC
function calculadoraImc ( pesoPessoa, alturaPessoa){
    let media = pesoPessoa / (alturaPessoa*alturaPessoa);
    return media
}

//calculando o IMC
let imcCalculado = calculadoraImc(pesoPessoa,alturaPessoa);

//função que classifica o indice de massa corporal

function classificadorImc (imc, nomePessoa){
    if (imc < 18.5){
        return `${nomePessoa} está abaixo do peso.`;
    } else if (imc >= 18.5 && imc < 24.9){
        return `${nomePessoa} está com o peso normal.`;
    } else if (imc >= 25 && imc <=29.99 ){
        return `${this.nomePessoa} está acima do peso`;
    } else if (imc >= 30 && imc <=39.99 ){
        return `${this.nomePessoa} está obeso`;
    } else {
        return `${this.nomePessoa} está com obesidade grave`;
    }
}


//Classificando o IMC
console.log(classificadorImc(imcCalculado,nomePessoa));





