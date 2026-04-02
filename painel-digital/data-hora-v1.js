const containerData = document.createElement('div');
const containerHora = document.createElement('div');
const containerDiaSemana = document.createElement('div');

document.body.appendChild(containerData);
document.body.appendChild(containerHora);
document.body.appendChild(containerDiaSemana);

function atualizarRelogio() {
    const agora = new Date();

    containerData.textContent = agora.toLocaleDateString();
    containerHora.textContent = agora.toLocaleTimeString();
    containerDiaSemana.textContent = agora.toLocaleString('pt-br',{weekday: 'long'});

};

atualizarRelogio();
setInterval(atualizarRelogio, 1000);

function aplicarEstilos(){
    document.body.style.display = 'flex';
    document.body.style.height = '100vh';
    document.body.style.flexDirection = 'column';
    document.body.style.alignItems = 'center';
    document.body.style.justifyContent = 'center';
    document.body.style.color = 'red';
    document.body.style.overflow = 'hidden';
    document.body.style.fontSize = '70px';
};

aplicarEstilos();

