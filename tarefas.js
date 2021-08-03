const todos = []

function listar(){
    return todos
}
    
function adicionar(_tarefa) {
    let todo = {
        tarefa: _tarefa,
        executada: false,
    }

    todos.push(todo)
}

function realizar(_tarefa) {
    let todoFound = false;
    todos.forEach((todo) => {
        if (todo.tarefa == _tarefa) {
            todo.executada = true
            todoFound = true
            return
        }
    });

    if (!todoFound) {
        throw new Error(`Nenhuma tarefa ${_tarefa} encontrada`)
    }
}

module.exports = { listar,
                  adicionar,
                  realizar
                }