const quantidadeNumerosRecentes = 5

const sliderMin= document.querySelector('.intervalo__slider--min');
const sliderMax= document.querySelector('.intervalo__slider--max');

const botaoSortear = document.querySelector('.area__button')
const elementoNumero =document.querySelector('.area__numero')

const listaNumeros = document.querySelector('.historico__lista')
const botaoLimparHistorico = document.querySelector('.sorteador__limpar')

const mensagem = document.querySelector('.area__mensagem')

const atualizarValorSlider=()=>{
    const min = Number(sliderMin.value);
    const max = Number(sliderMax.value);

    document.querySelector('.intervalo__valor--min').textContent = min;
    document.querySelector('.intervalo__valor--max').textContent = max;

};

sliderMin.addEventListener('input' , atualizarValorSlider);
sliderMax.addEventListener('input' , atualizarValorSlider);

atualizarValorSlider();

const gerarNumeroAleatorio = (min,max) =>{
    let numeroSorteado = Math.floor(Math.random() * (max - min + 1))
    numeroSorteado+=min;
    return numeroSorteado;
};



const atualizarTexto = (elemento,valor)=>{
    elemento.textContent=valor;
};


const criarItemHistorico =(numero)=>{
    const li = document.createElement('li');
    li.textContent=numero;

    li.addEventListener('click',()=>{
        navigator.clipboard.writeText(numero);
    });
    return li;
};




const atualizarHistorico=(lista,item,limite)=>{
    lista.prepend(item);

    if(lista.children.length>limite){
        lista.removeChild(lista.lastChild);
    }
};

const limparHistorico = ()=>{
    if (confirm('Deseja realente limpar o histórico de sorteios?')){
        listaNumeros.textContent='';
        elementoNumero.textContent='0'
    }
};

botaoSortear.addEventListener('click',()=>{

    const min = Number(sliderMin.value);
    const max = Number(sliderMax.value);

    if(min>max){
        mensagem.textContent='O numero minimo deve ser menor que o maximo';
        return;
    }

    mensagem.textContent='';

    const numero =gerarNumeroAleatorio(Number(sliderMin.value),Number(sliderMax.value))
    atualizarTexto(elementoNumero,numero);
    atualizarHistorico(listaNumeros,criarItemHistorico(numero),quantidadeNumerosRecentes)
});

botaoLimparHistorico.addEventListener('click',limparHistorico)

