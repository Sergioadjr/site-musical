var totalCursos=document.querySelector(".js-total-de-cursos");
var totalHoras=document.querySelector(".js-total-de-horas");
var botaoConfirmar=document.querySelector(".js-botao-confirmar");

var quantidadeCursos=0;
var quantidadeHoras=0;

totalCursos.textContent=quantidadeCursos + "curso(s)"

function adicionarCurso(checkbox) {
    if (checkbox.checked) {
        quantidadeCursos++;
        quantidadeHoras += parseInt(checkbox.value);
    }
    else {
        quantidadeCursos--;
        quantidadeHoras -= parseInt(checkbox.value);
    }
    if (quantidadeCursos>0){
        botaoConfirmar.classList.remove("disabled")
    }
    else{
        botaoConfirmar.classList.add("disabled")
    }
    totalCursos.textContent = quantidadeCursos + "cursos(s)";
    totalHoras.textContent = quantidadeHoras + "h";
}