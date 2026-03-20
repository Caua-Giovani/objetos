class Senai {
    constructor(codigo, cidade, ano) {
        this.codigo = codigo;
        this.cidade = cidade
        this.ano = ano
    }

    // método para exibir as informaçõe formatadas
    dadosEscola(){
        console.log(`Unidade: ${this.cidade} | Código Interno ${this.codigo} | Ano ${this.ano}`);
    }

    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
      }
    
    }
    
// A criação agora é feita em apenas uma linha, passando os valores como os argumenos para o construtor

const escolaA = new Senai (603, 'Araraquara', 20);
const escolaB = new Senai (603, 'São Carlos', 20);
const escolaC = new Senai (603, 'Americo Brasiliense', 20);

// console.log("My car is " + escolaA.age() + " years old.")

escolaA.dadosEscola();
escolaB.dadosEscola();
escolaC.dadosEscola();