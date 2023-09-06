let cervejas = ["Guinness", "Desperados", "Becks"];

function transformar(item) {
    return `<div class="cerveja">${item}</div>`;
}

function carregarDiv() {
    let div = document.getElementById("meu-amor");
    let tableHtml = "<table><tr><th>Cervejas</th></tr>";

    for (let cerveja of cervejas) {
        tableHtml += `<tr><td>${cerveja}</td></tr>`;
    }

    tableHtml += "</table>";
    div.innerHTML = tableHtml;
}

let botaoCarregar = document.getElementById("botaoCarregar");
botaoCarregar.addEventListener("click", carregarDiv);

let botaoOrdenar = document.createElement("button");
botaoOrdenar.textContent = "Mostrar cervejas ordenadas";
botaoOrdenar.addEventListener("click", () => {
    cervejas.sort(); // Ordena o array em ordem alfabética
    carregarDiv();
});

document.body.appendChild(botaoOrdenar);

let botaoEmbaralhar = document.createElement("button");
botaoEmbaralhar.textContent = "Embaralhar cervejas";
botaoEmbaralhar.addEventListener("click", () => {
    cervejas.sort(() => Math.random() - 0.5); // Embaralha o array
    carregarDiv();
});

document.body.appendChild(botaoEmbaralhar);
