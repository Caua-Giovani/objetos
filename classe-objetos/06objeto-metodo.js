const senai = {
    codigo:603,
    cidade: 'Araraquara',

    descreverEscola(){
        console.log(`O código ${this.codigo} pertence a Escola SENAI de ${this.cidade}.`)
    }
};

senai.codigo = 608;
senai.cidade = 'Matão'
senai.descreverEscola()