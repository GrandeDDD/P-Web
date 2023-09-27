let cervejas = [
    {
        name: "Guiness",
        alcohol: "7,9%",
        ibu: "31",
        style: "Smoke-flavored",
    },
    {
        name: "Desperados",
        alcohol: "9,5%",
        ibu: "44",
        style: "Belgian And French Ale",
    },
    {
        name: "Becks",
        alcohol: "8,9%",
        ibu: "91",
        style: "Bock",
    },
]

//cs é um array de cervejas
const carregarDiv = (
    cs,
    Id = "cervejasDiv",
    properties = ["name", "alcohol", "ibu", "style"],
    columns = ["Nome", "Álcool", "Estilo", "Amargor"]
) => {
    const div = document.querySelector(`#${Id}`)
    div.innerHTML = ""

    const columnRow = `<tr>${columns
        .map((column) => `<th>${column}</th>`)
        .join("")}</tr>`

    const itemsHtml = cs.map((item) => {
        const cells = properties.map((property) => {
            const value = item[property] || ""
            return `<td>${value}</td>`
        })
        return `<tr>${cells.join("")}</tr>`
    })
    div.innerHTML = `<table>${columnRow}${itemsHtml.join("\n")}</table>`
}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregarDiv(cervejas))