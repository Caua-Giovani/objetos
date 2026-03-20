// Função de seta que soma dois números
const soma = (a, b) => a + b;

// Função de seta que exibe uma saudação
const saudacao = nome => console.log(`Olá, ${nome}!`);

// Função de seta que calcula o quadrado de um número
const quadrado = x => x * x;

const areaQuadrado = lado => lado * lado

// Função de seta que verifica se o número é par
const ePar = num => num % 2 === 0;

// Função de seta que exibe a data e hora atual
const exibirDataHora = () => {
    const data = new Date();
    console.log(data.toLocaleString());
}