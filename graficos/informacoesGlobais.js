const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {

    const res = await fetch()

    const dados = await res.json()

    const paragrafo = document.createElement('p')
paragrafo.classList.add('graficos-container__texto')
paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${dados.tempo_medio}</span> horas conectadas.`
        console.log(paragrafo)

        const container = document.getElementById('graficos-container')
container.appendChild(paragrafo)
}
const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)

visualizarInformacoesGlobais()