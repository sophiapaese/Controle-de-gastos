let saldo = 500;
let total = 0;

// Função para adicionar novo gasto
function adicionarGasto() {
    // Pegar os valores dos campos
    let descricao = document.getElementById("descricao").value;
    let valor = Number(document.getElementById("valor").value);

    if (descricao.trim() === "" || valor <= 0) {
        alert("Preencha a descrição e o valor!");
        return;
    }

    // Atualiza os valores
    total = total + valor;
    saldo = saldo - valor;

    // Adiciona o gasto na lista
    document.getElementById("listaGastos").innerHTML +=
        '<div class="gasto">' +
        '<span>' + descricao + '</span>' +
        '<span>R$ ' + valor.toFixed(2) + '</span>' +
        '</div>';

    // Atualiza o total gasto
    document.getElementById("total").textContent =
        "R$ " + total.toFixed(2);

    // Atualiza o saldo restante
    document.getElementById("saldo").textContent =
        "R$ " + saldo.toFixed(2);

    // Limpa os campos
    document.getElementById("descricao").value = "";
    document.getElementById("valor").value = "";
}