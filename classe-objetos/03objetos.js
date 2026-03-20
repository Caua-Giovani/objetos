let quadrado = {
    lados: 4,
    area: function(lado){

        return lado*lado
    },

    perimetro: function(lado){
        return this.lados*lado
    }
};

quadrado.cor

// forma reduzida
0

const quadrado2 = {
    lados: 4, 
    area(lado) {
        return lado*lado
    },

    perimetro(lado) {
        return this.lados * lado
    }
}

console.log(quadrado2.perimetro(5))

// ///////////////////////////////////////////////



const senai = {
    codigo: 603,
    cidade: 'Araraquara'
};

// console.log('--------------------');

// senai.telefone = 1633035252;
// senai.rua = 'Hugo Negrini';
// senai.telefone = 1723158968;
// delete senai.rua;

// senai.endereco = {rua: 'Hugo Negrini', bairro: 'Vila...'}
// senai.alunos = ['SESI', 'EEBA', 'comunidade']
// senai.alunos[2] = 'técnico'
// senai.endereco.numero = 62;

// console.log(senai);