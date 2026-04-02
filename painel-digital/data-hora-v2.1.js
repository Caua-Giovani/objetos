
const temas = {
    corpo: {
        backgroundColor: '#121212',
        color: '#00ff99',
        fontFamily: "'Courier New', Courier, monospace",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        margin: '0',
        textShadow: '0 0 10px rgba(0, 255, 153, 0.5)'
    },
    boasVindas: {
        fontSize: '24px',
        marginBottom: '10px',
        textTransform: 'uppercase',
        letterSpacing: '2px'
    },
    relogio: {
        fontSize: '100px',
        fontWeight: 'bold'
    },
    dataInfo: {
        fontSize: '20px',
        marginTop: '10px',
        color: '#ffffff',
        opacity: '0.8'
    }
};

const elBoasVindas = document.createElement('div');
const elRelogio = document.createElement('div');
const elDataCompleta = document.createElement('div');




function aplicarEstilos(elemento, estilo){
    Object.assign(elemento.style,estilo);
};



function saudacao(agora){
    const horaAtual = agora.getHours();
    let saudacao = 'Boa Noite';
    if (horaAtual<12) saudacao = 'Bom Dia';
    else if (horaAtual < 18) saudacao = 'Boa Tarde';

    return saudacao;
};

function data(agora){
    const opcoes = {weekday:'long', year:'numeric', month:'long', day:'numeric'};
    const dataFormatada = agora.toLocaleDateString('pt-br',opcoes);

    return dataFormatada;
};

function inserir(){
    const agora = new Date();
    elBoasVindas.textContent = `Olá ${saudacao(agora)}!`;
    elRelogio.textContent = agora.toLocaleTimeString('pt-BR');
    elDataCompleta.textContent = data(agora);
};

aplicarEstilos(document.body, temas.corpo);
aplicarEstilos(elBoasVindas, temas.boasVindas);
aplicarEstilos(elRelogio, temas.relogio);
aplicarEstilos(elDataCompleta, temas.dataInfo);

document.body.append(elBoasVindas,elRelogio,elDataCompleta);

setInterval(inserir,1000)

