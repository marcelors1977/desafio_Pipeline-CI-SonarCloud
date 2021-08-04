class Objetivos {

    constructor () {
        this.todos = []
    }

    listar(){
        return this.todos
    }

    adicionar(_tarefa) {
        let objetivo = {
            tarefa: _tarefa,
            executada: false,
        }
    
        this.todos.push(objetivo)
    }

    realizar(_tarefa) {
        let todoFound = false
        this.todos.forEach((objetivo) => {
            if (objetivo.tarefa == _tarefa) {
                objetivo.executada = true
                todoFound = true
            }
        })

        if (!todoFound) {
            throw new Error(`Nenhuma tarefa ${_tarefa} encontrada`)
        }
    }
}

module.exports =  Objetivos