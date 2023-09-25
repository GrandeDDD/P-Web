const filmes = [
    "Quanto Mais Idiota Melhor (1 e 2)",
    "A Vida Secreta de Walter Mitty",
    "Kill Bill (1 e 2)",
    "Redline",
    "O Grande Lebowski",
]

const transformarPTab = (filmes) => {
    return `<table><tr><th>Filmes Maneiros 😎(lista curada por mim mesmo)</th></tr>${filmes
        .map((item) => `<tr><td>${item}</td></tr>`)
        .join("")}</table>`
}

const carregarDiv = () => {
    const div = document.getElementById("meu-amor")
    div.innerHTML = transformarPTab(filmes)
}

const sort = () => {
    const div = document.getElementById("meu-amor")
    const itensOrdenados = [...filmes].sort()
    div.innerHTML = transformarPTab(itensOrdenados)
}

const shuffle = () => {
    const div = document.getElementById("meu-amor")
    const itensEmbaralhados = [...filmes].sort(() => Math.random() - 0.5)
    div.innerHTML = transformarPTab(itensEmbaralhados)
}

const carregarLink = document.getElementById("carregarLink")
carregarLink.addEventListener("click", carregarDiv)

const ordenarLink = document.getElementById("ordenarLink")
ordenarLink.addEventListener("click", sort)

const embaralharLink = document.getElementById("embaralharLink")
embaralharLink.addEventListener("click", shuffle)