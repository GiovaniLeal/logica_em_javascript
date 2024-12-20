/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço 
 normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir 
 para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

//--Primeira resolução
const precoProduto = 100;
const formaDePagamento = 4;

if(formaDePagamento === 1 ) {
    console.log(precoProduto - (precoProduto * 0.10));
} else if (formaDePagamento === 2) {
    console.log(precoProduto - (precoProduto * 0.15));
} else if (formaDePagamento === 3){
    console.log(precoProduto);
} else {
    console.log(precoProduto + (precoProduto*0.10));
}


// -- Segunda resolução 

//variáveis
const valorProduto = 200;
const selecaoPagamento = 2;

//função que atribui o desconto ou juros e retorna o valor final a ser pago.
function calculaValorFinal (valor, formaPagamento){

    let descontoOuJuros = 0;
    let valorFinal = 0;

    switch (formaPagamento) {

        case 1 :
            descontoOuJuros = 0.10;
            valorFinal = valor - (valor * descontoOuJuros)
            break;
        case 2 : 
            descontoOuJuros = 0.15;
            valorFinal = valor - (valor * descontoOuJuros)
            break;
        case 3 :    
            valorFinal = valor
        case 4 : 
            descontoOuJuros = 0.10;
            valorFinal = valor + (valor * descontoOuJuros)
            break;

        default :
            console.log('Método de pagamento inválido');
            return null;   
    } 

    return valorFinal;

}
//Chamada da função calculaValorFinal e saida esperada
console.log(`Valor a pagar R$: ${calculaValorFinal(valorProduto,selecaoPagamento)}`);


//--Terceira resolução 

//função que aplica o desconto no valor 
function aplicarDesconto (valor, desconto){
    return valor - (valor * desconto)
}

//função que aplica o juros no valor 
function aplicarJuros (valor, desconto) {
    return valor + (valor * desconto)
}

//função que valida a forma de pagamento e chama as funções de desconto e juros
function verificarPagamento (preco, Pagamento){

    if(Pagamento === 1 ) {
        return aplicarDesconto(preco,0.1);
    } else if (Pagamento === 2) {
        return aplicarDesconto(preco,0.15);
    } else if (Pagamento === 3){
        return preco;
    } else {
        return aplicarJuros (preco, 0.1) ;
    }   
}

//Chamada da função verificarPagamento e saida esperada
console.log(`Total R$:${verificarPagamento(100,3)}`);


