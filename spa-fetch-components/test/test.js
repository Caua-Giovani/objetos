/* Testes com os exemplos da w3 Schools */

/* Lançar um excessão (erro personalizado) */

try{

    let idade = 2;

    if (idade < 0){
        throw GeradorErros('Idade Invalida',1001,'VALIDACAO')
    }

} catch(erro){

    let text = `
    <strong>Nome do erro:</strong> ${erro.name} <br />
    <strong>Mensagem:</strong> ${erro.message} <br />
    <strong>Código</strong> ${erro.codigo}<br />
    <strong>Tipo</strong> ${erro.tipo}<br />
    <strong>Stack:</strong> <span>${erro.stack}</span>
    `;

    document.body.innerHTML = text

};


/* Criar uma função geradora de erro */

function GeradorErros(mensagem, codigo, tipo){
    let erro = new Error(mensagem)
    erro.codigo = codigo
    erro.tipo = tipo

    return erro
}

try{

    let saldo = 200;

    if (saldo < 200){
        throw GeradorErros('Saldo Insuficiente',1100,'VALIDACAO')
    }

} catch(erro){

    console.log(erro)

};

/* Testando a função: carregarComponente
01 - Criar o componente que será injetado
02 - Criar o elemento que irá receber o componente (no index index.html) (<div id="app"></div>)
03 - Capturar o elemento que irá receber o componente( no index.html)
04 - Utilizar a função para carregar o componente */


/* Criar uma requisição HTTP com fetch e .then */

/* Criar uma requisição HTTP com fecth e async/await */

