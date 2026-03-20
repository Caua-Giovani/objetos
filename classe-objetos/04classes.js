class Senai{
    // codigo;
    // cidade;
    // Dentro de uma classe não prcisa da palavra function
    // no js moderno n precisa declarar a variavel no topo

    descreverEscola(){
        console.log(`O código ${this.codigo} pertence a Escola de ${this.cidade}`)
    }
}


// instancia: é o objeto real criado a partir do molde.
// Usamos 'const' para garantir que a variavel sempre aponte para este objeto.

const senaiArqa = new Senai();

senaiArqa.codigo = 603;
senaiArqa.cidade = 'Araraquara';

const senaiMat = new Senai();
senaiMat.codigo = 145;
senaiMat.codigo = 'Matão';
senaiMat.rua = 'Rua das Flores'


senaiArqa.descreverEscola();
senaiMat.descreverEscola();