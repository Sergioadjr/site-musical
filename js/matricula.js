var totalCursos = document.querySelector(".js-total-de-cursos");
var totalHoras = document.querySelector(".js-total-de-horas");
var totalValores = document.querySelector(".js-total-valores");
var cursos = document.getElementsByName("curso")

var botaoConfirmar = document.querySelector(".js-botao-confirmar");

var quantidadeCursos = 0;
var quantidadeHoras = 0;
var quantidadeValores = 0;

totalCursos.textContent = quantidadeCursos + "curso(s)"

function adicionarCurso(checkbox) {
    if (checkbox.checked) {
        quantidadeCursos++;
        quantidadeHoras += parseInt(checkbox.value);
        quantidadeValores += parseFloat(checkbox.getAttribute("custo"));
    }
    else {
        quantidadeCursos--;
        quantidadeHoras -= parseInt(checkbox.value);
        quantidadeValores -= parseFloat(checkbox.getAttribute("custo"));
    }

    habilitarBotao();
    habilitarSelecionarTodos(checkbox);
    totalCursos.textContent = quantidadeCursos + "cursos(s)";
    totalHoras.textContent = quantidadeHoras + "h";
    totalValores.textContent = quantidadeValores.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });


}
function habilitarBotao() {
    if (quantidadeCursos > 0) {
        botaoConfirmar.classList.remove("disabled")
    }
    else {
        botaoConfirmar.classList.add("disabled")
    }
}

function habilitarSelecionarTodos(checkbox) {
    var selecionarTodos = document.querySelector("#js-cursos");
    if (!selecionarTodos.checked && quantidadeCursos == cursos.length) {
        selecionarTodos.checked = true;
    }
    else if (selecionarTodos.checked && !checkbox.checked) {
        selecionarTodos.checked = false;
    }
}

function selecionarTodos(checkbox) {
    for (var indice = 0; indice < cursos.length; indice++) {
        if (cursos[indice].checked != checkbox.checked) {
            cursos[indice].checked = checkbox.checked;
            adicionarCurso(cursos[indice]);
        }
    }
}