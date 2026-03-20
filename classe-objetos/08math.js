const gerarNumeroAleatorio = (numero) => {
    let numeroAleatorio = Math.random();
    console.log(`Sorteio: ${numeroAleatorio}`);

    numeroAleatorio *=numero;
    console.log(`Multiplicar: ${numeroAleatorio}`);

    numeroAleatorio = Math.floor(numeroAleatorio);
    console.log(`Arredondar: ${numeroAleatorio}`)

    numeroAleatorio +=1;
    console.log(`Somar 1: ${numeroAleatorio}`);

    return numeroAleatorio
}

let numeroSorteado = gerarNumeroAleatorio(30);

console.log(`Número sorteado: ${numeroSorteado}`);

const gerarNumeroAleatorioR = (min = 1, max = 15) => {
    return Math.floor(Math.random() * (max - min + 1))+ min;
}

console.log(gerarNumeroAleatorioR())
console.log(gerarNumeroAleatorioR(10,15))