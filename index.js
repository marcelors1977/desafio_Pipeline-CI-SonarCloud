const Todos = require("./tarefas")

Todos.adicionar("Limpar a casa")
Todos.adicionar("Fazer mercado")
Todos.adicionar("Pagar contas")

console.log('Tarefas a executar:')
Todos.listar().map(item => { console.log (item.tarefa)})

function asyncForEach(array, timeout, callback, index) {
    index = index || 0
    setTimeout(function() {
        callback(array[index], index)
        if (array.length > index + 1) {
            asyncForEach(array, timeout, callback, index + 1)
        }
    }, timeout)
}

asyncForEach(Todos.listar(), 2000, function(item, index) {
    Todos.realizar(item.tarefa)
    console.log(item.tarefa + ' -> ' + (item.executada === "false" ? "não realizada ainda" : "tarefa executada") )
})

module.exports = { asyncForEach }