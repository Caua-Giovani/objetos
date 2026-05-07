const select_estados = document.querySelector('#estados')
const select_municipios = document.querySelector('#municipios')

select_estados.addEventListener('input', async ()=>{

    const estado = select_estados.value
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/distritos`

    const consulta = fetch(url)

    
    let resposta = await consulta
    if(!resposta.ok){
        throw new Error('Erro na Requisição')
    }
    let respObj = await resposta.json()

    select_municipios.length=1
    select_municipios.removeAttribute('disabled')
    
    respObj.forEach(municipio =>{
        const novaOpcao = document.createElement('option')
        novaOpcao.textContent = municipio.nome
        select_municipios.appendChild(novaOpcao)
    })
    
})
