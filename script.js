// Função para adicionar tarefa
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");

        // Criando a tarefa
        const li = document.createElement("li");
        li.textContent = taskText;

        // Adicionando a opção de marcar como concluída
        li.onclick = function () {
            li.classList.toggle("completed");
        };

        // Adicionando a opção de remover tarefa
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        removeButton.onclick = function (e) {
            e.stopPropagation(); // Impede a remoção ao clicar na tarefa
            taskList.removeChild(li);
        };

        // Adicionando o botão de remoção
        li.appendChild(removeButton);

        // Adicionando a tarefa à lista
        taskList.appendChild(li);

        // Limpando o campo de entrada
        taskInput.value = "";
    }
}
