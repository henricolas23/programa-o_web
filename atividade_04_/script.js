// Seletores
const valorInput = document.getElementById("valor");
const tipoSelect = document.getElementById("tipo");
const resultado = document.getElementById("resultado");

// Atualizar valor
const atualizarValor = () => {
    calcularAbastecimento();
};

// Função de cálculo
const calcularAbastecimento = () => {
    const valor = parseFloat(valorInput.value);
    const tipo = tipoSelect.value;

    // Validação
    if (!valorInput.value) {
        alert("Por favor, informe um valor!");
        return;
    }

    if (isNaN(valor)) {
        alert("Digite apenas números válidos!");
        return;
    }

    if (valor <= 0) {
        alert("O valor deve ser maior que zero!");
        return;
    }

    // Preços (estrutura moderna no lugar do switch)
    const precos = {
        gasolina: 5.79,
        etanol: 3.89,
        diesel: 6.19
    };

    const preco = precos[tipo];

    if (!preco) {
        alert("Selecione um tipo de combustível!");
        return;
    }

    const litros = valor / preco;

    resultado.textContent = `Você pode abastecer ${litros.toFixed(2)} litros`;
};

// Formatar moeda
const formatarMoeda = (valor) => {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
};

// Evento keydown (arrow function)
valorInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        calcularAbastecimento();
    }
});