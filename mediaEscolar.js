
/* Algoritmo de calculo de média escolar

Faça um algoritmo que dado as três notas tiradas por um aluno
em um semestre da faculdade calcule e imprima a sua média e a sua 
classificação conforme tabela abaixo: 

Classificação:
 - Média menor que 5, reprovação;
 - Média entre 5 e 7, recuperação;
 - Média acima de 7, passou de semestre.

*/


//Variaveis
let notaUm = 10
let notaDois = 5
let notaTres = 10

//calculo da média de notas
let mediaNotas = (notaUm + notaDois + notaTres) / 3

//--- Resolução com operador ternário
let resultado = mediaNotas >= 5 ? (mediaNotas <= 7 ?  'Recuperação' : 'Passou') : 'Reprovado';
console.log(resultado)


//--- Resolução com operador if
if (mediaNotas >= 5 && mediaNotas <= 7){
    console.log('Aluno de Recuperação')
} else if (mediaNotas > 7) {
    console.log('Aluno passou de semestre')
} else {
    console.log('Aluno reprovado')
}


//-- Resolução através do conceito de classe e objeto 
class notasAluno  {
    constructor (notaUm, notaDois,notaTres) {
        this.notaUm = notaUm;
        this.notaDois = notaDois;
        this.notaTres = notaTres
    }

    mediaDeNotas (){
        let mediaNota = (this.notaUm + this.notaDois + this.notaTres) / 3
        return mediaNota;
    }

    verificarAprovação () {

        let media = this.mediaDeNotas();

        if (media >= 5 && media <=7){
            console.log('Aluno de Recuperação')
        } else if (media > 7) {
            console.log('Aluno passou de semestre')
        } else {
            console.log('Aluno reprovado')
        }
    }
}

//instanciando o objeto aluno
const aluno = new notasAluno (1,3,10)
aluno.verificarAprovação()

