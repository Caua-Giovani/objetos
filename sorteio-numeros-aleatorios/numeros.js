const quantidadeNumerosRecentes = 5

const sliderMin= document.querySelector('.intervalo__slider--min');
const sliderMax= document.querySelector('.intervalo__slider--max');

const botaoSortear = document.querySelector('.area__button')

const atualizarValorSlider=()=>{
    const min = Number(sliderMin.value);
    const max = Number(sliderMax.value);

    console.log(min, max);

    document.querySelector('.intervalo__valor--min').textContent = min;
    document.querySelector('.intervalo__valor--max').textContent = max;

};

sliderMin.addEventListener('input' , atualizarValorSlider);
sliderMax.addEventListener('input' , atualizarValorSlider);

atualizarValorSlider();

const gerarNumeroAleatorio = (min,max) =>{
    let numeroSorteado = Math.floor(Math.random() * (max - min + 1))+min;
    return numeroSorteado;
};




// const botaoSortear = document.querySelector('.area__button')
// botaoSortear.addEventListener('click',document.querySelector('.area__numero').textContent = gerarNumeroAleatorio())