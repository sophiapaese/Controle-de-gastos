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
    let lista = document.getElementById("listaGastos").innerHTML;
    let novoGasto =  document.createElement("div");
    novoGasto.className = "gasto";

    novoGasto.innerHTML =
    '<span>' + descricao + '</span>' +
    '<span>R$ ' + valor.toFixed(2) + '</span>' +
    '<button onclick="excluirGasto(this, ' + valor + ')">Excluir</button>';

    lista.appendChild(novoGasto);

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

    function excluirgasto(botao, valor){
    if(confirm("Deseja excluir este gasto?")){

    // Remover o gasto da lista
    botao.parentElement.remove();

    //Atualiza o total e o saldo
    total = total - valor;
    saldo = saldo + valor;

    //Atualiza os valores na tela
    document.getElementById("total").textContent =
    "R$ " + total.toFixed(2);

    document.getElementById("saldo").textContent =
    "R$ " + saldo.toFixed(2);

    // Registrar a exclusão do histórico
    registrarHistorico("Exclusão de gasto", valor, "entrada");

    // Verificar se o saldo está baixo
    if (saldo < 100) {
    document.getElementById("avisoSaldo").textContent =
        "Atenção! Seu saldo está baixo.";
} else {
    document.getElementById("avisoSaldo").textContent = "";
}

    }
}

// Registrar movimentação de histórico
function registrarHistorico(descricao, valor, tipo) {
    let historico = document.getElementById("historico");

    let movimento = document.createElement("div");
    movimento.className = "movimento " + tipo;

    let nome = document.createElement("span");
    nome.textContent = descricao;

    let valorMovimento = document.createElement("span");

    if (tipo === "entrada") {
        valorMovimento.textContent = "+ R$ " + valor.toFixed(2);
    } else {
        valorMovimento.textContent = "- R$ " + valor.toFixed(2);
    }

    movimento.appendChild(nome);
    movimento.appendChild(valorMovimento);

    historico.prepend(movimento);
}

// Adicionar dinheiro ao saldo
function adicionarEntrada() {
    let campo = document.getElementById("valorEntrada");
    let valor = Number(campo.value);

    if (campo.value === "" || !Number.isFinite(valor) || valor <= 0) {
        alert("Informe um valor maior que zero!");
        return;
    }

    saldo = saldo + valor;

    document.getElementById("saldo").textContent =
        "R$ " + saldo.toFixed(2);

// Registrar a despesa no histórico
    registrarHistorico(descricao, valor, "despesa");
    
    registrarHistorico("Entrada de dinheiro", valor, "entrada");

    campo.value = "";
}