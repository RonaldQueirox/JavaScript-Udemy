let listElement = document.querySelector("#app ul")
let inputElement = document.querySelector("#app input")
let buttonElement = document.querySelector("#app button")

let tarefas = [];

function renderTarefas() {
    
}

function adicionar_tarefas() {
    if (inputElement === "") {
        alert("Digite alguma tarefa")
        return false;
    } else {

        let newTarefa = inputElement.value;

        tarefas.push(newTarefa);
        inputElement.value = '';
    }
}

buttonElement.onclick = adicionar_tarefas;