
/*

Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.

Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. 

*/

//classe de carro
class carro  {
    marca;
    cor;
    gastoPorKm;

    // constructor 
    constructor (marcaCarro, corCarro,gastoPorKm){
        this.marca = marcaCarro;
        this.cor = corCarro;
        this.gastoMedioKm = gastoPorKm;
    }

    //método que calcula o gasto de percurso e retorna o valor gasto para o percurso
    gastoDePercurso (quantidadeKm,precoCombustivel){
        let valorViagem = precoCombustivel * (quantidadeKm / this.gastoMedioKm)
        return valorViagem.toFixed(2);
    }


}

//instanciando o objeto carro
const carroOpala = new carro('Chevrolet', 'Azul Royal', 7.9);

//Saida de retorno
console.log(`O carro da marca ${carroOpala.marca} gastará R$:${carroOpala.gastoDePercurso(155, 6.10)} para realizar o percurso.` )




