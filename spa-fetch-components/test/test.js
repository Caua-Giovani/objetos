try{
    let x=y
    let y=x

} catch(erro){

    let text = `
    <strong>Nome do erro:</strong> ${erro.name} <br />
    <strong>Mensagem:</strong> ${erro.message} <br />
    <strong>Stack:</strong> <pre>${erro.stack}</pre>
    `;

    document.body.innerHTML = text

};

